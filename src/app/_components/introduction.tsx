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

        <div className="relative flex items-center mt-12 h-12">
          <a href="https://github.com/diheng99" target="_blank" rel="noopener noreferrer" className="h-full flex">
            <FontAwesomeIcon icon={faGithub} className="ml-8" />
          </a>
          <a href="https://www.linkedin.com/in/dihengchew/" target="_blank" rel="noopener noreferrer" className="h-full flex">
            <FontAwesomeIcon icon={faLinkedin} className="ml-8" />
          </a>
          <a href="https://www.instagram.com/dihennnng/" target="_blank" rel="noopener noreferrer" className="h-full flex">
            <FontAwesomeIcon icon={faInstagram} className="ml-8" />
          </a>
        </div>

        <p className="mt-16 text-lg">
          I am Di Heng, currently a Year 3 Computer Engineering student<br />
          studying at Singapore's NTU. I aspire to be a <strong>quantitative developer</strong>.<br />
          This website serves as my academic timeline and a centralized repository.
        </p>
      </div>

      <div className="flex h-64 w-64 justify-center">
        <Image  
          src="/ProfilePicture.jpeg"  
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
