import "./App.scss";
import AppRouter from "./components/AppRouter";
import Popup from "./components/Popup/Popup";
import ReactPortal from "./components/ReactPortal/ReactPortal";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { isOpen } = useAppSelector((state) => state.popupReducer);
  return (
    <div className="App">
      <AppRouter />
      {isOpen && (
        <ReactPortal>
          <Popup />
        </ReactPortal>
      )}
    </div>
  );
}

export default App;
