import Image from "next/image";
import Footer from "../_components/footer";

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 py-10 space-y-16">
      
      {/* Education Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <hr />
        <div className="flex items-center space-x-6 mt-6">
          <Image src="/ntu.png" width={80} height={80} alt="NTU" className="rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">Nanyang Technological University, Singapore</h3>
            <h3 className="text-md">Bachelor of Engineering</h3>
            <p className="text-gray-600">Expected Honours (Distinction), Current GPA: 4.07/5.00</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 mt-6">
          <Image src="/sp.jpg" width={80} height={80} alt="SP" className="rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">Singapore Polytechnic, Singapore</h3>
            <h3 className="text-md">Diploma in Computer Engineering</h3>
            <p className="text-gray-600">Graduated with CGPA: 3.65/4.00</p>
          </div>
        </div>
      </section>

      {/* Course Work Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4">Course Work</h2>
        <hr />
        <div className="flex items-center space-x-6 mt-6">
          <Image src="/ntu.png" width={80} height={80} alt="NTU" className="rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">Software Engineering Project</h3>
            <p className="text-gray-600">
              Led a team of 5 to develop a web app for NTU students to automate course selection.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Experience */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4">Internship Experience</h2>
        <hr />
        <div className="flex items-center space-x-6 mt-6">
          <Image src="/gic.jpg" width={80} height={80} alt="GIC" className="rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">Government of Singapore Investment Corporation (GIC)</h3>
            <h3 className="text-md">Software Developer Intern</h3>
          </div>
        </div>

        <div className="flex items-center space-x-6 mt-6">
          <Image src="/accenture.png" width={80} height={80} alt="Accenture" className="rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold">Accenture</h3>
            <h3 className="text-md">Functional Analyst Intern</h3>
            <p className="text-gray-600">
              Developed automation tools, improved software efficiency, and collaborated with a team of 5.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4">Awards and Achievements</h2>
        <hr />
        <div className="flex items-center space-x-6 mt-6">
          <Image src="/worldquant.jpg" width={80} height={80} alt="WorldQuant" className="rounded-lg" />
          <div>
            <p className="text-gray-600">15th Rank in NTU-CAO WorldQuant Brain Alphathon 2023</p>
            <p className="text-gray-600">Edusave Merit Bursary AY 17/18</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <hr />
        <div className="flex items-center space-x-6 mt-6">
          <Image src="/worldquant.jpg" width={80} height={80} alt="WorldQuant" className="rounded-lg" />
          <div>
            <p className="text-gray-600">Gold Level in WorldQuant Brain</p>
            <p className="text-gray-600">An Introduction to Quantitative Finance</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Resume;
