import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from "./contexts/AuthContext";
import MainApp from "./components/MainApp";

function App() {
  return (
    <GoogleOAuthProvider clientId="751423155713-l79m1h2caere01kqo1l6vohhedg7kmfv.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <MainApp />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
    
  );
}

export default App;
