import Pagebanner from "@/components/Pagebanner";
import { Team } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
   const teamMembersmain = [
    {
      role: "Managing Director | Founder",
      name: "Chathura Weerasinghe",
    image: "assets/img/team/Chathura.jpg.jpeg",
      delay: "200ms",
    },
    {
      role: "Director",
      name: "Sachinthi Welihinda",
    image: "assets/img/team/Sachinthi.jpg.jpeg",
      delay: "400ms",
    },
   
  ];
  const teamMembers = [
     {
      role: "Project Manager",
      name: "Chanodya Hennayake",
    image: "assets/img/team/Chanodya.jpg.jpeg",
      delay: "600ms",
    },
    {
      role: "Assistant Project Manager",
      name: " Pramuditha Bandara",
    image: "assets/img/team/Pramuditha.jpg.jpeg",
      delay: "800ms",
    },
    {
      role: "Warehouse Manager",
      name: "Seheni Weerakoon",
    image: "assets/img/team/Chanodya.jpg.jpeg",
      delay: "600ms",
    },
    {
      role: "Cinematographer (DOP) & Head of Post-Production",
      name: "Denuwan Theekshana",
    image: "assets/img/team/denuwan.jpeg",
      delay: "800ms",
    },
    {
      role: "Marketing Executive & Customer Engagement Specialist",
      name: "Janith Sudagaran",
    image: "assets/img/team/janith.jpeg",
      delay: "200ms",
    },
     {
      role: "Creative Designer ",
      name: "Dilisha Priyadarshan",
    image: "assets/img/team/dilisha.jpeg",
      delay: "600ms",
    },
    {
      role: "Video Editor ",
      name: "Akash Kavinda",
    image: "assets/img/team/akash.jpeg",
      delay: "400ms",
    },
    {
      role: "Brand Identity & Logo Designer",
      name: "Asanda Imesha",
    image: "assets/img/team/asanda.jpeg",
      delay: "600ms",
    },
    {
      role: "Chief Aerial Pilot",
      name: "Oshada Saparamadu",
    image: "assets/img/team/oshada.jpeg",
      delay: "800ms",
    },
     {
      role: "Drone Cinematographer",
      name: "Aloka Mendis",
    image: "assets/img/team/aaloka.jpeg",
      delay: "800ms",
    },
  ];
  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Team" />
      {/* <!-- Team Section Start --> */}

      <section className="team-wrapper team-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TEAM MEMBER</span>
            </div>
            
            <h2>The Minds Behind 
</h2>
            <p className="text-center">
              Accelerate innovation with world-class tech teams We’ll match you{" "}
              <br /> to an entire remote team of incredible freelance.
            </p>
          </div>
          <Team teamMembers={teamMembersmain} />
          <div
            className="page-nav-wrap mt-5 text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
           
          </div>
        </div>
      </section>



      <section className="team-wrapper team-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TEAM MEMBER</span>
            </div>
            
            <h2>Meet with Our Expert</h2>
            <p className="text-center">
              Accelerate innovation with world-class tech teams We’ll match you{" "}
              <br /> to an entire remote team of incredible freelance.
            </p>
          </div>
          <Team teamMembers={teamMembers} />
          <div
            className="page-nav-wrap mt-5 text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <ul>
              <li>
                <a className="page-numbers" href="#">
                  <i className="far fa-angle-right" />
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  01
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  02
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  03
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  <i className="far fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
