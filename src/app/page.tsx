import Introduction from "./_components/introduction";
import TopBar from "./_components/topbar";
import TimeLine from "./_components/timeline";
import HardSkills from "./_components/hardskills";
// import Footer from "../AppFooter"

function Home() {
  return (
    <div>
      <TopBar/>
      <Introduction/>
      <HardSkills/>
      <TimeLine/>
    </div>
  );
}

export default Home