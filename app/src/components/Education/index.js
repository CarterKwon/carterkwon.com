import React from "react";
import ReactMarkdown from "react-markdown";

const data = {
  name: "Arizona State University",
  qualifications: [
    {
      title: "Master of Computer Science",
      dates: "2019 - 2021",
      gpa: 3.83,
    },
    {
      title: "B.S. in Computer Science",
      dates: "2015 - 2019",
      gpa: 3.62,
    },
  ],
  description:
    "- _magna cum laude_ honors\n- Dean's List for 6 semesters\n- New American University Scholar - Dean's Award\n",
};

export default function Experience() {
  return (
    <div class="container education-container">
      <h3>Education</h3>
      <div>
        <div class="row clearfix layout layout-left">
          <div class="col-xs-12 col-sm-4 col-md-4 col-print-12 details">
            <h4>{data.name}</h4>
            {data.qualifications.map((qualification) => (
              <div>
                <p>
                  <b>{qualification.title}</b>
                </p>
                <p>{qualification.dates}</p>
                <p>GPA: {qualification.gpa}</p>
              </div>
            ))}
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 col-print-12">
            <p>
              <ReactMarkdown>{data.description}</ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
