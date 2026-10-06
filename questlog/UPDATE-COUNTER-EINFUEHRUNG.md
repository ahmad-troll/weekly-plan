# QuestLog · Counter und einfache Einführung

## Was sich geändert hat

Die Gewohnheits-Timer heißen jetzt **Counter**, weil die Zeit hochzählt. Der Knopf zum täglichen Bestätigen entfällt. Du startest einen Counter einmal und verwendest Reset, wenn du neu beginnen möchtest.

Neu registrierte Spieler erhalten nach der Charakter-Auswahl eine kurze animierte Einführung mit einem Magier auf LVL MAX. Mit ihm erstellst du nach einem ausdrücklichen Klick deine erste echte tägliche oder wöchentliche Quest. Kurze Beispiele zeigen anschließend XP, Counter, Shop und Rangliste. Du kannst weitergehen, zurückgehen oder überspringen. Die XP- und Counter-Beispiele verändern keine echten Belohnungen oder Counter. Mehr steht in **UPDATE-MAGIER-EINFUEHRUNG.md**.

Nach einer Unterbrechung wird der erste Durchgang beim erneuten Anmelden an der gespeicherten Stelle fortgesetzt. Nach Abschließen oder Überspringen öffnet er nicht automatisch erneut. Über **So geht’s** lässt sich die Einführung jederzeit erneut ansehen. Bestehende Konten starten ohne automatische Einführung und können sie ebenfalls dort öffnen. Bei reduzierter Bewegung werden die Bewegungen zurückgenommen.

Der bisherige Spruch wurde durch diesen gewünschten Text ersetzt. In der aktuellen Handy-Version steht er bei der Rangliste, damit auf der Startseite die Quests zuerst erreichbar sind:

> Es gibt keinen größeren Reichtum als die Vernunft, keine größere Armut als die Unwissenheit und kein mächtigeres Erbe als die absolute Selbstdisziplin.
>
> – ʿAlī ibn Abī Ṭālib

## Counter in drei Schritten

1. **Namen eingeben:** zum Beispiel „Ohne Social Media am Abend“.
2. **Starten:** Tage, Stunden, Minuten und Sekunden zählen ab jetzt hoch. Auch nach Neuladen oder mit geschlossener Webseite bleibt der Startzeitpunkt erhalten.
3. **Bei Bedarf Reset:** nur dieser Counter startet bei null. Für heute entfällt die gemeinsame Coin-Belohnung; bisherige Coins und XP bleiben erhalten.

Mehrere Counter teilen sich eine Tagesbelohnung. Der jüngste beteiligte Counter bestimmt die Stufe am Ende des Tages:

| Alter | Coins pro beendetem Tag |
| --- | ---: |
| Weniger als 7 volle Tage | 1 |
| 7 bis unter 30 volle Tage | 2 |
| Mindestens 30 volle Tage | 3 |

**Du musst keinen Tag mehr bestätigen.** Nach dem Tagesende um 00:00 Uhr Berliner Zeit kann die Belohnung abgerechnet und ausgegeben werden. War die Webseite geschlossen, rechnet sie die inzwischen beendeten Tage beim nächsten Öffnen ab.

Ein neuer Counter zählt heute bereits mit und kann die gemeinsame Stufe senken. Schon sein Starttag kann am folgenden Tageswechsel 1 Coin geben. Ein entfernter Counter zählt für heute noch mit und fällt morgen aus der Berechnung. Auch nach dem Entfernen eines zurückgesetzten Counters bleibt heute gesperrt. Ohne Counter gibt es keine Counter-Coins.

## Update veröffentlichen

1. **Zuerst firestore.rules** in Firebase → Firestore Database → Regeln veröffentlichen. Dieses Update braucht neue Regeln für automatische Abrechnung und gespeicherten Einführungsfortschritt. Zusätzliche Regeln anderer Anwendungen erhalten.
2. In der aktuellen Handy-Version **den gesamten Inhalt von dist/** an den bisherigen Ort der index.html in GitHub übernehmen, einschließlich der App-Dateien und der Ordner icons/ und fonts/. Die aktuelle Anleitung steht in **UPDATE-HANDY-APP.md**.
3. Auf die Vercel-Veröffentlichung warten und die Webseite neu laden.
4. Per E-Mail und Passwort anmelden; der Spielername bleibt für Profil und Rangliste erhalten.

Die notwendigen Daten entstehen automatisch. Keine Collections manuell anlegen und keine bestehenden Konten löschen.

## Dein bisheriger Fortschritt bleibt

XP, Level, Quests, Counter, Coins und gekaufte Artikel bleiben erhalten. Auch frühere Fokus-XP und bereits bestätigte Coin-Tage bleiben erhalten. Die automatische Belohnung beginnt beim Umstieg mit dem aktuellen Berliner Kalendertag. Zuvor nicht bestätigte Tage werden nicht rückwirkend belohnt.

## Nach der Veröffentlichung prüfen

- Mit einem neuen Konto registrieren, Klasse wählen und die Einführung ansehen. Unterbrechen, erneut anmelden und fortsetzen. Überspringen und später über **So geht’s** erneut öffnen.
- Einen Counter starten. Die Zeit soll hochzählen; es soll keinen Bestätigungs-Knopf geben.
- Reset verwenden, neu laden und prüfen, dass heute weiterhin keine gemeinsame Coin-Belohnung möglich ist.
- Nach einem beendeten Berliner Kalendertag erneut öffnen: die Coins sollen genau einmal verfügbar werden. Danach einen Artikel kaufen und erneut anmelden.
- Mit einem zweiten Konto die Rangliste aktualisieren: ausgerüstete Looks sollen sichtbar sein, private Counter und das Inventar gesperrt.

Das Paket ist lokal erstellt. Die lokalen Tests verwenden simulierte Firebase-Antworten; die Regeln müssen beim Veröffentlichen von Firebase geprüft werden. Die Dateien sind durch das Paket noch nicht auf GitHub, Vercel oder Firebase veröffentlicht.
