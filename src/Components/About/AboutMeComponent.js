import React from "react";
import Resume from "../../files/Nagy_Norbert_cv.pdf";

function AboutMe() {
  return (
    <div>
      <p>
        I'm a 24 year old guy who is about to finish the university to become a
        mobile and web developer.
      </p>{" "}
      <p>
        I'm some kind of an explorer. I want to understand how stuff works. When
        I was a kid I was a big fan of video games, so i remade some of them in
        my own version. From that point on I constantly looking for
        opportunities to learn something new. That's why I built this website.{" "}
      </p>
      <p>
        In the future I want to learn about UI/UX and some backend stuff, so I
        could become a Fullstack developer.
      </p>
      <a href={Resume} download>
        Download cv(hungarian)
      </a>
    </div>
  );
}

export default AboutMe;
