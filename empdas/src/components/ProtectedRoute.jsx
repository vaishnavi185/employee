import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = Cookies.get('token');
  console.log("Token from cookie:", token);

  return token ? children : <Navigate to="/login" />;
}
