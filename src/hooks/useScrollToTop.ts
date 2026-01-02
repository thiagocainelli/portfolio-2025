import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook que faz scroll suave ao topo da página sempre que a rota mudar
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll suave ao topo quando a rota mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
};
