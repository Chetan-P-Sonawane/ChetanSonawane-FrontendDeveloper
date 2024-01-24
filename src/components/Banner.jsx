import Photo1 from "../assets/photo-1.webp"

const Banner = () => {
  return (
    <div id="banner">
    <div className="imagediv">
       <img src={Photo1} alt="" />
       <div className="bannertext">
         <h1>SpaceX</h1>
         <h3>The Future of Space Exploration</h3>
      </div>
    </div>
    
    </div>
  )
}

export default Banner