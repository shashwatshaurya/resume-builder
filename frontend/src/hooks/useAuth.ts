import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSession from "./useSession";

interface useAuthOptions {
  redirectTo?: string;
  redirectIfAuthenticated?: string;
}

const useAuth = (options: useAuthOptions = {}) => {
  const { redirectTo = "/login", redirectIfAuthenticated = "/dashboard" } =
    options;
  const router = useRouter();
  const { session, loading, error } = useSession();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (session) {
        router.push(redirectIfAuthenticated);
      } else {
        router.push(redirectTo);
      }
      setIsInitialized(true);
    }
  }, [session, loading, router, redirectTo, redirectIfAuthenticated]);

  return {
    isAuthenticated: !!session,
    isInitialized,
    session,
    loading,
    error
  };
};

export default useAuth;
