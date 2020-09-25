import React, { Fragment } from "react";

const BelajarUserState = () => {
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [array, setArray] = React.useState(["Ayam", "Ikan", "Sapi"]);
  const [text, setText] = React.useState("");
  const [seconds, setSeconds] = React.useState(0);

  // useEffect 1
  React.useEffect(
    function () {
      if (text.length) localStorage.setItem("text", text);
      console.log("teks berhasil disimpan");
    },
    [text]
  );

  // useEffect2
  React.useEffect(function () {
    setText(localStorage.getItem("text"));
    let interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return function () {
      clearInterval(interval);
    };
    // console.log("get item");
  }, []);

  const HandleTambah = () => {
    // setCounter((counter) => counter + 1);
    setCounter((c) => c + 1);
    setLoading(true);
    setArray([...array, "Kijang"]);
    // setCounter(counter + 1);
  };
  const HandleKurang = () => {
    // setCounter((counter) => counter - 1);
    setCounter((c) => c - 1);
    // setCounter(counter - 1);
  };
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h1>Latihan UseState</h1>
            <h4>{counter}</h4>
            <button
              className="btn btn-primary btn-sm mr-2"
              onClick={HandleTambah}
            >
              {loading ? "Loading" : "Tambah"}
            </button>
            <button className="btn btn-danger btn-sm" onClick={HandleKurang}>
              Kurang
            </button>

            <ul className="list-group mt-3">
              <li className="list-group-item active">Nama nama hewan</li>
              {array.map((hewan, index) => (
                <li className="list-group-item">
                  {index + 1}. {hewan}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            {/* useEffect */}
            <h1 className="mt-3">Latihan UseEffect</h1>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <h3>
              Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BelajarUserState;
