# QuestLog · Begleiter und öffentliche Looks

Die aktuelle Version ergänzt Counter ohne tägliche Bestätigung, eine Einführung für neue Spieler und eine installierbare Handy-App. Die aktuelle Einbauanleitung steht in **UPDATE-HANDY-APP.md**. Die Regeln des Counter- und Einführungs-Updates bleiben für die Handy-App gleich.

## Update übernehmen

1. Falls das Counter- und Einführungs-Update noch fehlt, zuerst die enthaltene firestore.rules in Firebase → Firestore Database → Regeln veröffentlichen. Zusätzliche eigene Regeln anderer Anwendungen erhalten.
2. Danach den gesamten Inhalt von dist/ einschließlich der App-Dateien und der Ordner icons/ und fonts/ in GitHub an den bisherigen Ort der index.html übernehmen. Vercel übernimmt den Commit, sofern die automatische Bereitstellung eingerichtet ist.
3. Per E-Mail anmelden und die Funktionen testen. Neue oder kostenpflichtige Cloud Functions sind für dieses Update nicht erforderlich.

Noch nicht live veröffentlicht. Das Paket wurde lokal erstellt; Firebase-Antworten waren simuliert. Die Regeln wurden mangels lokalem Emulator nicht kompiliert und müssen beim Veröffentlichen geprüft werden.

## Drei Begleiter

Im Shop gibt es jetzt die Kategorien Alles, Looks und Begleiter.

| Begleiter | Preis | Bewegung |
| --- | ---: | --- |
| Pixel-Bot | 20 Coins | Schwebt leicht, blinkt und winkt beim Quest-Erfolg |
| Funkenfuchs | 35 Coins | Wippt mit dem Schweif und springt beim Quest-Erfolg |
| Mini-Drache | 60 Coins | Flattert mit den Flügeln und freut sich beim Quest-Erfolg |

Kaufen schaltet den Begleiter dauerhaft frei und rüstet ihn sofort aus. Es kann jeweils einer neben deinem Charakter stehen. Andere gekaufte Begleiter bleiben im Inventar; Wechseln und Ablegen kosten keine weiteren Coins.

Ein Begleiter reagiert nach erfolgreich gespeicherter neuer Quest-Erledigung. Auch wenn viele Quests den XP-Anteil auf null abrunden, gibt es eine Reaktion. Wiederholtes Speichern desselben erledigten Status, Überspringen und Zurücknehmen erzeugen keine Erfolgsreaktion. Animationen respektieren die Systemeinstellung für reduzierte Bewegung; dann erscheint die Reaktion kurz als statisches Symbol.

## Looks in der Rangliste

Gesamt- und Wochenrangliste, das Podium und die eigene Rang-Karte zeigen Aura, Rahmen, Kulisse und Begleiter. Die automatische Figuren-Evolution nach Level bleibt erhalten.

Nur die vier ausgerüsteten Artikel-IDs werden öffentlich übernommen. Coin-Guthaben, vollständiges Inventar, E-Mail sowie private Quest- und Gewohnheitsnamen bleiben privat. Die Regeln gleichen den öffentlichen Look mit der Ausrüstung im privaten Inventar ab.

Ein Ausrüstungswechsel wird auch ohne neue XP veröffentlicht. Bei anderen Spielern wird er nach dem Aktualisieren der Rangliste sichtbar. Wer noch die vorherige Version verwendet hat, erscheint zunächst mit dem zuletzt veröffentlichten oder Standard-Look; der nächste Login mit dieser Version veröffentlicht seine aktuelle Ausrüstung.

## Bestehender Fortschritt

Alte Inventare mit drei Slots erhalten automatisch einen leeren vierten Slot buddy. Besitz und Coin-Guthaben bleiben erhalten; beim nächsten Kaufen/Ausrüsten wird das Inventar in Format 2 gespeichert. Alte Ranglisten-Dokumente ohne equipped bleiben lesbar.

XP, Level, Rang und die gemeinsamen Tages-Coins ändern sich durch einen Begleiter nicht. Die Coin-Regeln stehen in UPDATE-COINS-SHOP.md.

## Geprüft und nach Einbau testen

Lokal geprüft: drei Preise, Kaufen, Wechseln, Ablegen, kein Doppelkauf, Guthaben, altes Inventar, Neuladen, Reaktionen bei null gerundeten XP, beide Ranglisten, Podium, eigener Rang, Synchronisierung bei unveränderten XP, frische Daten anderer Geräte, Desktop/Handy und reduzierte Bewegung.

Nach dem Einbau mit echten Konten testen: einen verfügbaren Begleiter kaufen, einen Look wechseln, eine Quest erledigen und die Rangliste mit dem anderen Konto aktualisieren. Private Inventare müssen für das andere Konto gesperrt bleiben. Keine Ranglisten-Schreibfehler dürfen erscheinen.

Die Coin-Wirtschaft bleibt wie zuvor selbst gemeldet; sie ist nicht servergeprüft und nicht für Echtgeld oder handelbare Güter vorgesehen.
