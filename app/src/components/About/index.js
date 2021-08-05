import React from "react";
import headshot from "./headshot.jpg";
import sme from "./aws-sme.png";
import cloudPractitioner from "./cloud-practitioner.png";
import solutionsArchitect from "./solutions-architect.png";

export default function About() {
  return (
    <div class="container intro-container">
      <h3>About Me</h3>
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-4 col-md-3 no-print">
          <img class="profile-img" src={headshot} />
        </div>
        <div class="col-xs-12 col-sm-8 col-md-9 col-print-12">
          <p>
            Inquisitive, hard-working developer skilled in leadership, with a strong
            foundation in coding. Earned a Bachelor of Science in Computer Science with
            magna cum laude honors and currently pursuing a Master of Computer Science
            degree. Served as an AWS Subject Matter Expert during the development of the
            AWS Certified Alexa Skill Builder Examination. Certified AWS Cloud
            Practitioner and Solutions Architect - Associate. Published developer on the
            Alexa Skill Store and Apple App Store. Winner of Voicehacks Hackathon 2019.
            Recognized at AWS re:Invent and TEDxASU.
          </p>
          <div class="badges">
            <a
              href="https://www.certmetrics.com/amazon/public/badge.aspx?i=87&t=r&d=2019-10-14"
              target="_blank"
            >
              <img
                title="AWS Subject Matter Expert Badge"
                src={sme}
                alt="AWS Subject Matter Expert Badge"
                width="160"
                height="160"
              />
            </a>
            <a
              href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-06-28&ci=AWS00747302"
              target="_blank"
            >
              <img
                title="Cloud Practioner Badge"
                src={cloudPractitioner}
                alt="Cloud Practioner Badge"
                width="160"
                height="160"
              />
            </a>
            <a
              href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-03&ci=AWS00747302"
              target="_blank"
            >
              <img
                title="Solutions Architect - Associate Badge"
                src={solutionsArchitect}
                alt="Solutions Architect - Associate Badge"
                width="160"
                height="160"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
