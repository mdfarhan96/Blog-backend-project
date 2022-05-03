import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Home = () => {

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogbackendapp.herokuapp.com/api/blog")
      .then((res) => {
        setHome(res.data);
      });
  }, []);
  
  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/nature/13" className="one"><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" /><div className="onet"> Colors are the smiles of nature... </div></Link>
        {home.filter((disp)=>disp.id==="10").map((job)=>(<Link to={`/jobs/${job.id}`} className="two"><img src={job.img} alt="" height={"250px"} width={"480px"}/><div className="twot"><br />  South-Indian specials </div></Link>))}
        {home.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/technology/${tec.id}`} className="three"><img src={tec.img} alt="" /><div className="threet"> Samsung Galaxy</div></Link>))}
      </div>
      
      <div>
        <div className="The-Latest">The Latest</div>
        <hr className="hlhr"/>
        <div className="flex2">
          <div className="hc1">
            {home.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/tollywood/${latest.id}`}  key={home.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>home: {latest.home}</h4></div>
            </Link>
           ))}
          </div>
          <div className="hc1">
           {home.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/technology/${latest.id}`}  key={home.id} className="hcc1">
                <div className="himg"><img src={latest.img} alt="" /></div>
                <div className="c1h3"><h3>{latest.det}</h3></div>
                <div className="c1h5"><h5>{latest.date}</h5></div>
                <div className="c1h4"><h4>home: {latest.home}</h4></div>
            </Link>
           ))}
          </div>
            <div className="hc1">
              {home.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/jobs/${latest.id}`}  key={home.id} className="hcc1">
                  <div className="himg"><img src={latest.img} alt="" /></div>
                  <div className="c1h3"><h3>{latest.det}</h3></div>
                  <div className="c1h5"><h5>{latest.date}</h5></div>
                  <div className="c1h4"><h4>home: {latest.home}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src=" https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-grocery-store-shopping-ad-template-design-b684c058a210822ad6fc29cb19952daf_screen.jpg?ts=1589560466" className="advr" alt="" /></div><br/>
            
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {home.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/tollywood/${latest.id}`}  key={home.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>home: {latest.home}</h4></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {home.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/technology/${latest.id}`}  key={home.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>home: {latest.home}</h4></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {home.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/nature/${latest.id}`} key={home.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
              <div className="c1h7"><h4>home: {latest.home}</h4></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;