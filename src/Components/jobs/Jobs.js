import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";

const Jobs = () => {
  const [job, setjob] = useState([]);

  useEffect(() => {
    axios.get("https://blog-project-abc.herokuapp.com/api/blog").then((res) => {
      setjob(res.data);
    });
  }, []);

  return (
    <div>
      <h1> FOOD </h1>
      {job
        .filter((render) => render.id > 8 && render.id < 13)
        .map((wood) => (
          <div key={job.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi">
                <img src={wood.img} alt="" />
              </div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5 className="tollyd">{wood.date}</h5>
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

export default Jobs;
