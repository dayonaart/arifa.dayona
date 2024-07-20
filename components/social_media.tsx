import { openLink } from "@/lib/utils";
import { useInView, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  FiDownload,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

const MEDIA_SOCIAL = [
  { icon: <FiGithub size={25} />, path: "https://github.com/dayonaart" },
  {
    icon: <FiLinkedin size={25} />,
    path: "https://linkedin.com/in/arifa-dayona-49b855194",
  },
  {
    icon: <FiFacebook size={25} />,
    path: "https://www.facebook.com/ariesynven",
  },
  {
    icon: <FiYoutube size={25} />,
    path: "https://www.youtube.com/@dayona2513",
  },
];

const SocialMediaAndResume = ({ className }: { className?: string }) => {
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
    <section ref={ref}>
      <motion.div
        variants={staggerVariant}
        animate="v"
        initial="e"
        exit="e"
        className={className}
      >
        {MEDIA_SOCIAL.map((i) => (
          <motion.div key={i.path} variants={itemStaggerVariant}>
            <Link
              href={i.path}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-full flex items-center hover:bg-cyan hover:text-white hover:transition-all duration-1000 hover:border-cyan/70"
            >
              {i.icon}
            </Link>
          </motion.div>
        ))}
        <motion.button
          variants={itemStaggerVariant}
          className="border rounded-full px-3 py-1 hover:bg-cyan hover:transition-all duration-1000 hover:border-cyan/70"
          onClick={() => openLink("my_resume.pdf")}
        >
          <div className="flex gap-2">
            <p>Resume</p>
            <FiDownload className="text-xl" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SocialMediaAndResume;
