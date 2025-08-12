import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSession from "@/hooks/useSession";

interface WithAuthProps {
  children: React.ReactNode;
}

const withAuth = (Component: any) => {
  const AuthComponent = (props: WithAuthProps) => {
    const router = useRouter();
    const { session, loading } = useSession();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      if (!loading) {
        if (session) {
          setIsAuthenticated(true);
        } else {
          router.push("/login");
        }
      }
    }, [session, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return null;
  };
  return AuthComponent;
};

export default withAuth;
