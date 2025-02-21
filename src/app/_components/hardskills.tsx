import { faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";


const HardSkills: React.FC = () => {
    return (
        <div className="relative flex flex-col pt-24 items-center">
            <div className="flex flex-row text-center mb-6">
                <h3 className="text-2xl font-semibold">Coding Skills</h3>
                <div className="flex ml-8 flex-wrap">
                    <span className="ml-12 text-xl flex">JavaScript <FontAwesomeIcon icon={faJsSquare} className="flex h-8 w-8 text-yellow-400" /></span>
                    <span className="ml-12 text-xl flex items-center">TypeScript</span> 
                    <span className="ml-12 text-xl flex">JAVA <FontAwesomeIcon icon={faJava} className="flex h-8 w-8s text-orange-500" /></span>
                    <span className="ml-12 text-xl flex">PYTHON <FontAwesomeIcon icon={faPython} className="flex h-8 w-8 text-blue-600 text-3xl" /></span>
                    <span className="ml-12 text-xl flex">HTML <FontAwesomeIcon icon={faHtml5} className="flex h-8 w-8 text-red-500 text-3xl" /></span>
                    <span className="ml-12 text-xl flex items-center">
                        Scala <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" alt="Scala Logo" className="h-8 w-8" />
                    </span>                </div>
            </div>
            <div className="relative flex flex-row text-center mt-8">
                <h3 className="text-2xl font-semibold">Framework</h3>
                <div className="flex ml-8 flex-wrap">
                    <span className="ml-12 text-xl flex">React JS <FontAwesomeIcon icon={faReact} className="flex h-8 w-8 text-blue-400" /></span>
                    <span className="ml-12 text-xl flex">Flask <FontAwesomeIcon icon={faPython} className="flex h-8 w-8 text-blue-600" /></span>
                    <span className="ml-12 text-xl flex items-center">Cucumber BDD</span>
                    <span className="ml-12 text-xl flex items-center">Slick</span>
                    <span className="ml-12 text-xl flex items-center">AWS Glue
                        <FontAwesomeIcon icon={faCloud} className="flex h-8 w-8 text-orange-500 ml-2" />
                    </span>
                    <span className="ml-12 text-xl flex items-center">
                        AKKA Actors
                    </span>

                </div>
            </div>
            <hr className="flex mt-8 w-2/3 border border-black"></hr>
        </div>
    );
};

export default HardSkills