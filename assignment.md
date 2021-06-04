# Invy
De firma Dn Oetel heeft een klein warenhuis waar veel carnavals producten zijn opgeslagen voor de consumenten verkoop. Het bijhouden van alle producten gaat niet altijd even vlekkeloos. Dat kan verschillende redenen hebben, kapotte producten, niet compleet geleverde producten of producten die via andere kanalen worden verkocht. De vraag is, maak een (simpel) voorraadregistratie systeem.

Het mag allemaal niet te veel gaan kosten voor de firma dus er zijn wat specificaties opgesteld. 

Je mag het helemaal mobile maken, of tablet of desktop. Het hoeft niet responsive te zijn zolang maar op 1 van de devices het goed werkt. Daag jezelf uit! :)

## Algemene werking

Het magazijn heeft verschillende Regio's / Secties. Deze zien er ook anders uit, denk aan pilaren die in de weg staan en andere obstakels (gangpaden). Teken drie verschillende regios van 15x15 vlakken. Deze zijn apart te benaderen via tabjes of gewoon een menu zonder page refresh. 

Elke regio bevat zijn eigen producten in de categorieen: Kleding, Tierlantijn en Decoratie.

Met een soort 'wizard' (stap voor stap systeem waarbij elke stap een -nieuw- formulier veld te zien is) kan men nieuwe producten aanmaken die nog niet bestaan. 

Bestaande producten zijn te selecteren vanuit een dropdown box en daarna te plaatsen, drag & drop, naar een vlakje in een regio.

Bij het wisselen van regio veranderd dus ook de dropdown box want kleding kan je niet plaatsen bij decoratie. Er mag geen page refresh komen.

Als je een product selecteert op een vlakje moet je de keuze krijgen om een foto te maken/te uploaden en opmerkingen er bij te plaatsen. Denk ook aan schade tekenen door middel van een canvas element.

Ook moet het mogelijk om een extra product eigenschap toe te kennen bij speciale producten. Dus ik selecteer een product en druk op een 'toevoegknop' om een extra veld erbij te plaatsen.

Alles wordt opgeslagen in een (of meerdere) JSON bestand(en) en heeft een backup in localstorage mocht het internet falen (..het is een oud magazijn).

Denk aan de Weer API en zorg ervoor dat deze testbaar is door optie toe te voegen waarmee je van locatie kan wisselen. Want het weer is belangrijk voor sommige producten denk aan heet weer en spuitbussen.

Elk product heeft een naam, beschrijving, inkoopprijs, verkoopprijs ex btw, verkoop inc btw, minimale voorraad, huidige voorraad. Gebruik de calculator uit de oefenopdrachten om wat uit te rekenen. De verkoopprijs ex BTW wordt handmatig uiteindelijk ingevuld en de verkoopprijs inc. btw wordt uitgerekend.

- Kleding heeft de eigenschappen Kleur en Maat
- Tierlantijn heeft de eigenschap Gewicht
- Decoratie heeft de eigenschappen Grootte in cm, Kleur en Aantal in verpakking.

Gebruik je creativiteit met het inzetten van geluid, animatie, externe packages, charts, Barcode scanners, push notificaties etc.



## Technisch
- De code heeft een **duidelijk OO** en eventueel een MVC (of ander architectuur) opzet. 

- Alleen puur javascript is toegestaan (dus geen coffeescript, typescript etc)

- Er zijn -geen- frameworks toegestaan zoals Jquery, VueJS etc. Je bent gewaarschuwd!

- Je mag wel kleine plugins/modules gebruiken om wat kleine zaken makkelijker te maken. Graag beperkt gebruiken! Een moment.js voor datum verwerking is ok. Maar een hele MVC library die de helft van je opdracht oplost niet.

Bij twijfel -> Vragen aan docent.

- Webpack is verplicht. Dit is in principe een tool en geen programmeer library/framework.

- Responsiveness is geen specifiek toets item. Niet verplicht, wel gewenst. Je mag ook alleen een mobile variant maken! Let wel op de drag&drop functionaliteit..die moet je dan aanpassen.

- De HTML en CSS code ziet er netjes uit. Een CSS framework mag (Bootstrap, Foundation, Materialize). Mocht een framework jQuery of andere frameworks verplicht stellen is dat geen probleem. Maar in de logica van de app willen we het niet terugzien!

- Er is correcte foutafhandeling geimplementeerd

- Testen doen we in Chrome.

## Visueel
Let er op dat we geen specifieke afbeeldingen aanleveren. Je kan dit met Canvas regelen, placeholders, icons .. whatever. Zorg voor een leuke invulling.

Probeer zoveel mogelijk met webfonts, icons, svg en png te werken.

Er wordt van je verwacht dat je HTML/CSS kennis hebt. Je wordt hier in het algemeen niet op getoetst maar slechte code is slechte code en dat willen we niet!

## Eigen invulling
Hoewel we de focus hebben op de onderwerpen uit de lesstof mag je zelf ook toevoegingen maken. Denk aan animatie etc.

Je wordt alleen beloond voor deze activitieiten als je **voldoende punten** haalt per speciek onderdeel. Meer info vind je bij het beoordelingsformulier op blackboard bij de inleverlink.
