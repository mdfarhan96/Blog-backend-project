import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";

const Nature = () => {
  const [natu, setNatu] = useState([]);

  useEffect(() => {
    axios.get("https://blog-project-abc.herokuapp.com/api/blog").then((res) => {
      setNatu(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Fitness</h1>
      {natu
        .filter((render) => render.id > 12 && render.id < 17)
        .map((wood) => (
          <div key={natu.imgt} className="tolly">
            <Link to={`/nature/${wood.id}`} className="tolly">
              <div className="tollyi">
                <img src={wood.img} alt="" />
              </div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <div className="tollyn">
              <h5>{wood.date}</h5>
            </div>
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

export default Nature;
