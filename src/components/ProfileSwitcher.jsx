import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";

function ProfileSwitcher({ className }) {
  const { currentProfile } = useThemeStore();
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const value = e.target.value;
    if (value === "personal") navigate("/personal");
    else if (value === "couple") navigate("/couple");
    else navigate("/");
  };

  return (
    <div className={`relative ${className}`}>
      <select
        value={currentProfile} // Sigue leyendo del store para reflejar la ruta actual
        onChange={handleNavigation}
        className="appearance-none bg-white/20 dark:bg-gray-800/50 border border-white/30 
                   text-gray-800 dark:text-white py-1 pl-3 pr-8 rounded-lg font-maven font-bold text-sm
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer
                   hover:bg-white/30 transition-all duration-300 shadow-sm backdrop-blur-sm"
      >
        <option value="professional" className="text-black">
          👔 Profesional
        </option>
        <option value="personal" className="text-black">
          🎮 Personal
        </option>
        <option value="couple" className="text-black">
          ❤️ Pareja
        </option>
      </select>

      {/* Flecha */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 dark:text-gray-300">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default ProfileSwitcher;
