import "./app.css"

const user = {
  name: "EdiJunior88",
  imageUrl: "https://avatars.githubusercontent.com/u/13875907?v=4",
  imageSize: 90,
};

const App = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={"Avatar de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
};

export default App;
