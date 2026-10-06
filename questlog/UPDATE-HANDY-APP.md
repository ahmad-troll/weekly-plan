# QuestLog · Auf dem Handy wie eine App

QuestLog lässt sich jetzt zum Startbildschirm hinzufügen und über ein eigenes Symbol in einem App-Fenster öffnen. Die heutigen Quests stehen auf der Startseite zuerst; dein Zitat befindet sich bei der Rangliste. Die Oberfläche ist für kurze Wege und gut erreichbare Bedienelemente auf dem Handy angepasst.

## Das Update veröffentlichen

**Wichtig: Jetzt den gesamten Inhalt von dist/ veröffentlichen. Nur index.html reicht nicht mehr.**

1. ZIP entpacken und den Ordner **dist/** öffnen.
2. Seine Dateien samt **icons/** und **fonts/** an den bisherigen Ort der index.html im GitHub-Repository übernehmen. Die Dateien müssen zusammen bleiben. Wenn deine bisherige index.html direkt im Hauptordner liegt, kommt der Inhalt von dist/ ebenfalls direkt dorthin. Ist dist/ bereits dein Veröffentlichungsordner, behalte ihn bei.
3. Änderungen speichern und die Vercel-Veröffentlichung abwarten, sofern die automatische Bereitstellung eingerichtet ist.
4. Die öffentliche Website über ihre **HTTPS-Adresse** öffnen. Anmeldung, Quests und Installation auf dem Handy ausprobieren.

Die App-Dateien verwenden relative Pfade. Deshalb darf QuestLog auch in einem Unterordner liegen; Manifest, Startseite, Offline-Seite, Service Worker, icons/ und fonts/ müssen dort zusammen veröffentlicht werden. Verschiebe keine dieser Dateien separat in einen anderen Ordner. Ein Build und ein App-Store-Eintrag sind nicht nötig.

Der Ordner dist/ enthält:

- **index.html:** QuestLog selbst.
- **manifest.webmanifest:** Name, Symbol und App-Fenster.
- **sw.js:** Offline-Hinweis und Umgang mit App-Updates.
- **offline.html:** Verbindungsseite, wenn die App ohne Internet geöffnet wird.
- **icons/** mit questlog-pixel.svg, questlog-pixel-192.png, questlog-pixel-512.png, questlog-pixel-maskable-512.png und questlog-pixel-apple-180.png.
- **fonts/** mit PixelifySans.ttf und OFL.txt für die lokale Pixel-Schrift und ihre Lizenz.

Für lokale Tests eignet sich ein Webserver unter localhost oder 127.0.0.1. Ein Doppelklick auf die HTML-Datei und eine file://-Adresse reichen für die Installation nicht aus. Die Anforderungen an HTTPS und die Installation beschreibt die [MDN-Dokumentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Firebase-Regeln

**Dieses Handy-Update ändert die Firestore-Regeln gegenüber dem Counter- und Einführungs-Update nicht.** Wenn du dessen Regeln bereits veröffentlicht hast, ist hier keine neue Regeländerung nötig.

Falls du eine ältere Version verwendest, veröffentliche zuerst die enthaltenen **firestore.rules** im Projekt planer-84a8f. Automatische Counter-Coins und gespeicherter Einführungsfortschritt benötigen diese Version. Zusätzliche Regeln anderer Anwendungen erhalten. Keine Konten oder Spielstände löschen.

## Android

1. QuestLog in **Chrome** öffnen.
2. Im Kopfbereich **Installieren** wählen. Auf kleinen Bildschirmen erscheint dafür ein Symbol; auf der Anmeldeseite heißt der Button **QuestLog als App installieren**. Wenn Chrome den direkten Installationsdialog anbietet, bestätigen.
3. Alternativ im Chrome-Menü ⋮ die Option **Installieren und Verknüpfung erstellen → Installieren** wählen. Je nach Browserversion heißt sie auch **App installieren** oder **Zum Startbildschirm hinzufügen**.
4. QuestLog anschließend über das Symbol auf dem Startbildschirm öffnen.

Der Browser entscheidet, wann er die direkte Installation anbietet. Die Installation beginnt erst auf deinen Wunsch. Eine bereits installierte App benötigt keinen weiteren Installationsdialog. Die Menüs können je nach Browser und Gerät etwas anders heißen. [Google-Anleitung für Android](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=de).

## iPhone

1. QuestLog in **Safari** öffnen.
2. **Teilen** wählen; je nach Safari-Layout liegt es direkt in der Leiste oder im Seitenmenü.
3. **Zu Home-Bildschirm hinzufügen** beziehungsweise **Zum Home-Bildschirm** wählen.
4. Falls angezeigt, **Als Web-App öffnen** aktivieren und **Hinzufügen** wählen.
5. QuestLog anschließend über das Symbol auf dem Home-Bildschirm öffnen.

Auf dem iPhone zeigt QuestLog eine kurze Anleitung. Das Hinzufügen erfolgt über Safari; die Website kann es nicht automatisch erledigen. Fehlt die Option, lässt sie sich im Teilen-Menü unter **Aktionen bearbeiten** ergänzen. [Apple-Anleitung](https://support.apple.com/de-de/guide/iphone/iphea86e5236/ios).

Wenn QuestLog bereits im App-Fenster geöffnet ist, werden die Installationsbuttons ausgeblendet.

## Internet und gespeicherter Fortschritt

Die installierte App verwendet dieselbe QuestLog-Website und denselben Firebase-Spielstand. Du meldest dich mit deiner vorhandenen E-Mail und deinem Passwort an; ein neues Konto ist nicht nötig. Browser und installierte App können getrennte Sitzungen haben, sodass eine erneute Anmeldung nötig sein kann.

Für **Anmeldung, Speichern, Coin-Abrechnung, Käufe und aktuelle Ranglisten** wird weiterhin Internet benötigt. Ohne Verbindung erscheint ein Hinweis. Es gibt kein versprochenes Offline-Abhaken oder Offline-Einkaufen.

Der Offline-Speicher enthält nur die öffentliche Verbindungsseite, App-Konfiguration, Symbole und Pixel-Schrift. Private Firebase-Daten und die Hauptseite werden durch den Service Worker nicht gespeichert.

Counter benötigen keinen laufenden Hintergrunddienst: Die gespeicherte Startzeit bleibt erhalten und ihre verstrichene Zeit wird beim Öffnen neu berechnet. Coins inzwischen beendeter Berliner Kalendertage werden beim nächsten verbundenen Öffnen abgerechnet. Eine Installation ändert weder XP noch Coin-Regeln.

## Spätere App-Updates

Neue Veröffentlichungen erscheinen auch in der installierten App. Wenn ein neues Update bereitsteht, zeigt QuestLog **Neue Version bereit**. Mit **Aktualisieren** wechselst du zur neuen Fassung. Während eines Speichervorgangs oder mit offenen Eingaben und Dialogen wartet die App; schließe sie ab und tippe anschließend erneut auf Aktualisieren. Es gibt keinen erzwungenen Neustart mitten in einer Eingabe.

Auch bei späteren Updates immer den vollständigen Inhalt von dist/ veröffentlichen.

## Nach der Veröffentlichung prüfen

- Die Website am Handy öffnen und eine Quest erledigen. Die Quest-Liste soll zuerst erreichbar sein; das Zitat soll bei der Rangliste stehen.
- Android und iPhone anhand der Schritte oben zum Startbildschirm hinzufügen. Das QuestLog-Symbol und das App-Fenster prüfen.
- Mit dem bisherigen Konto anmelden: Quests, Counter, Coins und gekaufte Looks sollen erhalten sein.
- Ohne Verbindung öffnen: Der Hinweis soll verständlich erscheinen. Danach wieder verbinden und die Daten laden.
- Eine spätere neue Veröffentlichung laden und prüfen, dass die aktuelle Version erscheint.

Dieses Paket ist lokal erstellt und veröffentlicht sich nicht selbst. Die Installation muss nach dem Hochladen auf der eigenen HTTPS-Adresse mit echten Geräten geprüft werden.
