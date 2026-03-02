import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-112.5" src={assets.about_img} alt="" />
        <div className="flex flex-col text-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolution:
          </p>
          <p>
            Since our inception, we've worked tirelessly to accurate a diverse
            selection
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex
            ducimus rerum ullam modi quaerat veniam ipsum ab nobis porro!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <div className="mb-20 flex flex-col md:flex-row text-sm">
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20 ">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Forever was born out of a passion for innovation and a desire to
            revolution:
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20 ">
          <b>Convenience</b>
          <p className="text-gray-600">
            Since our inception, we've worked tirelessly to accurate a diverse
            selection
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20 ">
          <b>Exceptional customer service:</b>
          <p className="text-gray-600">
            Since our inception, we've worked tirelessly to accurate a diverse
            selection
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
