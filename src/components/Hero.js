import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
    { logo: "logo-instagram", link: "https://www.instagram.com/_stha07ashok_/" },
    { logo: "logo-facebook", link: "https://www.facebook.com/ashokshrestha2003" },
    { logo: "logo-linkedin", link: "https://www.linkedin.com/in/ashok-shrestha-a295b3235/" },
    { logo: "logo-github", link: "https://github.com/stha07ashok"},
  ];

  const handleSocialMediaClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover my-3" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ashok Shrestha</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-end Web Developer And Data Science Enthusiast
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social) => (
              <div
                key={social.logo}
                className="text-gray-600 hover:text-white cursor-pointer"
                onClick={() => handleSocialMediaClick(social.link)}
              >
                <ion-icon name={social.logo}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
