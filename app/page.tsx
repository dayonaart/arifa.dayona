"use client";
import { Framework } from "@/components/framework";
import Skills from "@/components/skills";
import { Technologies } from "@/components/technologies";
import { PROFILE_DESCRIPTION } from "@/constant/constant";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
const containerVariant: Variants = {
  v: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: "linear",
    },
  },
  e: {
    opacity: 0,
  },
};
const staggerVariant: Variants = {
  v: {
    opacity: 1,
    transition: {
      ease: "linear",
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  e: {
    opacity: 0,
  },
};
const itemStaggerVariant: Variants = {
  v: { x: 0, opacity: 1 },
  e: { x: -10, opacity: 0 },
};
export default function Home() {
  return (
    <div>
      <MainHome />
      <MobileHome />
      <Analytics />
    </div>
  );
}
const MainHome = () => {
  return (
    <div className="tablet:flex tablet:flex-col tablet:gap-5 mobile:hidden">
      <div className="tablet:flex tablet:gap-20 flex-row ">
        <div className="flex flex-col w-[50%] justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Welcome />
            <Description />
          </div>
        </div>
        <div className="w-[50%]">
          <Skill className="flex laptop:flex-row gap-10 tablet:flex-col" />
        </div>
      </div>
      <FrameworkList className="flex flex-row gap-4 flex-wrap" />
      <TechnologiesList className="flex flex-row gap-4 flex-wrap text-[11px]" />
    </div>
  );
};

const MobileHome = () => {
  return (
    <div className="mobile:flex flex-col tablet:hidden items-center gap-4">
      <MotionProfile />
      <Welcome />
      <Description />
      <div className="border-b-2 border-cyan flex w-full">
        Framework And Technologies
      </div>
      <FrameworkList className="flex flex-row gap-2 flex-wrap justify-start" />
      <TechnologiesList className="flex flex-row gap-2 flex-wrap  justify-center text-[10px]" />
      <div className="border-b-2 border-cyan flex w-full">Skills</div>
      <Skill className="flex flex-col w-[80%] gap-4" />
      <div className="border-b-2 border-cyan flex w-full" />
    </div>
  );
};
const MotionProfile = () => {
  const imageSize =
    "desktop:h-[150px] desktop:w-[150px] tablet:h-[120px] tablet:w-[120px] mobile:h-[140px] mobile:w-[140px]";

  const circleVariant: Variants = {
    v: {
      rotate: 360,
      transition: {
        delay: 2,
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      animate="v"
      initial="e"
      exit="e"
      className="flex"
    >
      <motion.div
        variants={circleVariant}
        animate="v"
        className={`${imageSize} border border-lime rounded-full`}
        style={{
          borderStyle: "dashed",
          borderWidth: "4px",
        }}
      />
      <Image
        unoptimized={process.env.NODE_ENV == "development"}
        alt="dayona"
        src="/dayona.png"
        priority={false}
        width={200}
        height={200}
        className={`${imageSize} absolute p-2`}
      />
    </motion.div>
  );
};

const Welcome = () => {
  return (
    <motion.div
      variants={containerVariant}
      animate="v"
      initial="e"
      exit="e"
      className="laptop:text-3xl tablet:text-2xl mobile:text-3xl font-bold"
    >
      <span className="type-welcome"></span>
    </motion.div>
  );
};

const Description = () => {
  return (
    <motion.ul
      className="flex flex-col gap-2 list-disc marker:text-lime mobile:text-[10px] tablet:text-[11px] laptop:text-[12px] text-justify"
      variants={staggerVariant}
      animate="v"
      initial="e"
      exit="e"
    >
      {PROFILE_DESCRIPTION.map((e, i) => (
        <motion.li key={i} variants={itemStaggerVariant}>
          {e}
        </motion.li>
      ))}
    </motion.ul>
  );
};

const Skill = ({ className }: { className: string }) => {
  return (
    <motion.div
      variants={containerVariant}
      animate="v"
      initial="e"
      exit="e"
      className={className}
    >
      <div className="tablet:w-[100%] mobile:w-[100%]">
        <div className="tablet:mt-4 tablet:flex tablet:justify-center mobile:hidden">
          <MotionProfile />
        </div>
        <p className="mt-2 mb-2 font-semibold">Main Skills</p>
        <div className="flex flex-col gap-2">
          <Skills skillName="Java" valueSkill={80} />
          <Skills skillName="Kotlin" valueSkill={95} />
          <Skills skillName="Flutter" valueSkill={95} />
          <Skills skillName="Typescript" valueSkill={65} />
          <Skills skillName="Javascript" valueSkill={65} />
          <Skills skillName="Python" valueSkill={55} />
          <Skills skillName="C++" valueSkill={40} />
        </div>
      </div>
      <div className="tablet:w-[100%] flex flex-col gap-5 mobile:w-[100%]">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Extras Skills</p>
          <Skills skillName="Rest API" valueSkill={90} />
          <Skills skillName="GraphQL API" valueSkill={50} />
          <Skills skillName="XML (Native)" valueSkill={70} />
          <Skills skillName="Jetpact Compose (Native)" valueSkill={80} />
          <Skills skillName="MVVM/MVC (Cross Platform)" valueSkill={80} />
          <Skills skillName="GetX (Flutter)" valueSkill={70} />
          <Skills skillName="Provider (Flutter)" valueSkill={70} />
          <Skills
            skillName="Tailwind CSS (Javascript / Typescript)"
            valueSkill={60}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Reverse Engineer Skills</p>
          <Skills skillName="Java Assembly" valueSkill={40} />
          <Skills skillName="MITM" valueSkill={30} />
        </div>
      </div>
    </motion.div>
  );
};

const FrameworkList = ({ className }: { className: string }) => {
  return <Framework className={className} />;
};

const TechnologiesList = ({ className }: { className: string }) => {
  return <Technologies className={className} />;
};
