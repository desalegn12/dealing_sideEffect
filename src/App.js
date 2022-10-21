import "./styles.css";
import Child from "./child";
import Two from "./two";
import Four from "./four";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  //it is preferable to use a function inside use
  //effect and call it inside the cleanup function
  useEffect(() => {
    const loggs = () => console.log("before mount");
    return () => {
      loggs();
    };
  });
  return (
    <div className="App">
      <Child />
      <Two two={"two"} data={"data"} l={"little"} h={"hello"} m={"mom"} />
      <Four four={"four"} />
      <ShowObj />
      <Abort />
      <JsonWebData />
    </div>
  );
}

function CountDown() {
  this.enum = 0;
  this.field = "field";
  this.start = function () {
    return this.field;
  };
}

function ShowObj() {
  const count = new CountDown();
  console.log(count);
  // console.log(count.start())
}

function Abort() {
  const controller = new AbortController();
  console.log(controller);
}

function JsonWebData() {
  useEffect(() => {
    async function getData() {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
        // {
        //   signal: controller.signal
        // }
      );
      console.log(data);
    }

    return () => getData();
  });
}
