import "./App.css";
import "./components/FeatureItem/FeatureItem";
import image from "./assets/icon-chat.png";
import FeatureItem from "./components/FeatureItem/FeatureItem";
function App() {
  return (
    <div className="App">
      <FeatureItem image={image} title="Hello" text="text" />
    </div>
  );
}

export default App;
