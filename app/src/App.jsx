import AdminPanel from "./Components/AdminPanel";
import LoginForm from "./Components/LoginForm";

// let content;
let isLoggedIn = true;

// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

const App = () => {
  // return <div>{content}</div>;
  // return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
  return <div>{isLoggedIn && <AdminPanel />}</div>;
};

export default App;
