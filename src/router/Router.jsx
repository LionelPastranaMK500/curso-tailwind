import { lazy } from "react";

const ProfessionalView = lazy(() =>
  import("../modules/profesional/ProfessionalView")
);
const PersonalView = lazy(() => import("../modules/personal/PersonalView")); 

export const routes = [
  {
    path: "/",
    element: <ProfessionalView />,
    key: "professional",
  },
  {
    path: "/personal",
    element: <PersonalView />, 
    key: "personal",
  },
  {
    path: "/couple",
    element: (
      <div className="pt-32 text-center text-white text-2xl">
        ❤️ Próximamente: CV Pareja
      </div>
    ),
    key: "couple",
  },
];
