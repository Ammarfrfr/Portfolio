import './project.css'

function Project(){
  return(
    <div>
      <div className="flex justify-center font-bold text-6xl text-[rgb(255,246,232)] mb-4">
        <div className="continer">
          UPCOMING PROJECTS - STAY TUNED!
        </div>
        
      </div>
      
      <div className="project-container tracking-wide">
        <div>
          <div className="backend">Backend Project Using Postman</div>
          <div className="components">
            <div className="bg-violet-900 pl-1 pr-1 pt-0.5">Tools Used:</div>
            <div>NodeJs</div>
            <div>Postman</div>
            <div>MongoDB</div>
          </div>
        </div>
        <hr className="line mr-40 mt-3 mb-5"></hr>

        <div>
          <div className="backend">Project 2</div>
          <div>
            <div>Under Construction...</div>
          </div>
        </div>
        <hr className="line mr-40 mt-3 mb-5"></hr>

        <div>
          <div className="backend">Project 3</div>
          <div>
            <div>Under Construction...</div>
          </div>
        </div>
        <hr className="line mr-40 mt-3 mb-5"></hr>

      </div>
    </div>
  )
}

export default Project;