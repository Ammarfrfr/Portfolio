
import Marquee from 'react-fast-marquee';
import './home.css'

function Home(){
  return (
    <div>
      <div className="card flex flex-col items-center mt-40 gap-2">
        <div className="line leading-none">ENERGISED BY <span className="word text-yellow-500" id="home">
            CODE
          </span> ,

        </div>    

        <div className="line leading-none">OBSESSED WITH <span className="word text-green-700">
            VISUALS
          </span> ,
        </div>

        <div className="line leading-none">FOCUSED ON <span className="container text-orange-700 ">
            CRAFT
          </span>.
        </div>
      </div>

      {/* <div className="carousel-container">
        <div className="carousel-track">
          <div className="item item1"><span className="text-5xl align-middle">&#9670;</span>  Javascript</div>
          <div className="item item2"><span className="text-5xl align-middle">&#9670;</span> React</div>
          <div className="item item3"><span className="text-5xl align-middle">&#9670;</span> C++</div>
          <div className="item item4"><span className="text-5xl align-middle">&#9670;</span> Jquery</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> Tailwind</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span>  C</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span>Mongo Db</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> Express</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> NodeJs</div>
        
          <div className="item item1"><span className="text-5xl align-middle">&#9670;</span>  Javascript</div>
          <div className="item item2"><span className="text-5xl align-middle">&#9670;</span> React</div>
          <div className="item item3"><span className="text-5xl align-middle">&#9670;</span> C++</div>
          <div className="item item4"><span className="text-5xl align-middle">&#9670;</span> Jquery</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> Tailwind</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span>  C</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span>Mongo Db</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> Express</div>
          <div className="item item5"><span className="text-5xl align-middle">&#9670;</span> NodeJs</div>
        </div> 
        
      </div> */}
      {/* <div className="carousel-container">
        <div className="carousel-track">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
          <div className="item">Item 4</div>
        
        {/* duplicate for seamless loop 
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
          <div className="item">Item 4</div>
        </div>
      </div> */}
      <Marquee>
        
      <div className="carousel-container">
        <div className="carousel-track">
          {/* SET 1 */}
          <div className="carousel-set">
            <div className="item"><i className="devicon-html5-plain"></i></div>
            <div className="item"><i className="devicon-css3-plain"></i></div>
            <div className="item"><i className="devicon-javascript-plain"></i></div>
            <div className="item"><i className="devicon-react-original"></i></div>
            <div className="item"><i className="devicon-tailwindcss-original"></i></div>
            <div className="item"><i className="devicon-nodejs-plain-wordmark"></i></div>
            <div className="item"><i className="devicon-express-original-wordmark"></i></div>
            <div className="item"><i className="devicon-mongodb-plain-wordmark"></i></div>
          </div>

          {/* SET 2 (DUPLICATE) */}
          <div className="carousel-set">
            <div className="item"><i className="devicon-html5-plain"></i></div>
            <div className="item"><i className="devicon-css3-plain"></i></div>
            <div className="item"><i className="devicon-javascript-plain"></i></div>
            <div className="item"><i className="devicon-react-original"></i></div>
            <div className="item"><i className="devicon-tailwindcss-original"></i></div>
            <div className="item"><i className="devicon-nodejs-wordmark"></i></div>
            <div className="item"><i className="devicon-express-original-wordmark"></i></div>
            <div className="item"><i className="devicon-mongodb-plain-wordmark"></i></div>
          </div>
        </div>
      </div>

      </Marquee>



    </div>
  )

}

export default Home;
