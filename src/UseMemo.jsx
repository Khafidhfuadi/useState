import React from "react";
import { Fragment } from "react";

const BelajarUseMemo = (props) => {
  let [menu, SetMenu] = React.useState([]);
  let DaftarMakanan = function () {
    return ["nasi padang", "nasi uduk", "nasi gudeg"];
  };

  React.useMemo(() => {
    console.log("use Memo");
    if (props.wilayah === "jabar") return SetMenu([...menu, "petis"]);
    return SetMenu(DaftarMakanan());
  }, [props.wilayah]);
  return (
    <Fragment>
      <div className="container">
        <ul className="list-group mt-3">
          <li className="list-group-item active">Nama - nama Makanan</li>
          {menu.map((menu, index) => (
            <li className="list-group-item">
              {index + 1}. {menu}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BelajarUseMemo;
