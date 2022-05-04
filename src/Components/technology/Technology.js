import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";

const Technology = () => {
  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios.get("https://blog-project-abc.herokuapp.com/api/blog").then((res) => {
      setTolly(res.data);
    });
  }, []);

  return (
    <div>
      <h1> Technology </h1>
      {tolly
        .filter((render) => render.id > 4 && render.id < 9)
        .map((tec) => (
          <div key={tolly.id} className="tolly">
            <Link to={`/technology/${tec.id}`} className="tolly">
              <div className="tollyi">
                <img src={tec.img} alt="" />
              </div>
              <h3 className="tollyt">{tec.det}</h3>
            </Link>
            <h5 className="tollyd">{tec.date}</h5>
            <hr />
          </div>
        ))}
      <div className="adv">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/05/16/24/megaphone-2374502__340.png"
          className="adv"
          alt=""
        />
      </div>
      <br />
      <button className="loadmore">LoadMore</button>
      <Bottom />
    </div>
  );
};

export default Technology;
