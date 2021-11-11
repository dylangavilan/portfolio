import React from "react";
export default function About() {
  return (
    <div className="flex justify-between px-40 h-screen bg-fondo" id="about">
      <div className="text-2xl">
        <h2 className="text-center pt-10 pb-20 text-5xl text-rosa font-azeret">
          About me
        </h2>
        <p className="font-azeret text-white">
          Hi! <span className="text-rosa">I'm Dylan Gavilan</span>, i was born
          in Buenos Aires, Argentina. I'm 20 years old.
          <br />I am a programming fan, since I was little
          <span className="text-rosa">
            {" "}
            I liked everything related to solving problems
          </span>
          , challenges, etc. I love researching and discovering new
          technologies, I take advantage of my free time for this. When it comes
          to developing, I consider that I have agility in learning, I am
          organized, <span className="text-rosa">I also like teamwork</span>, I
          believe that you can go further than if you go on your own.
        </p>
      </div>
    </div>
  );
}
