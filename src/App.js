import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WebSection from "./pages/web/WebSection";
import MobileSection from "./pages/mobile/MobileSection";
import { useEffect } from "react";
import {useWindowSize} from './utils/custom-hook';

function App() {
  const windowWidth = useWindowSize();

  return (
    <div>
      {windowWidth <= 768 ? (
        <MobileSection />
      ) : (
        <WebSection />
      )}
    </div>
  );
}
export default App;
