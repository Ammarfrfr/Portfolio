
import './home.css'

function Home(){
  return (
    <div>
      <div className="card flex flex-col items-center mt-40 gap-2">
        <div className="line leading-none">ENERGISED BY <span className="word text-yellow-500">
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

      <div className="carousel">
        <div className="carousel-group">
          <div className="carousel-item item1"><span className="text-5xl align-middle">&#9670;</span> Javascript</div>
          <div className="carousel-item item2"><span className="text-5xl align-middle">&#9670;</span> React</div>
          <div className="carousel-item item3"><span className="text-5xl align-middle">&#9670;</span> C++</div>
          <div className="carousel-item item4"><span className="text-5xl align-middle">&#9670;</span> Jquery</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> Tailwind</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> C</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> Mongo Db</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> Express</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> NodeJs</div>
        </div>

        <div className="carousel-group">
          <div className="carousel-item item1"><span className="text-5xl align-middle">&#9670;</span> Javascript</div>
          <div className="carousel-item item2"><span className="text-5xl align-middle">&#9670;</span> React</div>
          <div className="carousel-item item3"><span className="text-5xl align-middle">&#9670;</span> C++</div>
          <div className="carousel-item item4"><span className="text-5xl align-middle">&#9670;</span> Jquery</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> Tailwind</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> C</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> MONGO DB</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> Express</div>
          <div className="carousel-item item5"><span className="text-5xl align-middle">&#9670;</span> NodeJs</div>
        </div>
        
      </div>
    </div>
  )

}

export default Home;
