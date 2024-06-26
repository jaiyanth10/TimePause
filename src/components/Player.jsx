import {useRef,useState} from "react";
export default function Player() {
  const [v,setv] = useState("");
  const x= useRef();
  function setwelcome(){
    setv(x.current.value);
    x.current.value="";
  }
  return (
    <section id="player">
      <h2>Welcome { v ? v : "         "}</h2>
      <p>
        <input ref={x} type="text" />
        <button onClick={setwelcome}>Set Name</button>
      </p>
    </section>
  );
}

