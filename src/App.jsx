import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useThemeStore } from "./store/themeStore";

import { routes } from "./router/Router";

import Header from "./components/Header";

const RouteHandler = () => {
  const { setProfile } = useThemeStore();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setProfile("professional");
    else if (path === "/personal") setProfile("personal");
    else if (path === "/couple") setProfile("couple");

    window.scrollTo(0, 0);
  }, [location, setProfile]);

  return null;
};

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen transition-colors duration-300 font-sans text-white dark:text-gray-100 bg-gradient-to-r from-green-600 to-cyan-400 dark:from-gray-900 dark:to-gray-800">
        <RouteHandler />

        <div className="relative z-50">
          <Header />
        </div>

        <main className="relative z-10">
          <Suspense fallback={null}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
