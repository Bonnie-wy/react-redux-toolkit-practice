import "./App.css";
import Form from "./components/Form";
import FormUseState from "./components/FormUseState";
import Post from "./components/Post";
import UserDetails from "./components/Userdetails";

function App() {
  return (
    <div className="App">
      <h1>Redux toolkit form</h1>
      <Form />
      <UserDetails />
      <br />
      <h1>useState Form</h1>
      <FormUseState />
      <h1>testy posts</h1>
      <Post />
    </div>
  );
}

export default App;
