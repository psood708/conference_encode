import React from "react";
import "../assets/css/Awards.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../assets/css/Awards.css";

const Awards = () => {
  return (
    <>
      <Navbar />
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
