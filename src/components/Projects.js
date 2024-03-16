import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ROP from "../assets/img/ROP.pdf";
import OAQ from "../assets/img/OQ.pdf";
import CO from "../assets/img/co.pdf";
import Mbc from "../assets/img/MB.pdf";
import Mf from "../assets/img/MF.pdf";
import Mm from "../assets/img/MM.pdf";


export const Projects = () => {

  const projects = [
    {
      title: "Financial Lingo: Decoded!",
      description: "Financial acronyms leaving you speechless? Fintick breaks the code! We translate confusing terms like APR and ROI into clear, everyday language. No more financial fear - unlock your knowledge and confidence to manage your money like a pro.",
      imgUrl:"https://socialcry.com/wp-content/uploads/2024/03/event-1.png "
    },
    {
      title: "Money Smarts: Analyze in Minutes",
      description: "Feeling overwhelmed by your finances? Don't worry, Money Smarts has you covered!  Analyze your accounts in minutes with our easy-to-use tools. No more confusing spreadsheets or financial jargon. We break down your spending habits and financial health into clear, actionable insights.  Unlock the power of Money Smarts and take control of your financial future, today! ",
      imgUrl: "https://socialcry.com/wp-content/uploads/2024/03/event-2.png"
    },
    {
      title: "Stop Drifting, Start Planning: Your Financial Roadmap",
      description: "Stuck financially? Stop drifting!  Fintick's Roadmap charts your course to financial goals. Get organized, understand spending, and take control. Plan your future, today! Empower yourself financially - start your journey now!",
      imgUrl:"https://socialcry.com/wp-content/uploads/2024/03/event-3.png"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
        
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>WHY FINTICK✅?</h2>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}

