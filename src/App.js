import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    alert("users");
  };
  const onClickUser1 = () => {
    alert("user1");
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>users?id=1</button>
    </div>
  );
}
