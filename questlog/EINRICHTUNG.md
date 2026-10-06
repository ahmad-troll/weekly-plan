# QuestLog · Einrichten und veröffentlichen

Die Anmeldung erfolgt ausschließlich mit **E-Mail und Passwort**. Der Spielername dient dem Profil und der Rangliste. Bei der Registrierung wählt der Nutzer zusätzlich einen Spielernamen und anschließend seine Charakter-Klasse.

## Firebase

1. Das Projekt **planer-84a8f** in der Firebase-Konsole öffnen.
2. Unter Authentication → Sign-in method **E-Mail/Passwort** aktivieren.
3. Unter Firestore Database → Regeln die mitgelieferten **firestore.rules** veröffentlichen, falls die aktuelle Counter- und Einführungs-Version noch nicht eingerichtet wurde. Die Handy-App erfordert gegenüber dieser Version keine weiteren Regeländerungen. Zusätzliche Regeln anderer Anwendungen erhalten.
4. Profile, Quests, Counter, Inventare und Ranglisten entstehen bei der Nutzung automatisch. Keine Login-Dokumente manuell anlegen; Passwörter liegen nicht in Firestore.

Die Counter-Abrechnung und die Einführung benötigen keine Cloud Function. Diese Fassung verwendet auch für die Anmeldung keine Cloud Function.

## Webseite

Den **gesamten Inhalt von dist/** an den bisherigen Ort der index.html im GitHub-Repository übernehmen. Zusätzliche App-Dateien und die Ordner icons/ und fonts/ müssen neben der HTML-Datei mit veröffentlicht werden. Nur index.html zu ersetzen reicht für die Handy-App nicht mehr. Ein Build ist nicht erforderlich.

Nach der Vercel-Veröffentlichung die Website über ihre HTTPS-Adresse öffnen. Die heutige Quest-Liste steht zuerst; das Zitat befindet sich bei der Rangliste. Installation auf Android und iPhone sowie Dateien und Updates erklärt **UPDATE-HANDY-APP.md**.

Es gibt keinen Demo-Zugang und keinen Username-Login. Falls früher separat eine Login-Serverfunktion veröffentlicht wurde, entfernt das Ersetzen der HTML-Datei sie nicht automatisch; die App ruft sie nicht mehr auf.

## Ablauf prüfen

- **Neues Konto:** Spielername, E-Mail und Passwort eingeben → Klasse wählen → mit dem Magier die erste echte Quest erstellen. Die kurze Einführung lässt sich überspringen.
- **Vergebener Spielername:** in der Charakter-Auswahl einen anderen Namen wählen; das Auth-Konto bleibt bestehen.
- **Bestehendes Konto:** E-Mail und Passwort eingeben → gespeicherten Charakter und Fortschritt laden. Die Einführung lässt sich über **So geht’s** öffnen.
- **Counter:** Namen eingeben und starten. Es darf keine tägliche Bestätigung mehr verlangt werden. Reset muss den Counter bei null beginnen lassen und die gemeinsame Belohnung für heute sperren.
- **Coins:** abgeschlossene Kalendertage werden automatisch abgerechnet, auch nach Tagen ohne geöffnete App. Für heute gibt es erst nach dem Tagesende verfügbare Coins.
- **Einführung fortsetzen:** ein unterbrochener erster Durchgang wird beim erneuten Anmelden fortgesetzt. Nach Überspringen oder Abschließen öffnet er nicht automatisch erneut.
- **Abmelden:** private Ansichten werden geleert und die Anmeldung erscheint wieder.
- **Handy-App:** die veröffentlichte Seite auf dem Handy öffnen, zum Startbildschirm hinzufügen und über das QuestLog-Symbol starten. Anmeldung, Speichern und Ranglisten benötigen weiterhin Internet.

Das Update ist ein lokales Paket. Es veröffentlicht keine Dateien selbst und hat keine Cloud-Konten oder Spielstände gelöscht. Firebase-Antworten werden in den lokalen Prüfungen simuliert; nach der Veröffentlichung mit echten Konten testen.
