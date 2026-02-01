import './about.css';
import Emoji from '../../assets/icons/emoji.png';

function About() {
  return (
    <div>
      <div className="ption">
        <div className="description-container">
          <div className="description leading-tight">
            EXCELLING AT <span className="text-[rgb(87,56,175)]">CRAFTING</span> CLEAN, <span className="text-[rgb(245,78,38)]">EFFICIENT</span> CODE WITH <span className="text-[rgb(208,213,255)]">OUTSTANDING DESIGN</span>.
          </div>
          <div>
            <div className="flex items-end mb-4">
              <div className="rotate-[-7deg] inline-block bg-indigo-800 text-5xl font-bold text-white pl-2 pt-3 pr-2">
                YO!
              </div>
              <div className="inline-block">
                <img className="inline-block pl-2 h-25 rounded-full" src={Emoji}></img>
              </div> 
            </div>

            <div className="description1">
              I am Ammar Shaikh, a Full Stack Web developer and tech-focused problem solver from India, with hands-on experience across coding, website development, and client-driven sales. I love everything that connects technology, design, and real-world business impact. As someone who’s both a logical coder and a people-oriented salesman, the blend of creativity, strategy, and technical execution in web development is the perfect playground for me.
            </div>
          </div>

        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default About;