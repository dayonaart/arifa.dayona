import { openLink } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { FaPython } from "react-icons/fa";
import { RiFlutterFill, RiJavaFill, RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";

const iconClassName = "h-[30px] w-[30px] text-cyan";

const framworkData = [
  {
    icon: <RiJavaFill className={`${iconClassName} cursor-pointer`} />,
    link: "https://developer.android.com/get-started/overview",
  },
  {
    icon: <TbBrandKotlin className={`${iconClassName} cursor-pointer`} />,
    link: "https://developer.android.com/develop/ui/compose",
  },
  {
    icon: <RiFlutterFill className={`${iconClassName} cursor-pointer`} />,
    link: "https://flutter.dev/?gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSf2T9ElOgdycHU1NBmCyO_leGQKKXOK7Ds0HWNXyf0AQv61iKan4ExoCosoQAvD_BwE&gclsrc=aw.ds",
  },
  {
    icon: <RiNextjsFill className={`${iconClassName} cursor-pointer`} />,
    link: "https://nextjs.org/docs",
  },
  {
    icon: <SiJavascript className={`${iconClassName} cursor-pointer`} />,
    link: "https://devdocs.io/javascript",
  },

  {
    icon: <SiTypescript className={`${iconClassName} cursor-pointer`} />,
    link: "https://www.typescriptlang.org",
  },
  {
    icon: <TbBrandCpp className={`${iconClassName} cursor-pointer`} />,
    link: "https://devdocs.io/cpp",
  },
  {
    icon: <FaPython className={`${iconClassName} cursor-pointer`} />,
    link: "https://docs.python.org/",
  },
];
export const Framework = ({ className }: { className?: string }) => {
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
        {framworkData.map((e, i) => (
          <motion.p
            variants={itemStaggerVariant}
            key={i}
            whileHover={{ scale: 1.5 }}
            onClick={() => openLink(e.link)}
          >
            {e.icon}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
