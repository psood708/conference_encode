import React, { useEffect,useState} from "react";
import "../assets/css/Awards.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../assets/css/Awards.css";

const Awards = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <>
      <Navbar />
      <div className="weather-section">
        <h1>Current Weather</h1>
        <div className="weather-container">
            {/* {(typeof data.main != 'undefined') ? (
            <Weather weatherData={data}/>
          ): (
            <div></div>
          )} */}
        </div>
      </div>
      <div className="map-title"><h1>Maps</h1></div>
      <div className="mapouter ">
        <div className="gmap_canvas">
          <iframe
            width={1500}
            height={800}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Pandit%20Deendayal%20Energy%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:900px;width:1500px;margin : auto;}",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:900px;width:1500px;}",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Awards;
