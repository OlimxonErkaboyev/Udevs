import "./loader.scss";
export default function Loader() {
  return (
    <div className="loading-area">
      <div className="loading-box"></div>
      <div className="loading-pic">
        <div id="outer-barG">
          <div id="front-barG" className="bar-animationG">
            <div id="barG_1" className="bar-lineG"></div>
            <div id="barG_2" className="bar-lineG"></div>
            <div id="barG_3" className="bar-lineG"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
