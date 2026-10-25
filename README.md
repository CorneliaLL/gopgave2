# gopgave2

# Allure
En mobilapplikation bygget i React Native (Expo) til booking af tid hos en Fashion Advisor i en luksusmodebutik. Version 2 bygger videre på G-opgave 1 med en kollektion, en søgefunktion og en ønskeliste, som kunden kan vedhæfte sin booking, så Fashion Advisoren kan forberede sig til aftalen og skabe en mere inspirerende kundeoplevelse.

## Nyt i G-opgave 2
- **Kollektion:** knappen "Se nyeste kollektioner" åbner en ny skærm med produkter, der hentes fra et online API
- **Kategorier og søgning:** kunden kan skifte mellem tasker, sko og smykker og søge efter produkter
- **Ønskeliste:** kunden kan gemme produkter med "Gem". Ønskelisten gemmes i Firebase Realtime Database
- **Vedhæft ønskeliste til booking:** i bookingformularen kan kunden vedhæfte sin ønskeliste, som derefter vises på bookingen under "Mine bookinger"
- **Styling:** farverne til faner og header er flyttet til `GlobalStyles.js` ( ud fra feedback i G-opgave 1)

## Funktioner
- Oversigt med information og genveje
- Se nyeste kollektioner med kategorier og søgning
- Gem og fjern produkter på en ønskeliste
- Book en tid hos en valgt Fashion Advisor, med mulighed for at vedhæfte ønskelisten
- Se og annullér dine bookinger
- Chat oversigt med Fashion Advisors

## Sådan køres appen
1. Klon dette repository: `git clone https://github.com/CorneliaLL/gopgave2.git`
2. Naviger ind i mappen: `cd min_app`
3. Installer dependencies: `npm install`
4. Start appen: `npx expo start`
5. Scan QR-koden med Expo Go-appen på din telefon

## Demovideo
Link til demovideo: `https://github.com/CorneliaLL/gopgave2/issues/1#issue-6029498486`

## Teknologier
- React Native / Expo
- React Navigation 
- Firebase Realtime Database 
- Dummy JSON API (produkter i kollektionen)