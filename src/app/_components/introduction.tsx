import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <section className="flex md:flex-row items-stretch justify-center pt-60">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hey there!
          <br />
          Welcome
        </h1>

        <div className="relative flex items-center mt-12 h-24">
          <a href="https://github.com/diheng99" target="_blank" rel="noopener noreferrer" className="h-full flex flex-col items-center">
            <FontAwesomeIcon icon={faGithub} className="h-1/2" />
            <p className="mt-4 ">Github</p>
          </a>
          <a href="https://www.linkedin.com/in/dihengchew/" target="_blank" rel="noopener noreferrer" className="ml-8 h-full flex flex-col items-center">
            <FontAwesomeIcon icon={faLinkedin} className="h-1/2" />
            <p className="mt-4">LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/dihennnng/" target="_blank" rel="noopener noreferrer" className="ml-8 h-full flex flex-col items-center">
            <FontAwesomeIcon icon={faInstagram} className="h-1/2" />
            <p className="mt-4">Instagram</p>
          </a>
        </div>

        <p className="mt-16 text-lg">
          I am Di Heng, Chew, currently a Year 3 Computing student<br />
          studying at Singapore NTU. I aspire to be a <strong>quantitative developer/researcher</strong>.<br />
          This website serves as my academic journey and a retrospective of my professional work.
        </p>
      </div>

      <div className="flex h-64 w-64 justify-center">
        <Image  
          src="/profilePicture.jpg"  
          alt="Di Heng's Profile Picture"
          width={280}
          height={280}
          className="rounded-full object-cover border-4"
        />
      </div>
    </section>
  );
};

export default Introduction;
