Velkommen til Greener Goods! App'en der gør dine indkøb grønnere.

Features som app'en kan, lavet af Ida:
- Skærme tilføjet: ProductDetails og CameraScreen
- Knapper tilføjet: Klikke ind på en vare
- Vise sæsonvarer
- Vise produkters CO2-aftryk 
- Søgefunktion
- Kamera

Features som app'en kan, lavet af Sofie:
- Skærme tilføjet: GreenFeedScreen, Saved, shoppinglist og behindGG
- Knapper: Tilføje vare til indkøbsliste 
- Login og signup
- Tilføje Varer til sin indkøbsliste
- GreenFeed --> Grønne tilbud 


Features der er på vej:
- Vise grønnere alternativer
- Historisk over søgte varer 
- Skanning af stregkoder med kameraet og brug af blockchain til at vise produktets CO2-aftryk


Husk at køre `npm install` for at installere alle nødvendige pakker

Lav filen `serviceAccountKey.json` i `database`
```json
{
  "type": "service_account",
  "project_id": "greenergoods",
  "private_key_id": "---INSERT PRIVATE KEY ID FROM THE REPORT HERE---",
  "private_key": "---INSERT PRIVATE KEY FROM THE REPORT HERE---",
  "client_email": "firebase-adminsdk-fz8sr@greenergoods.iam.gserviceaccount.com",
  "client_id": "106256476329348200568",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fz8sr%40greenergoods.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```