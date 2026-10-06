# QuestLog · Start ohne Demo

Das fertige Frontend und die Dateien für die installierbare Handy-App liegen in **dist/**. Es enthält keinen Demo-Modus, keine Beispielquests und keine Beispielspieler. Nach dem Öffnen erscheint die Anmeldung; ein vorhandener Firebase-Login wird automatisch wiederhergestellt. Beim Abmelden werden private Ansichten geleert. Alte URLs mit demo=1 und alte lokale Demo-Spielstände schalten keinen Demo-Zugang frei.

Die Anmeldung verwendet ausschließlich **E-Mail und Passwort**. Der Spielername wird bei der Registrierung für Profil und Rangliste gewählt. Nach der ersten Charakter-Auswahl hilft ein Magier mit LVL MAX bei deiner ersten echten Quest. Die kurze Einführung lässt sich später über **So geht’s** erneut ansehen. Mehr steht in **UPDATE-MAGIER-EINFUEHRUNG.md**.

## Aktuelle Version veröffentlichen

1. Falls das Counter- und Einführungs-Update noch fehlt: zuerst die enthaltenen **firestore.rules** in Firebase veröffentlichen. Für dieses Handy-Update bleiben bereits aktuelle Regeln gleich; zusätzliche Regeln anderer Anwendungen erhalten.
2. **Den gesamten Inhalt von dist/** in GitHub an den bisherigen Ort der index.html übernehmen, einschließlich der App-Dateien und der Ordner icons/ und fonts/. Nur index.html reicht jetzt nicht mehr.
3. Die Vercel-Veröffentlichung abwarten und die Webseite neu laden.
4. Registrieren oder per E-Mail anmelden. Bei einem Konto ohne vorhandenen Spielstand beginnt die App mit Level 1, 0 XP und 0 Coins.

Die aktuelle Anleitung steht in **UPDATE-HANDY-APP.md**. Quests stehen zuerst, das Zitat ist bei der Rangliste und auf dem Handy lässt sich QuestLog zum Startbildschirm hinzufügen. Eine tägliche Counter-Bestätigung gibt es nicht mehr; Coins beendeter Berliner Kalendertage werden automatisch abgerechnet.

## Bestehende Daten

Dieses Update löscht keine Konten, Quests, XP, Coins oder Käufe. Bestehende Counter und bisher verdiente Belohnungen werden übernommen. Für die Veröffentlichung ist kein weiterer Neustart von Firebase nötig.

Authentication-Konten und Firestore-Spielstände sind getrennt. Das Löschen eines Login-Kontos entfernt nicht automatisch Untercollections, Profile oder Ranglisten. Eine vollständige Datenlöschung ist für dieses Update nicht erforderlich und wird durch die HTML-Datei nicht ausgeführt.

Das Paket veröffentlicht sich nicht selbst. Lokale Prüfungen verwenden simulierte Firebase-Antworten; nach der Veröffentlichung mit echten Konten testen.
