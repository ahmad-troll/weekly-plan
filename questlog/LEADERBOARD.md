# QuestLog · Gesamt- und Wochenrangliste

Die aktuelle Einrichtung steht in UPDATE-HANDY-APP.md. Für beide Ranglisten sind keine Cloud Functions erforderlich.

## Anzeige

- Gesamt: alle bisherigen Quest-XP plus erhaltene alte Fokus-XP.
- Diese Woche: XP von Montag bis Sonntag in Europe/Berlin, inklusive erhaltener alter Fokus-XP. Neue Coins zählen separat.
- Das Charakter-Level wird stets aus Gesamt-XP berechnet.
- Das Podium zeigt die ersten drei Spieler mit größeren entwickelten Figuren, ihren ausgerüsteten Auren/Rahmen/Kulissen und dem aktiven Begleiter.
- Der eigene Rang zählt alle Einträge mit mehr XP und erscheint ohne Nachladen weiterer Seiten.
- Gleiche XP ergeben denselben Rang, z. B. 1, 2, 2, 4.
- Die Oberfläche lädt 50 Spieler je Seite; Aktualisieren lädt den neuen Stand.
- Die Ranglisten zeigen ausschließlich angemeldete Spieler aus Firebase. Es gibt keine Beispielspieler mehr.

Bestehende Spieler erscheinen nach ihrem nächsten Login mit dieser Version. Alte globale Zusammenfassungen im Format 1 bleiben lesbar: Die neuen Level werden aus den unveränderten XP abgeleitet. Beim Login migriert die App das eigene Dokument auf Format 2.

## Daten

leaderboard/{uid} enthält Username, Klasse, questXp, bonusXp, totalXp, level, recordedDays, bonusDays, schemaVersion: 2, equipped und updatedAt. equipped enthält die vier öffentlich sichtbaren Slots aura, frame, scene und buddy; kein Inventar und kein Coin-Guthaben.

weeklyLeaderboards/{Montagsdatum}/players/{uid} enthält dieselben Felder plus weekStart, weekQuestXp, weekBonusXp und weekXp. Jede Woche verwendet einen eigenen Pfad. Nach dem Wochenwechsel erscheinen dadurch keine alten Wochenwerte in der neuen Liste; ein geplanter Löschjob ist nicht nötig. Ein Spieler erscheint diese Woche, sobald er die neue App angemeldet verwendet. Alte Wochen bleiben gespeichert.

Globale und aktuelle Wochen-Zusammenfassung werden gemeinsam in einer Transaktion veröffentlicht. Der heutige Quest-Tag und vorhandene alte Fokus-Tagesdaten werden nochmals gelesen, um Änderungen anderer Geräte zu berücksichtigen. Es wird nur bei veränderten XP-, Identitäts- oder Ausrüstungswerten geschrieben. Ein Look-Wechsel bei unveränderten XP löst ebenfalls eine Veröffentlichung aus. Das private Inventar wird in der Transaktion frisch gelesen. Unvollständige Cache-Daten werden nicht veröffentlicht.

Neue Tage geben maximal 10 Quest-XP, also 70 pro vollständiger Woche. Frühere Fokus-XP werden erhalten; die Datenprüfung lässt hierfür weiterhin bis zu 7 alte Bonus-XP je Woche zu. Automatische Counter-Coins und Einkäufe zählen nicht für die Rangliste. E-Mail, Passwort, Quest-Texte, Counter-Namen, gekaufte Artikel-Liste und Guthaben stehen nicht in öffentlichen Zusammenfassungen.

## Abfragen und Regeln

Die Einzelfeldindizes auf totalXp und weekXp genügen; kein zusammengesetzter Index ist nötig.

Der eigene Rang ist count(score > eigenerScore) + 1. Firestore liefert die Anzahl statt aller Spieler-Dokumente. Aggregationen und normale Listen verwenden dieselben Berechtigungen. Deshalb erzwingen die Regeln auf den zwei öffentlichen Zusammenfassungs-Pfaden kein Query-Limit mehr. Die Oberfläche lädt weiterhin maximal 50 Dokumente je Seite. Private Daten bleiben davon unabhängig geschützt. [Aggregationen](https://firebase.google.com/docs/firestore/query-data/aggregation-queries), [Abfragen und Regeln](https://firebase.google.com/docs/firestore/security/rules-query)

## Grenze und Prüfung

Die Regeln prüfen Eigentümer, Identität, erlaubte Felder, Zahlenformat, Plausibilitätsgrenzen und die neue Level-Formel. Neue öffentliche equipped-Daten müssen mit den ausgerüsteten IDs im eigenen privaten Inventar übereinstimmen. Alte Dokumente ohne equipped bleiben lesbar. Sie beweisen nicht die tatsächliche Summe aller privaten Tage. Absichtliche Manipulation eigener Daten außerhalb der App bleibt möglich. playerStats bleibt für eine spätere Serverprüfung gegen Browser-Schreibzugriffe geschützt.

Desktop und Handy, Podium, beide Tabs, direkte Ränge außerhalb der ersten 50 Spieler, gleiche Ränge, Nachladen, Migration, Quest-Rücknahme, Coin/XP-Trennung, Cache und Fehlerfälle wurden mit simulierten Firebase-Antworten geprüft. Regeln und Dateien sind noch nicht live veröffentlicht; die Regeln wurden hier nicht im Emulator kompiliert.

