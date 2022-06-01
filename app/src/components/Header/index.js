import React from "react";

export default function Header() {
  return (
    <div class="container header-contianer">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left">
          <h1>Carter Kwon</h1>
          <h2>Developer</h2>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
          <ul class="icons no-print">
            <li>
              <a
                target="_blank"
                href="www.linkedin.com/in/carterkwon"
                class="button button--sacnite button--round-l"
              >
                <i class="fab fa-linkedin" title="Dribble link"></i>
              </a>
            </li>
          </ul>
          <p>
            {"Email: "}
            <a href="mailto:carterkwon@me.com" target="_blank">
              carterkwon@me.com
            </a>
          </p>
          <p>
            {"Web: "}
            <a href="https://carterkwon.com" target="_blank">
              https://carterkwon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
