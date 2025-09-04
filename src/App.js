import './App.css';
import Login from './components/Login';

import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
function App() {
  return (
    <>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Login/>
        </CartProvider>
    </AuthProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
