# React SPA with Auth0 Authentication

This project is a Single Page Application (SPA) built with React that implements authentication using Auth0. Upon successful authentication, users are greeted with a welcome page.

## Project Structure

```
react-spa-auth0
├── public
│   ├── index.html          # Main HTML file for the application
│   └── manifest.json       # Metadata about the application
├── src
│   ├── components
│   │   ├── Auth0ProviderWithHistory.js  # Auth0 provider component
│   │   ├── Loading.js                   # Loading indicator component
│   │   └── Welcome.js                   # Welcome message component
│   ├── App.js                          # Main application component
│   ├── index.js                        # Entry point of the React application
│   └── auth
│       └── auth0-config.js             # Auth0 configuration constants
├── package.json                        # npm configuration file
├── .env                                # Environment variables
└── README.md                           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-spa-auth0
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure Auth0:**
   - Create an Auth0 account if you don't have one.
   - Set up a new application in the Auth0 dashboard.
   - Update the `.env` file with your Auth0 domain and client ID.

4. **Run the application:**
   ```
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- Upon visiting the application, you will be prompted to log in using Auth0.
- After successful authentication, you will be redirected to the welcome page.

## License

This project is licensed under the MIT License.