import { openLink } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const TECHNOLOGIES_DATA = [
  { name: "XML", link: "https://en.wikipedia.org/wiki/XML" },
  {
    name: "Jetpack Compose",
    link: "https://developer.android.com/develop/ui/compose",
  },
  {
    name: "MVVM",
    link: "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel",
  },
  {
    name: "Coroutines",
    link: "https://developer.android.com/kotlin/coroutines",
  },
  { name: "GetX", link: "https://pub.dev/packages/get" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com/docsinstallation" },
  { name: "React-Redux", link: "https://react-redux.js.org" },
];

export const Technologies = ({ className }: { className?: string }) => {
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
        {TECHNOLOGIES_DATA.map((e, i) => (
          <motion.p
            key={i}
            variants={itemStaggerVariant}
            className="border rounded-md px-2 py-1 hover:text-lime cursor-pointer"
            onClick={() => openLink(e.link)}
          >
            {e.name}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
