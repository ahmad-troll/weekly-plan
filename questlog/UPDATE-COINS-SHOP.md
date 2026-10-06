# QuestLog · Coins und Kosmetik-Shop

Die aktuelle Einbauanleitung steht in **UPDATE-HANDY-APP.md**. **Die täglichen Bestätigungen sind entfernt:** Counter zählen selbstständig hoch, und beendete Kalendertage geben automatisch Coins.

## Eine gemeinsame Belohnung

Die Anzahl deiner Counter vervielfacht die Belohnung nicht. Am Ende eines Berliner Kalendertages entscheidet der jüngste Counter, der an diesem Tag beteiligt war:

| Alter am Tagesende | Gemeinsame Tagesbelohnung |
| --- | ---: |
| Unter 7 vollen Tagen | 1 Coin |
| Ab 7 vollen Tagen | 2 Coins |
| Ab 30 vollen Tagen | 3 Coins |

Ohne Counter gibt es keine Counter-Coins. Heute mögliche Coins sind noch nicht ausgebbar. Erst ein abgeschlossener Kalendertag kann abgerechnet werden. Tageswechsel ist **00:00 Uhr in Europe/Berlin**, auch bei Sommer- und Winterzeit.

Beispiel: Ein Counter läuft zehn Tage, ein zweiter erst zwei Tage. Gemeinsam gibt es 1 Coin am Tag. Sobald auch der jüngere sieben volle Tage erreicht hat, sind es 2 Coins. Die Stufe wird jeweils am Tagesende bestimmt.

Die App muss nicht geöffnet bleiben. Sie speichert die Startzeit und rechnet beim nächsten Öffnen die inzwischen beendeten Tage ab. Derselbe Tag wird nicht mehrfach gutgeschrieben.

## Starten, Reset und Entfernen

- **Starten:** Der neue Counter zählt sofort hoch und wird für die gemeinsame Belohnung dieses Tages berücksichtigt. Ein neu gestarteter Counter kann deshalb die gemeinsame Stufe auf 1 Coin senken. Schon sein Starttag kann am folgenden Tageswechsel 1 Coin geben.
- **Reset:** Nur der gewählte Counter startet sofort bei null. Die gemeinsame Coin-Belohnung fällt für den ganzen aktuellen Kalendertag aus. Andere Counter laufen weiter; bereits verdiente Coins und XP bleiben erhalten.
- **Entfernen:** Der Counter verschwindet aus der aktiven Liste. Seine heutige Teilnahme bleibt für die Belohnung erhalten; ab morgen zählt er nicht mehr mit. Damit lässt sich eine heutige Reset-Sperre durch Löschen nicht umgehen.

Am nächsten Tag ist ein Reset-Tag beendet. Dann bestimmt das Alter der verbliebenen aktiven Counter wieder die Stufe.

## Shop

| Artikel | Typ | Preis |
| --- | --- | ---: |
| Neon-Rahmen | Rahmen | 6 Coins |
| Solar-Flamme | Aura | 8 Coins |
| Golden Hero | Rahmen | 12 Coins |
| Mystischer Wald | Hintergrund | 15 Coins |
| Void-Energie | Aura | 18 Coins |
| Neon-Galaxie | Hintergrund | 25 Coins |
| Pixel-Bot | Roboter-Begleiter | 20 Coins |
| Funkenfuchs | Fuchs-Begleiter | 35 Coins |
| Mini-Drache | Drachen-Begleiter | 60 Coins |

Kaufen schaltet den Artikel dauerhaft frei und rüstet ihn sofort aus. Je eine Aura, ein Rahmen, ein Hintergrund und ein Begleiter lassen sich kombinieren. Wechseln oder Ablegen kostet keine weiteren Coins; der Kauf bleibt erhalten.

Die ausgerüsteten Looks erscheinen neben deinem Charakter, auf dem Podium und in beiden Ranglisten. Andere Spieler sehen die ausgerüsteten Artikel; dein Guthaben, vollständiges Inventar und Gewohnheitsnamen bleiben privat. Begleiter bewegen sich und feiern neu erledigte Quests. Animationen berücksichtigen reduzierte Bewegung.

Coins geben keine XP. Quests liefern weiterhin höchstens 10 XP pro Tag. Die Ranglisten richten sich nach XP.

## Beim Umstieg

Quests, Profil, XP, Coins und Käufe bleiben erhalten. Alte Fokus-XP werden weiter angerechnet. Bereits bestätigte und noch nicht abgerechnete alte Coin-Tage werden übernommen. Nicht bestätigte alte Tage erhalten keine nachträglichen Coins. Die automatische Abrechnung startet mit dem aktuellen Berliner Kalendertag beim ersten Öffnen dieser Version.

Falls das Counter- und Einführungs-Update noch fehlt, die enthaltenen **firestore.rules** zuerst veröffentlichen. Danach den gesamten Inhalt von dist/ einschließlich der App-Dateien und der Ordner icons/ und fonts/ übernehmen; nur die HTML-Datei reicht für die Handy-App nicht mehr. Zusätzliche Regeln anderer Anwendungen erhalten. Dieses Update benötigt keine Cloud Function und veröffentlicht sich nicht selbst.
