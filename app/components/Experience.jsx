"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";

const Experience = () => {
  return (
    <section className="scroll-mt-28 mt-[20rem]" id="experience">
      <h2 className="text-center text-4xl font-bold text-slate-200 mt-4 mb-8 md:mb-12">
        Professional Experience
      </h2>
      <VerticalTimeline lineColor="#F3FCF0">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              dateClassName="text-slate-200 font-semibold mx-10 bg-slate-100 rounded-md"
              icon={item.icon}
              iconStyle={{
                background: "#fff",
                color: "#1F271B",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-slate-200">
                {item.title}
              </h3>
              <p className=" text-slate-200 font-normal !mt-0">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-slate-200">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
