# QuestLog · Pixel-App-Symbol

Das App-Symbol ist jetzt ein violettes Pixel-Questbuch mit einem leuchtenden grünen Haken. Es erscheint auf dem Handy-Startbildschirm, im Browser, in der Anmeldung, in der Charakter-Auswahl und in der App-Anleitung.

## Hochladen

Den gesamten Inhalt von **dist/** an den bisherigen Ort der index.html übernehmen, einschließlich **icons/** und **fonts/**. Für dieses Update sind keine neuen Firebase-Regeln nötig.

Die neuen Symbole haben eigene Dateinamen, damit sie von der vorherigen Version unterscheidbar sind:

- **questlog-pixel.svg:** Browser und Logo in der App.
- **questlog-pixel-192.png** und **questlog-pixel-512.png:** Web-App-Symbole.
- **questlog-pixel-maskable-512.png:** Android-Symbol mit Hintergrund bis zum Rand.
- **questlog-pixel-apple-180.png:** iPhone-Startbildschirm.

Die neue Service-Worker-Version lädt die passenden öffentlichen Dateien. Wenn **Neue Version bereit** erscheint, **Aktualisieren** wählen. Die Installation behält denselben App-Namen und dieselbe Startadresse.

Falls das Handy nach dem Website-Update noch das alte Symbol zeigt, die bisherige Verknüpfung vom Startbildschirm entfernen und QuestLog über die veröffentlichte Website erneut hinzufügen. Anschließend mit deinem vorhandenen Konto anmelden. Die Web-App verwaltet den gespeicherten Spielstand weiterhin über Firebase.

Die Symbolgrößen, undurchsichtigen Hintergründe, Android-Maske und alle Verweise wurden lokal geprüft. Die Veröffentlichung und die Aktualisierung eines bereits installierten Symbols müssen auf der eigenen HTTPS-Adresse erfolgen.
