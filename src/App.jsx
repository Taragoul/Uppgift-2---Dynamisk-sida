import "./assets/styles/Globalstyle.css";
import Banner from "./components/Banner";
import zakImg from "./assets/zak.jpg";
import spaceImg from "./assets/space.jpeg";

function App() {
  return (
    <Banner
      backgroundImage={spaceImg}
      name="Zak Troy"
      title="Future Fullstack Developer"
      profilePicSrc={zakImg}
      profilePicAlt="Zak Troy"
    />
  );
}

export default App;
