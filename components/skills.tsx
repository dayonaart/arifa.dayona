import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = ({
  skillName,
  valueSkill,
}: {
  skillName: string;
  valueSkill: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const skillVariant: Variants = {
    visible: {
      width: !isInView ? "0%" : `${valueSkill}%`,
      transition: {
        duration: 3,
        ease: "linear",
      },
    },
    initial: {
      width: 0,
      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <section ref={ref} className="flex flex-col mb-1 text-[11px]">
      <p className="font-semibold">{skillName}</p>
      <div
        className={`mobile:h-[13px] tablet:h-[15px] rounded-md bg-white p-1`}
      >
        <motion.div
          variants={skillVariant}
          animate="visible"
          initial="initial"
          style={{
            width: `${valueSkill}%`,
            height: "100%",
            background: "#84cc16",
          }}
          className="rounded-md"
        ></motion.div>
      </div>
    </section>
  );
};

export default Skills;
