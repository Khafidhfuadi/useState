import React, { useCallback } from "react";
import { Fragment } from "react";

const BelajaruseCallback = (props) => {
  const [kelas, setKelas] = React.useState([
    "X TKJ",
    "X RPL",
    "XI TKJ",
    "XI RPL",
    props.kelas
  ]);
  const jumlahKelas = useCallback(() => {}, []);

  React.useEffect(() => {
    let data = jumlahKelas();
    setKelas(data);
    console.log("effect di panggil");
  }, [jumlahKelas]);
  return (
    <Fragment>
      <div className="container mt-3">
        <h2>Latihan useCallback</h2>
        <ul className="list-group mt-3">
          <li className="list-group-item active">Banyaknya kelas</li>
          {kelas.map((kelas, index) => (
            <li className="list-group-item">
              {index + 1}. {kelas}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BelajaruseCallback;
