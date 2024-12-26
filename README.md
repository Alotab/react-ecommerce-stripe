## React Ecommerce Project

A fully functional e-commerce web application built with React, Zustand, Firebase, and Stripe for payment processing. The app provides a seamless user experience with functionalities such as product management, cart features (add, remove, increase quantity), favorites management, and secure payment handling. It utilizes Firebase for authentication and real-time data storage, and TailwindCSS for responsive design.

## Installation

1. Clone the repository:

```
git clone https://github.com/Alotab/react-ecommerce-stripe.git
cd client
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a .env file in the root directory of the project and add the required Firebase and Stripe credentials:

```
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
```

4. Run the development server:

```
npm start
# or
yarn start
```

5. Run the admin server:

```
cd admin
npm start
```

## Stripe Integration

Stripe is integrated into the app to handle secure payment processing.

### Steps to Set Up Stripe:

1. Go to the Stripe Dashboard and create a new Stripe account if you don't have one.
2. Obtain your Publishable Key and Secret Key from Stripe and add them to your .env file as:

```
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
```
