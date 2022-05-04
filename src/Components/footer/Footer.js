import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [foo, setFoo] = useState([]);

  useEffect(() => {
    axios.get("https://blog-project-abc.herokuapp.com/api/blog").then((res) => {
      setFoo(res.data);
    });
  }, []);

  const [load, setload] = useState(false);

  const loadMore = () => {
    setload(true);
  };
  const loadLess = () => {
    setload(false);
  };
  return (
    <div className="h1">
      <div>
        {load ? (
          <>
            <div className="flex2">
              <div className="hc1">
                {foo
                  .filter((data) => data.id === "7")
                  .map((latest) => (
                    <Link
                      to={`/technology/${latest.id}`}
                      key={foo.id}
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
                        <h4>foo: {latest.foo}</h4>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="hc1">
                {foo
                  .filter((data) => data.id === "4")
                  .map((latest) => (
                    <Link
                      to={`/tollywood/${latest.id}`}
                      key={foo.id}
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
                        <h4>foo: {latest.foo}</h4>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="hc1">
                {foo
                  .filter((data) => data.id === "11")
                  .map((latest) => (
                    <Link
                      to={`/jobs/${latest.id}`}
                      key={foo.id}
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
                        <h4>foo: {latest.foo}</h4>
                      </div>
                    </Link>
                  ))}
              </div>
              <br />
            </div>
            <button
              className="loadmore"
              style={{ marginLeft: "0px" }}
              onClick={loadLess}
            >
              LoadLess
            </button>
          </>
        ) : (
          <button
            className="loadmore"
            style={{ marginLeft: "0px" }}
            onClick={loadMore}
          >
            LoadMore
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
