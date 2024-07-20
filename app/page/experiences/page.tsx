"use client";

import {
  ABOUT_ME,
  MY_CONTACT,
  MY_EDUCATION,
  PROFILE_DESCRIPTION,
  REPOSITORIES_EXP,
  WORK_EXPERIENCES,
} from "@/constant/constant";
import { openLink } from "@/lib/utils";
import { useInView, Variants, motion } from "framer-motion";
import { LocateFixedIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Experiences() {
  return (
    <div className="">
      <Mobile />
      <Desktop />
    </div>
  );
}

const Mobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const staggerVariant: Variants = {
    v: {
      opacity: isInView ? 1 : 0,
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
    v: { x: isInView ? -10 : 0, opacity: isInView ? 1 : 0 },
    e: { x: isInView ? -10 : 0, opacity: isInView ? 1 : 0 },
  };
  return (
    <section ref={ref} className="tablet:hidden ml-2">
      <motion.ul
        variants={staggerVariant}
        animate="v"
        initial="e"
        exit="e"
        className="flex flex-col list-disc marker:text-lime gap-4 text-[10px]"
      >
        {/* PROFILE */}
        <ProfileDescription
          className="flex flex-col gap-4 text-justify"
          itemStaggerVariant={itemStaggerVariant}
        />
        {/* ABOUT */}
        <AboutMe
          className="flex flex-col gap-4 text-justify"
          itemStaggerVariant={itemStaggerVariant}
        />
        {/* EXPERIENCES */}
        <WorkExperiences
          className="flex flex-col gap-5"
          itemStaggerVariant={itemStaggerVariant}
          isGrid={false}
        />
        {/* REPOSITORIES */}
        <Repositories
          className="flex flex-col gap-5"
          itemStaggerVariant={itemStaggerVariant}
          isGrid={false}
        />
        {/* EDUCATION */}
        <Education
          className="flex flex-col gap-4"
          itemStaggerVariant={itemStaggerVariant}
        />
        {/* CONTACT */}
        <Contact
          className="flex flex-col gap-4"
          itemStaggerVariant={itemStaggerVariant}
        />
      </motion.ul>
    </section>
  );
};

const Desktop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const staggerVariant: Variants = {
    v: {
      opacity: isInView ? 1 : 0,
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
    v: { x: isInView ? -10 : 0, opacity: isInView ? 1 : 0 },
    e: { x: isInView ? -10 : 0, opacity: isInView ? 1 : 0 },
  };
  return (
    <section ref={ref} className="mobile:hidden tablet:flex ml-8">
      <motion.ul
        variants={staggerVariant}
        animate="v"
        initial="e"
        exit="e"
        className="flex flex-col list-disc marker:text-lime gap-4 tablet:text-[11px] laptop:text-[12px]"
      >
        <div className="tablet:flex tablet:flex-col tablet:gap-4 laptop:grid laptop:grid-cols-2 laptop:gap-10">
          {/* PROFILE */}
          <ProfileDescription
            className="flex flex-col gap-4 text-justify"
            itemStaggerVariant={itemStaggerVariant}
          />
          {/* ABOUT */}
          <AboutMe
            className="flex flex-col gap-4  text-justify"
            itemStaggerVariant={itemStaggerVariant}
          />
        </div>
        {/* EXPERIENCES */}
        <WorkExperiences
          className="flex flex-col gap-5"
          itemStaggerVariant={itemStaggerVariant}
          isGrid={true}
        />
        {/* REPOSITORIES */}
        <Repositories
          className="flex flex-col gap-5"
          itemStaggerVariant={itemStaggerVariant}
          isGrid={true}
        />
        <div className="tablet:flex tablet:flex-col tablet:gap-4 laptop:grid laptop:grid-cols-2 laptop:gap-10">
          {/* EDUCATION */}
          <Education
            className="flex flex-col gap-4"
            itemStaggerVariant={itemStaggerVariant}
          />
          {/* CONTACT */}
          <Contact
            className="flex flex-col gap-4"
            itemStaggerVariant={itemStaggerVariant}
          />
        </div>
      </motion.ul>
    </section>
  );
};

const ProfileDescription = ({
  itemStaggerVariant,
  className,
}: {
  itemStaggerVariant: Variants;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <motion.h1 variants={itemStaggerVariant} className="text-3xl">
          PROFILE
        </motion.h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
      </div>
      {PROFILE_DESCRIPTION.map((e, i) => (
        <motion.li key={i} variants={itemStaggerVariant}>
          {e}
        </motion.li>
      ))}
    </div>
  );
};

const AboutMe = ({
  itemStaggerVariant,
  className,
}: {
  itemStaggerVariant: Variants;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <motion.h1 variants={itemStaggerVariant} className="text-3xl">
          ABOUT ME
        </motion.h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
      </div>
      {ABOUT_ME.map((e, i) => (
        <motion.li key={i} variants={itemStaggerVariant}>
          {e}
        </motion.li>
      ))}
    </div>
  );
};
const WorkExperiences = ({
  itemStaggerVariant,
  className,
  isGrid,
}: {
  itemStaggerVariant: Variants;
  className: string;
  isGrid: boolean;
}) => {
  return (
    <motion.div variants={itemStaggerVariant} className={className}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">EXPERIENCES</h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
      </div>
      <div
        className={`${isGrid ? "grid grid-cols-2" : "flex flex-col"} gap-10`}
      >
        {WORK_EXPERIENCES.map((e, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="w-[40px] h-[40px] border  border-dashed border-white p-2 rounded-full flex items-center justify-center">
                <h1 className="text-xl font-extrabold">{i + 1}</h1>
              </div>
              <Image
                src={e.logo}
                height={70}
                width={70}
                alt={e.logo}
                className="border rounded-full p-2 bg-white"
              ></Image>
            </div>
            <h1 className="text-2xl font-semibold">{e.ptName}</h1>
            <li>{e.role}</li>
            <li>{e.date}</li>
            <li className="text-justify">{e.description}</li>
            <li
              className="text-lime cursor-pointer"
              onClick={() => openLink(e.website)}
            >
              {e.website.replace("https://", "")}
            </li>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Repositories = ({
  itemStaggerVariant,
  className,
  isGrid,
}: {
  itemStaggerVariant: Variants;
  className: string;
  isGrid: boolean;
}) => {
  return (
    <motion.div variants={itemStaggerVariant} className={className}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">DEMO APP / DEVELOPMET / PUBLISHED</h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
      </div>
      <div
        className={`${isGrid ? "grid grid-cols-2" : "flex flex-col"} gap-10`}
      >
        {REPOSITORIES_EXP.map((e, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-[40px] h-[40px] border  border-dashed border-white p-2 rounded-full flex items-center justify-center">
                <h1 className="text-xl font-extrabold">{i + 1}</h1>
              </div>
              <h1 className="text-xl font-semibold">{e.name}</h1>
            </div>
            <li>{e.platform}</li>
            <li>{e.desc}</li>
            <ul className="list-disc marker:text-cyan ml-4">
              {e.features?.map((f, fI) => (
                <li key={fI}>{f}</li>
              ))}
            </ul>
            <li
              className="cursor-pointer text-lime"
              onClick={() => openLink(e.link)}
            >
              {e.link}
            </li>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Contact = ({
  itemStaggerVariant,
  className,
}: {
  itemStaggerVariant: Variants;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <motion.h1 variants={itemStaggerVariant} className="text-3xl">
          CONTACT
        </motion.h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
        <motion.li variants={itemStaggerVariant}>
          <div className="flex flex-row items-center gap-2">
            <FaWhatsapp size={20} />
            <p
              className="text-cyan cursor-pointer"
              onClick={() => openLink(MY_CONTACT.whatsapp_link)}
            >
              {MY_CONTACT.phone}
            </p>
          </div>
        </motion.li>
        <motion.li variants={itemStaggerVariant}>
          <div className="flex flex-row items-center gap-2">
            <MdAlternateEmail size={20} />
            <p
              className="text-cyan cursor-pointer"
              onClick={() => openLink(MY_CONTACT.email_link)}
            >
              {MY_CONTACT.email}
            </p>
          </div>
        </motion.li>
        <motion.li variants={itemStaggerVariant}>
          <div className="flex flex-row items-center gap-2">
            <LocateFixedIcon size={20} />
            <p
              className="text-cyan cursor-pointer"
              onClick={() => openLink(MY_CONTACT.location_link)}
            >
              {MY_CONTACT.location}
            </p>
          </div>
        </motion.li>
      </div>
    </div>
  );
};

const Education = ({
  itemStaggerVariant,
  className,
}: {
  itemStaggerVariant: Variants;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <motion.h1 variants={itemStaggerVariant} className="text-3xl">
          EDUCATION
        </motion.h1>
        <Divider itemStaggerVariant={itemStaggerVariant} />
        <motion.li variants={itemStaggerVariant}>
          {MY_EDUCATION.school}
        </motion.li>
        <motion.li variants={itemStaggerVariant}>{MY_EDUCATION.date}</motion.li>
      </div>
    </div>
  );
};

const Divider = ({ itemStaggerVariant }: { itemStaggerVariant: Variants }) => {
  return (
    <motion.div
      variants={itemStaggerVariant}
      className="border border-lime w-full"
    ></motion.div>
  );
};
