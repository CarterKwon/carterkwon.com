import React from "react";
import ReactMarkdown from "react-markdown";

const data = [
  {
    layout: "left",
    company: "Arizona State University",
    link: "https://www.asu.edu/",
    positions: [
      {
        title: "Business Intelligence Developer",
        dates: "May 2019 - Present",
      },
      {
        title: "Business Intelligence Associate",
        dates: "January 2019 - May 2019",
      },
      {
        title: "Management Intern",
        dates: "May 2018 - January 2019",
      },
    ],
    quote:
      "ASU is a top ranked research university in the greater Phoenix metropolitan area.\n",
    description:
      "- Developer on the Data Innovation and Voice team at the University Technology Office. \n- Assisted in the development of the [official Arizona State University Alexa Skill](https://smile.amazon.com/Arizona-State-University-Events-Hours/dp/B074RCQRN8/ref=sr_1_1?crid=17ZOM2XC8941&keywords=arizona+state+university&qid=1561015988&s=digital-skills&sprefix=arizona+state+un%2Calexa-skills%2C195&sr=1-1).\n- Push the boundaries of voice technology to further ASU's voice initiatives.\n- Experience with a wide variety of AWS services.\n- Assist with the interviewing, selection, and technical training of new team members.\n- Create automated solutions for time-consuming tasks.\n",
  },
  {
    layout: "left",
    company: "MWI Marketing",
    link: "https://www.mwi.com/",
    positions: [
      {
        title: "Digital Marketing Intern",
        dates: "October 2017 - April 2018",
      },
    ],
    quote: "MWI is a global, digital marketing agency.\n",
    description:
      "- Received Google Analytics and Google Adwords certification\n- Implement custom Adwords Scripts to better manage clients' accounts\n- Utilize Jira, a project management tool, to complete tasks by a given deadline\n- Flexible and able to be cross-trained within different deparments\n",
  },
  {
    layout: "left",
    company: "Freelance",
    positions: [
      {
        title: "Developer",
        dates: "2018 - Present",
      },
    ],
    quote:
      "I provided Alexa development services. Below are a couple client testimonies.\n",
    description:
      '## [Silly Things](https://smile.amazon.com/BukBros-Silly-Things/dp/B01H98E7EU/) - BukBros\n_"Carter did incredible work and got this done more quickly than what we had expected. Not only that, but his communication throughout the process was fantastic. He went above and beyond what we had expected and would highly recommend him."_\n## [RobotBASIC](https://smile.amazon.com/RobotBASIC/dp/B07DW3WCB8?sa-no-redirect=1) - [RobotBASIC.org](http://www.robotbasic.org)\n_"I had a very unusual programming project that required a lot of thinking outside the box. In the end, everything worked and I could not be happier with the experience."_\n\n_[An article about the project](https://www.servomagazine.com/magazine/article/controlling-robots-using-amazons-alexa)_\n',
    //'## <a href="https://smile.amazon.com/BukBros-Silly-Things/dp/B01H98E7EU/" target="_blank">Silly Things</a> - BukBros\n_"Carter did incredible work and got this done more quickly than what we had expected. Not only that, but his communication throughout the process was fantastic. He went above and beyond what we had expected and would highly recommend him."_\n\n## <a href="https://smile.amazon.com/RobotBASIC/dp/B07DW3WCB8?sa-no-redirect=1" target="_blank">RobotBASIC</a> - <a href="http://www.robotbasic.org/" target="_blank">RobotBASIC.org</a>\n_"I had a very unusual programming project that required a lot of thinking outside the box. In the end, everything worked and I could not be happier with the experience."_\n\n<a href="https://www.servomagazine.com/magazine/article/controlling-robots-using-amazons-alexa" target="_blank">_An article about the project._</a>\n',
  },
];
export default function Experience() {
  return (
    <div class="container experience-container">
      <h3>Experience</h3>

      {data.map((job) => (
        <div>
          <div class="row clearfix layout layout-left">
            <div class="col-xs-12 col-sm-4 col-md-4 col-print-12 details">
              <h4>{job.company}</h4>
              <a class="link" href={job.link} target="_blank">
                {job.link}
              </a>
              {job.positions.map((position) => (
                <div>
                  <p>
                    <b>{position.title}</b>
                  </p>
                  <p>{position.dates}</p>
                </div>
              ))}
            </div>
            <div class="col-xs-12 col-sm-8 col-md-8 col-print-12">
              <p class="quote">{job.quote}</p>
              <p>
                <ReactMarkdown>{job.description}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
