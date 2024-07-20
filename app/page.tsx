"use client";
import { Framework } from "@/components/framework";
import Skills from "@/components/skills";
import SocialMediaAndResume from "@/components/social_media";
import { Technologies } from "@/components/technologies";
import { PROFILE_DESCRIPTION } from "@/constant/constant";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
    </div>
  );
}
const MainHome = () => {
  return (
    <div className="tablet:flex flex-row mobile:hidden">
      <div className="flex flex-col w-[50%] gap-6">
        <Welcome />
        <Description />
        <FrameworkList className="flex flex-row gap-4 flex-wrap" />
        <TechnologiesList className="flex flex-row gap-4 flex-wrap text-[11px]" />
      </div>
      <div className="w-[50%] flex flex-col items-center">
        <MotionProfile />
        <SkillList className="flex flex-col w-[50%]" />
      </div>
    </div>
  );
};

const MobileHome = () => {
  return (
    <div className="mobile:flex flex-col tablet:hidden items-center gap-4">
      <MotionProfile />
      <Welcome />
      <Description />
      <div className=" border-b-2 border-cyan flex w-full">
        Framework And Technologies
      </div>
      <FrameworkList className="flex flex-row gap-2 flex-wrap justify-center" />
      <TechnologiesList className="flex flex-row gap-2 flex-wrap  justify-center text-[10px]" />
      <div className=" border-b-2 border-cyan flex w-full">Skills</div>
      <SkillList className="flex flex-col w-[80%]" />
      <div className=" border-b-2 border-cyan flex w-full" />
    </div>
  );
};
const MotionProfile = () => {
  const imageSize =
    "desktop:h-[200px] desktop:w-[200px] tablet:h-[160px] tablet:w-[160px] mobile:h-[140px] mobile:w-[140px]";

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
        alt="dayona"
        src="/dayona.png"
        priority={false}
        width={200}
        height={200}
        className={`${imageSize} absolute p-2 `}
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
      className="flex flex-col gap-2 list-disc marker:text-lime mobile:text-[12px] laptop:text-[14px] text-justify"
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

const SkillList = ({ className }: { className: string }) => {
  return (
    <motion.div
      variants={containerVariant}
      animate="v"
      initial="e"
      exit="e"
      className={className}
    >
      <Skills skillName="Java" valueSkill={80} />
      <Skills skillName="Kotlin" valueSkill={95} />
      <Skills skillName="Flutter" valueSkill={95} />
      <Skills skillName="Typescript" valueSkill={65} />
      <Skills skillName="Javascript" valueSkill={65} />
      <Skills skillName="Python" valueSkill={55} />
      <Skills skillName="C++" valueSkill={40} />
      <Skills skillName="Java Assembly" valueSkill={40} />
    </motion.div>
  );
};

const FrameworkList = ({ className }: { className: string }) => {
  return <Framework className={className} />;
};

const TechnologiesList = ({ className }: { className: string }) => {
  return <Technologies className={className} />;
};
