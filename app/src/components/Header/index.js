import React from 'react';

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
                href="https://dribbble.com/{{ site.dribbble_username| cgi_escape | escape }}"
                class="button button--sacnite button--round-l"
              >
                <i class="fab fa-linkedin" title="Dribble link"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
