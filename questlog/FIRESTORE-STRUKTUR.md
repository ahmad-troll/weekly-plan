# QuestLog · Firestore-Struktur

Die Anmeldung erfolgt ausschließlich per E-Mail und Passwort über Firebase Auth. Der Username ist der öffentliche Spielername, keine Anmeldemöglichkeit. Firestore enthält keine Passwörter. Private Quests, Counter, Inventare und Einführungsdaten sind nur für den jeweiligen Nutzer lesbar.

| Pfad | Inhalt | Zugriff |
| --- | --- | --- |
| users/{uid} | Profil, Identitätsformat 2 | Eigentümer |
| usernames/{usernameKey} | Namensreservierung | Einzelabruf angemeldeter Nutzer, keine Liste |
| players/{uid} | Username und Start-Klasse | Lesen angemeldeter Nutzer |
| users/{uid}/settings/plan | Bis zu 50 Quests | Eigentümer |
| users/{uid}/days/{date} | Eingefrorener Quest-Tag | Eigentümer |
| users/{uid}/settings/focus | Bis zu zehn Counter und automatische Tagesabrechnung | Eigentümer |
| users/{uid}/focusDays/{date} | Erhaltene alte Fokus-XP und bestätigte Coin-Tage | Eigentümer |
| users/{uid}/settings/shop | Coin-Guthaben, gekaufte und ausgerüstete Artikel | Eigentümer |
| users/{uid}/settings/tutorial | Fortschritt der ersten Einführung | Eigentümer |
| leaderboard/{uid} | Gesamt-Zusammenfassung, Format 2 | Angemeldete Nutzer; eigenes Schreiben |
| weeklyLeaderboards/{weekStart}/players/{uid} | Wochen-Zusammenfassung, Format 2 | Angemeldete Nutzer; eigenes Schreiben |
| playerStats/{uid} | Für servergeprüfte Werte reserviert | Angemeldete Nutzer; kein Browser-Schreiben |

## Profile und Einführung

users, players und usernames entstehen gemeinsam bei der Ersteinrichtung. Gegenseitige getAfter-Prüfungen binden sie an dieselbe Identität. Username und Start-Klasse bleiben unveränderlich. Klassen: warrior, mage, ranger, rogue, engineer. Alle haben dieselben XP-Regeln. Die Level-Evolution wird aus den XP berechnet.

Beim ersten Erstellen des Profils wird auch das private settings/tutorial angelegt:

- schemaVersion: 1.
- eligible: true.
- status: pending, dismissed oder complete.
- step: ganze Zahl von 0 bis 5.
- updatedAt: Firestore-Zeitstempel.

Nach der Charakter-Auswahl startet die Einführung mit einem Magier auf LVL MAX. pending kann beim erneuten Anmelden am gespeicherten Schritt fortgesetzt werden. dismissed und complete öffnen nicht automatisch erneut. Der Hilfe-Knopf **So geht’s** zeigt die Tour erneut, ohne den gespeicherten Abschluss zu ändern. Bestehende Konten ohne Marker erhalten keine automatische Einführung. In Schritt 1 wird nach einem ausdrücklichen Klick eine echte Quest im privaten Spielplan gespeichert. Die übrigen animierten Beispiele vergeben keine XP oder Coins und ändern keine echten Counter oder Käufe.

Die geführte erste Quest verwendet innerhalb des jeweiligen Nutzers die ID **tutorial-first-v1**. Eine Transaktion liest den aktuellen Spielplan und heutigen Tagesdatensatz. Existieren bereits Quests, wird keine neue erste Quest geschrieben. So bleiben Neuladen und Wiederholungen ohne zusätzliche Kopie; die üblichen Regeln für einen bereits begonnenen Tagesplan gelten weiter. Die Form und Regeln des Einführungs-Dokuments bleiben unverändert.

## Automatische Counter

Die Oberfläche nennt die Funktion Counter. Die bisherigen Speicherpfade und das Array timers bleiben erhalten, damit alte Daten weiter nutzbar sind.

settings/focus enthält in schemaVersion: 2:

| Feld | Zweck |
| --- | --- |
| timers | Aktive Counter; je id, title, startDate und startedAt |
| automaticStartedOn | Berliner Datum, an dem die automatische Abrechnung für dieses Konto beginnt |
| rewardDay | Aktueller noch nicht abgerechneter Berliner Kalendertag |
| rewardTimers | Teilnehmer dieses Tages; entfernte Counter bleiben für heute darin, neue kommen sofort hinzu |
| blockedDate | Nach einem Reset das gesperrte Tagesdatum; sonst leer |
| firstDayLegacyCoins | Bereits bestätigte alte Belohnung am Umstiegstag, 0 bis 3 Coins; schützt vor Verlust und Doppelvergütung |
| updatedAt | Firestore-Zeitstempel |

startedAt ist der Beginn des laufenden Counter-Zyklus in Millisekunden seit Unix-Epoche. Die Anzeige zählt von dort hoch. startDate ist das Berliner Startdatum.

Am Ende eines Berliner Kalendertages bestimmt die jüngste startedAt-Zeit in rewardTimers die gemeinsame Belohnung: unter 7 × 24 Stunden 1 Coin, ab 7 × 24 Stunden 2 Coins, ab 30 × 24 Stunden 3 Coins. Schon ein Starttag kann am folgenden Tageswechsel 1 Coin geben. Ohne Teilnehmer gibt es keine Coins. Ein Tagesdatum in blockedDate erhält keine gemeinsame Belohnung.

Beim Reset startet nur der betroffene Counter sofort neu; die gemeinsame Belohnung für heute wird gesperrt. Beim Entfernen verschwindet der Counter aus timers, bleibt für heute in rewardTimers und zählt ab morgen nicht mehr mit. Eine Reset-Sperre bleibt auch bestehen, wenn der Counter anschließend entfernt wird.

Nach Tageswechseln werden geschlossene Tage anhand der gespeicherten Metadaten berechnet. Die App muss nicht offen bleiben. Bei der nächsten Online-Nutzung, beim Tageswechsel, bei einer Counter-Änderung oder einer Shop-Aktion werden focus und shop frisch gelesen. Eine Firestore-Transaktion erhöht earnedCoins und setzt den Abrechnungsstand gemeinsam weiter. Dadurch erhält derselbe Tag keine doppelte Auszahlung. Für automatisch verdiente Coins werden keine täglichen focusDays-Dokumente nachträglich erzeugt.

Die Anzeige „heute“ ist noch keine ausgebbare Belohnung. Verfügbar sind Coins abgeschlossener und abgerechneter Tage. Der Kalendertag folgt Europe/Berlin; die 7-/30-Tage-Stufe verwendet volle verstrichene 24-Stunden-Tage.

## Alte Tagesdaten und Migration

Bestehende focusDays bleiben erhalten. Alte Tagesdatensätze ohne rewardVersion liefern ihre bisherigen Fokus-XP. Die bestätigte Coin-Version enthält weiterhin rewardVersion: 2, rewardAt, legacyXp und ihre gespeicherten Teilnehmer-Statuswerte. Diese alten bestätigten Coins bleiben erhalten; die neue Oberfläche verlangt keine weiteren Bestätigungen.

Alte Counter mit targetDays bleiben lesbar. Das frühere Startdatum und gespeicherte Fehlschläge ergeben den bisherigen Counter-Beginn. Das Tagesziel wird nicht mehr verwendet.

Beim ersten Öffnen der neuen Version wird die automatische Abrechnung für den aktuellen Berliner Kalendertag eingerichtet. automaticStartedOn verhindert, dass frühere nicht bestätigte Tage nachträglich Coins erhalten. Bereits bestätigte alte Belohnungen werden berücksichtigt; firstDayLegacyCoins behandelt den Umstiegstag ohne Doppelvergütung. Alte XP, Coins und Käufe werden nicht zurückgesetzt.

## Inventar und Coin-Abrechnung

settings/shop enthält:

- owned: eindeutige Artikel-IDs, höchstens neun.
- equipped: genau aura, frame, scene und buddy. Leerstring bedeutet Standard-Look; andere IDs müssen gekauft sein und zum Slot passen.
- earnedCoins: bereits abgerechnete Tages-Coins, ganzzahlig.
- settledThrough: Abrechnungsstand der alten bestätigten Coin-Tage.
- schemaVersion: 2 und updatedAt. Alte Inventare mit schemaVersion: 1 und drei Slots bleiben lesbar. Die App ergänzt buddy mit Leerstring, ohne Coins oder Besitz zu verändern; beim nächsten Inventar-Schreiben wird Version 2 gespeichert.

Ausgaben werden aus owned und den festen Katalogpreisen abgeleitet: aura-ember 8, aura-void 18, frame-neon 6, frame-gold 12, scene-forest 15, scene-nebula 25, buddy-robot 20, buddy-fox 35, buddy-dragon 60. Ein gekauftes Objekt bleibt im Inventar. Ausrüsten kostet nichts.

Guthaben = verdiente und abgerechnete Coins minus Summe der gekauften Artikelpreise. Noch ausstehende bestätigte alte Coin-Tage werden ebenfalls erhalten und abgerechnet. Automatische neue Tages-Coins werden erst nach Ende des betreffenden Kalendertages gutgeschrieben. Kauf und Counter-Abrechnung lesen den aktuellen Stand in Transaktionen; ein paralleler Kauf muss das aktualisierte Inventar erneut prüfen.

Keine Cloud Function, keine laufende Hintergrunduhr und keine Echtgeldeinkäufe.

## Ranglisten und XP

Globale Zusammenfassungen bleiben in Format 2: username, usernameKey, characterClass, questXp, bonusXp, totalXp, level, recordedDays, bonusDays, equipped und updatedAt. equipped enthält genau die ausgerüsteten IDs für aura, frame, scene und buddy. Alte Zusammenfassungen ohne equipped bleiben lesbar und zeigen den Standard-Look. bonusXp enthält nur erhaltene alte Fokus-XP. Coins und Shop-Käufe ändern keinen XP-Wert.

Ausrüstung wird auch bei unveränderten XP veröffentlicht. Die Veröffentlichungs-Transaktion liest settings/shop frisch. Öffentlich erscheinen nur die vier ausgerüsteten IDs; Inventar, Guthaben, E-Mail und Counter-Namen bleiben privat.

Wochen-Dokumente ergänzen weekStart, weekQuestXp (0–70), weekBonusXp (0–7, nur Alt-Fokus-XP) und weekXp. Wochen beginnen montags in Europe/Berlin. Das Charakter-Level wird weiterhin aus den Gesamt-XP berechnet.

## Regeln und Prüfung

Für dieses Update sind neue **firestore.rules** erforderlich. Sie erlauben das neue Counter-Format und das private Einführungs-Dokument. Bestehende Datenformate bleiben lesbar. Regeln prüfen Eigentümer, erlaubte Felder, Werte und kosmetische Artikel. Fremde Inventare und private Counter sind gesperrt. Öffentlich geschriebene Ausrüstung muss dem privaten Inventar des Eigentümers entsprechen.

Die Regeln beweisen keine tatsächliche Gewohnheitsänderung und prüfen nicht die vollständige selbst gemeldete Historie auf einem vertrauenswürdigen Server. Für den persönlichen Tracker und kosmetische Artikel bleibt die bestehende Datenbasis erhalten.

Die lokalen Tests verwenden simulierte Firebase-Antworten. Die Regeln müssen beim Veröffentlichen geprüft und anschließend mit echten Konten getestet werden: Anmeldung, Einführungsfortschritt, Eigentümer-Sperren, Coin-Abrechnung, Reset und Shop.
