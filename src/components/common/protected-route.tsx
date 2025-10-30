import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const auth = useAuth();
  return <>{children}</>;
};

export default ProtectedRoute;
