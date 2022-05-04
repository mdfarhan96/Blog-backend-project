import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Home = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get("https://blog-project-abc.herokuapp.com/api/blog").then((res) => {
      setHome(res.data);
    });
  }, []);

  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/nature/13" className="one">
          <img
            src="https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"
            alt=""
          />
        </Link>
        {home
          .filter((disp) => disp.id === "10")
          .map((job) => (
            <Link to={`/jobs/${job.id}`} className="two">
              <img src={job.img} alt="" height={"250px"} width={"480px"} />
            </Link>
          ))}
        {home
          .filter((disp) => disp.id === "5")
          .map((tec) => (
            <Link to={`/technology/${tec.id}`} className="three">
              <img src={tec.img} alt="" />
            </Link>
          ))}
      </div>

      <div>
        <div className="The-Latest">The Latest</div>
        <hr className="hlhr" />
        <div className="flex2">
          <div className="hc1">
            {home
              .filter((data) => data.id === "1")
              .map((latest) => (
                <Link
                  to={`/tollywood/${latest.id}`}
                  key={home.id}
                  className="hcc1"
                >
                  <div className="himg">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="c1h3">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c1h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h4">
                    <h4> {latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <div className="hc1">
            {home
              .filter((data) => data.id === "5")
              .map((latest) => (
                <Link
                  to={`/technology/${latest.id}`}
                  key={home.id}
                  className="hcc1"
                >
                  <div className="himg">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="c1h3">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c1h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h4">
                    <h4> {latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <div className="hc1">
            {home
              .filter((data) => data.id === "9")
              .map((latest) => (
                <Link to={`/jobs/${latest.id}`} key={home.id} className="hcc1">
                  <div className="himg">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="c1h3">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c1h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h4">
                    <h4> {latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <br />
        </div>
        <div style={{ marginLeft: "-8.5%", marginTop: "2%" }}>
          <Footer />
        </div>
        <div className="flex3">
          <div className="advs">
            <img
              src=" https://cdn.pixabay.com/photo/2017/06/05/16/24/megaphone-2374502__340.png"
              className="advr"
              alt=""
            />
          </div>
          <br />

          <div>Latest Articles</div>
          <hr className="hlhr" />
          <div className="hc2">
            {home
              .filter((data) => data.id === "2")
              .map((latest) => (
                <Link
                  to={`/tollywood/${latest.id}`}
                  key={home.id}
                  className="hcc2"
                >
                  <div className="tollyi">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="tollyt">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c2h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h7">
                    <h4>{latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <hr className="f50per" />
          <div className="hc2">
            {home
              .filter((data) => data.id === "6")
              .map((latest) => (
                <Link
                  to={`/technology/${latest.id}`}
                  key={home.id}
                  className="hcc2"
                >
                  <div className="tollyi">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="tollyt">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c2h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h7">
                    <h4> {latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <hr className="f50per" />
          <div className="hc2">
            {home
              .filter((data) => data.id === "12")
              .map((latest) => (
                <Link
                  to={`/nature/${latest.id}`}
                  key={home.id}
                  className="hcc2"
                >
                  <div className="tollyi">
                    <img src={latest.img} alt="" />
                  </div>
                  <div className="tollyt">
                    <h3>{latest.det}</h3>
                  </div>
                  <div className="c2h5">
                    <h5>{latest.date}</h5>
                  </div>
                  <div className="c1h7">
                    <h4> {latest.home}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
