import { faAndroid, faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HardSkills: React.FC = () => {
    return (
        <div className="relative flex flex-col pt-24 items-center">
            <div className="flex flex-row text-center mb-6">
                <h3 className="text-2xl font-semibold">Coding Skills</h3>
                <div className="flex ml-8 flex-wrap">
                    <span className="ml-12 text-xl flex">JS <FontAwesomeIcon icon={faJsSquare} className="flex h-8 w-8 text-yellow-400" /></span>
                    <span className="ml-12 text-xl flex">JAVA <FontAwesomeIcon icon={faJava} className="flex h-8 w-8s text-orange-500" /></span>
                    <span className="ml-12 text-xl flex">PYTHON <FontAwesomeIcon icon={faPython} className="flex h-8 w-8 text-blue-600 text-3xl" /></span>
                    <span className="ml-12 text-xl flex">HTML <FontAwesomeIcon icon={faHtml5} className="flex h-8 w-8 text-red-500 text-3xl" /></span>
                    <span className="ml-12 text-xl">Scala</span>
                </div>
            </div>
            <div className="relative flex flex-row text-center mt-8">
                <h3 className="text-2xl font-semibold">Framework</h3>
                <div className="flex ml-8 flex-wrap">
                    <span className="ml-12 text-xl flex">React JS <FontAwesomeIcon icon={faReact} className="flex h-8 w-8 text-blue-400" /></span>
                    <span className="ml-12 text-xl flex">Android <FontAwesomeIcon icon={faAndroid} className="flex h-8 w-8 text-green-400" /></span>
                    <span className="ml-12 text-xl flex">Flask <FontAwesomeIcon icon={faPython} className="flex h-8 w-8 text-blue-600" /></span>
                </div>
            </div>
            <hr className="flex mt-8 w-2/3 border border-black"></hr>
        </div>
    );
};

export default HardSkills