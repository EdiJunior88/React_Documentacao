import MyButton from "./Components/MyButton";
import AboutPage from "./Pages/AboutPage";
import "./App.css";
import avatarImage from "./Img/avatar.png";

const App = () => {
  return (
    <div>
      <h1>Bem vindo ao meu app</h1>
      <MyButton />
      <AboutPage />
      <img className='avatar' src={avatarImage} />
    </div>
  );
};

export default App;
