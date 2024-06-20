import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userinfo, setUserinfo] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/userInfo")
      .then((response) => {
        setUserinfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    //   .get("/api/v1/")
    //   .then((response) => {
    //     setUserinfo(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
  return (
    <>
      <h1>This is a frontend to backend connection....</h1>
      <h2>{userinfo.length}</h2>
      {userinfo.map((item) => (
        <div key={item.id}>
          <h1> {item.id}</h1>
          <h2>{item.name}</h2>
          <p>{item.age}</p>
          <h3>{item.Passion}</h3>
          <h1> {item.single}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
