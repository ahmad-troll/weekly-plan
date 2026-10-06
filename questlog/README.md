# QuestLog · Dein Pixel-Abenteuer

QuestLog verbindet tägliche und wöchentliche Aufgaben mit einem RPG-Charakter, Ranglisten und einem Kosmetik-Shop. Die Oberfläche erinnert mit Pixel-Schrift, Spielrahmen und einer kleinen Pixelwelt an ein 2D-Spiel. Auf dem Handy lässt sich die Website als Web-App zum Startbildschirm hinzufügen. Das fertige Frontend liegt in **dist/**; ein Build ist nicht nötig.

## Dieses Update einbauen

1. Wenn das Counter- und Einführungs-Update noch nicht veröffentlicht ist: **zuerst die enthaltenen firestore.rules veröffentlichen**, unter Firebase-Projekt planer-84a8f → Firestore Database → Regeln. Bereits aktuelle Regeln bleiben für dieses Handy-Update gleich. Zusätzliche Regeln anderer Anwendungen erhalten.
2. **Den gesamten Inhalt von dist/** an den bisherigen Ort der index.html im GitHub-Repository übernehmen. Alle zusätzlichen Dateien und die Ordner icons/ und fonts/ müssen mit veröffentlicht werden; nur index.html reicht jetzt nicht mehr.
3. Die Vercel-Veröffentlichung abwarten und die Webseite neu laden.
4. Per E-Mail und Passwort anmelden. Ein neues Konto benötigt zusätzlich einen Spielernamen und eine Charakter-Klasse.

Eine verständliche Anleitung steht in **UPDATE-HANDY-APP.md**. Dieses Paket veröffentlicht sich nicht selbst und löscht keine Konten oder Spielstände. Es gibt keinen Demo-Zugang und keine Beispielspieler.

## So funktioniert es

- **Quests:** Erledigte Aufgaben geben insgesamt höchstens 10 XP am Tag. Wiederholtes Abhaken erzeugt keine zusätzlichen XP.
- **Level:** Level 1–4: je 20 XP bis zum nächsten Level; Level 5–9: je 30 XP; danach je 40 XP usw. Die Figur entwickelt sich alle fünf Level weiter.
- **Counter:** Gewohnheitsnamen eingeben und starten. Die Zeit zählt hoch; eine tägliche Bestätigung ist nicht mehr nötig. Bis zu zehn Counter sind möglich.
- **Coins:** Für einen beendeten Berliner Kalendertag gibt es gemeinsam 1 Coin. Hat der jüngste beteiligte Counter am Tagesende sieben volle Tage erreicht, gibt es 2 Coins; ab 30 vollen Tagen 3 Coins. Coins beeinflussen die XP nicht.
- **Reset:** Der gewählte Counter startet sofort bei null. Für diesen Kalendertag entfällt die gemeinsame Coin-Belohnung. Frühere Coins und XP bleiben erhalten.
- **Geschlossene App:** Counter laufen anhand ihrer gespeicherten Startzeit weiter. Beim nächsten Öffnen werden die inzwischen beendeten Tage abgerechnet.
- **Shop:** Auren, Rahmen, Hintergründe und Begleiter dauerhaft kaufen, kombinieren oder ablegen. Roboter 20 Coins, Fuchs 35 Coins, Drache 60 Coins.
- **Rangliste:** Gesamt und Diese Woche zeigen Figuren und ausgerüstete Looks. Coins, Inventar und Gewohnheitsnamen bleiben privat.
- **Einführung:** Auron, ein animierter Magier mit LVL MAX, begleitet dich mit kurzen Sätzen. Ihr erstellt gemeinsam deine erste echte tägliche oder wöchentliche Quest. Danach erklären kurze Beispiele XP, Counter, Shop, Rangliste und die Installation als Handy-App. Überspringen und erneut öffnen über **So geht’s** sind möglich; reduzierte Bewegung wird berücksichtigt.
- **Handy-App:** Eigenes QuestLog-Symbol auf dem Startbildschirm und eigenes App-Fenster. Die Installation erfolgt freiwillig über die App oder das Browsermenü. Für Anmeldung, Speichern und Ranglisten wird weiterhin Internet benötigt.
- **Pixel-App-Symbol:** Ein Questbuch mit leuchtendem Haken verbindet das Handy-Symbol mit dem 2D-Spielstil in Anmeldung und App-Menüs.

Die heutigen Quests stehen auf der Startseite zuerst. Das gewünschte Zitat befindet sich bei der Rangliste:

> Es gibt keinen größeren Reichtum als die Vernunft, keine größere Armut als die Unwissenheit und kein mächtigeres Erbe als die absolute Selbstdisziplin.
>
> – ʿAlī ibn Abī Ṭālib

## Bestehender Fortschritt

Quests, Klassen, XP, Coins und Käufe bleiben erhalten. Alte Fokus-XP werden weiterhin mitgezählt. Bereits bestätigte Coin-Tage der vorherigen Version bleiben erhalten. Die automatische Belohnung beginnt beim Umstieg mit dem aktuellen Berliner Kalendertag; früher nicht bestätigte Tage werden nicht rückwirkend belohnt.

## Weitere Anleitungen

- **EINRICHTUNG.md:** Anmeldung und Veröffentlichung.
- **UPDATE-HANDY-APP.md:** Installation auf Android und iPhone, alle benötigten Dateien und App-Updates.
- **UPDATE-APP-SYMBOL.md:** neues Pixel-Symbol und Aktualisierung auf dem Startbildschirm.
- **UPDATE-MAGIER-EINFUEHRUNG.md:** kurze Magier-Einführung und erste echte Quest.
- **UPDATE-COUNTER-EINFUEHRUNG.md:** neue Counter-Regeln und erste Schritte.
- **UPDATE-COINS-SHOP.md:** Tages-Coins und Shop-Preise.
- **UPDATE-BEGLEITER.md:** Animationen und öffentliche Looks.
- **LEADERBOARD.md:** Ranglisten und XP.
- **FIRESTORE-STRUKTUR.md:** gespeicherte Daten und Zugriffe.

## Prüfung und Grenzen

Die lokale Prüfung verwendet simulierte Firebase-Antworten. Sie ersetzt den Test im eigenen Firebase-Projekt nicht. Die neuen Firestore-Regeln müssen beim Veröffentlichen von Firebase geprüft werden. Danach Registrierung, Counter, Coin-Abrechnung, Einkauf und beide Ranglisten mit echten Konten ausprobieren.

Quests und Gewohnheiten beruhen auf eigenen Angaben. Die Regeln schützen fremde Daten und prüfen erlaubte Artikel, Besitz und Datenform; sie beweisen keine tatsächliche Gewohnheitsänderung. Diese Coin-Wirtschaft ist für den persönlichen Tracker und kosmetische Artikel gedacht.
