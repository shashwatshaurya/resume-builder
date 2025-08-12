const useSession = () => {
  const getSession = () => {
    if (typeof window !== "undefined") {
      const session = window.sessionStorage.getItem("session");
      if (session) {
        return JSON.parse(session);
      }
    }
    return null;
  };
  return {
    session: getSession(),
    loading: false,
    error: null
  };
};

export default useSession;
