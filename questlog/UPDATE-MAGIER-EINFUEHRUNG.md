# QuestLog · Deine erste Quest mit dem Magier

Die Einführung wird jetzt von **Auron, einem animierten Magier mit LVL MAX**, begleitet. Er spricht in kurzen Sätzen und führt den Nutzer durch sechs kleine Kapitel.

## Gemeinsam starten

1. Nach der Charakter-Auswahl begrüßt dich der Magier.
2. Wähle ein kleines Ziel oder schreibe dein eigenes. Entscheide dich für **Täglich** oder **Wöchentlich**; bei Wochen-Quests wählst du die Tage.
3. Mit **Meine Quest erstellen** speicherst du deine erste echte Quest. Die weiteren Kapitel zeigen XP, Counter, Shop und Rangliste in kurzen Beispielen.
4. Im letzten Kapitel erklärt Auron auch die **Handy-App**. Über **App-Anleitung öffnen** erhältst du die passenden Schritte für iPhone oder Android. Danach kehrst du zur Einführung zurück. Die Installation ist freiwillig.

Die neue Quest ist danach in deinem Spielplan. Das Erstellen gibt noch keine XP; diese erhältst du erst durch erledigte Aufgaben. Die Beispiele für XP und Counter verändern keine echten Belohnungen oder Counter.

Ist bereits eine Quest vorhanden, zeigt der Magier sie an. Neuladen, doppelte Klicks und eine gleichzeitig auf einem anderen Gerät erstellte Quest erzeugen keine zusätzliche erste Quest. Bei einem Speicherfehler bleibt das Formular für einen erneuten Versuch offen.

## Später weitermachen

Du kannst die Einführung überspringen und über **So geht’s** erneut öffnen. Ein unterbrochener erster Durchgang setzt am gespeicherten Kapitel fort. Bereits vorhandene Quests bleiben erhalten. Ein unfertiger Entwurf wird auf diesem Gerät für dein Konto gemerkt, bis du ihn speicherst.

Die System-Einstellung für reduzierte Bewegung wird berücksichtigt. Der Magier bleibt sichtbar; seine Bewegungen und die automatischen Beispiel-Animationen werden zurückgenommen.

## Das Update hochladen

Veröffentliche **den gesamten Inhalt von dist/** am bisherigen Ort deiner index.html: index.html, manifest.webmanifest, sw.js, offline.html sowie die Ordner **icons/** und **fonts/**. Die genaue Anleitung steht in **UPDATE-HANDY-APP.md**.

Die Firestore-Regeln und die sechs gespeicherten Schritt-Nummern bleiben gegenüber der bisherigen Counter-/Handy-Version gleich. Bestehende Konten, Spielstände und eine bereits begonnene Einführung bleiben erhalten. Falls du noch ältere Regeln hast, verwende die mitgelieferten firestore.rules.

Nach dem Hochladen mit einem neuen Konto ausprobieren: erste Quest erstellen, App-Anleitung öffnen, Einführung beenden und die Quest im Tages- oder Wochenplan ansehen. Die Dateien sind lokal vorbereitet; das Paket veröffentlicht sie nicht selbst.

## Neue 2D-Spielwelt

Die ganze Oberfläche bekommt Pixel-Überschriften, kantige Spielrahmen, feste Menüknöpfe, segmentierte XP-Leisten und eine kleine Pixel-Landschaft um den Helden. Quests bleiben ganz oben; normaler Text bleibt gut lesbar. Die Optik gilt auch für Anmeldung, Charakter-Auswahl, Counter, Shop, Rangliste und Installation.

Die Schrift **Pixelify Sans** liegt lokal unter fonts/. Sie lädt ohne Anfrage an einen fremden Schriftanbieter. Die unveränderte Schrift und ihre Lizenz stammen aus dem [offiziellen Google-Fonts-Verzeichnis](https://github.com/google/fonts/tree/main/ofl/pixelifysans); die Lizenz liegt als fonts/OFL.txt bei.
