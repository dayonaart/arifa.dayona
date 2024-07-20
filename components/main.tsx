import { RootState } from "@/management/store";
import { useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { open } from "@/management/mobile_nav_state";

const navigationLink = [
  { name: "experiences", path: "/page/experiences" },
  { name: "contact", path: "/page/contact" },
];
const navItemVariants: Variants = {
  visible: { x: 0, opacity: 1 },
  exit: { x: -10, opacity: 0 },
};

export default function Main({ children }: { children: ReactNode }) {
  const isNavOpen = useSelector((state: RootState) => state.openNav);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col"
      onClick={() => {
        if (isNavOpen.value) {
          dispatch(open());
        }
      }}
    >
      {/* HEADER NAV */}
      <div className=" bg-primary px-4 py-6">
        <HeaderNav />
      </div>
      {/* CHILDRENS */}
      <div className="bg-black/70 p-8">
        <h1>{children}</h1>
      </div>
    </div>
  );
}

const HeaderNav = () => {
  const path = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNavOpen = useSelector((state: RootState) => state.openNav);
  const dispatch = useDispatch();
  const navVariants: Variants = {
    visible: {
      opacity: isInView ? 1 : 0,
      transition: {
        ease: "linear",
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <section ref={ref}>
      <motion.nav
        variants={navVariants}
        animate="visible"
        initial="exit"
        exit="exit"
        className="flex uppercase justify-between items-center px-4"
      >
        <Link
          key="dayona"
          href="/"
          className={`${
            path == "/" ? "text-lime" : "text-white"
          } text-4xl font-extrabold hover:text-cyan`}
        >
          <motion.p variants={navItemVariants} whileHover={{ scale: 1.1 }}>
            Dayona
          </motion.p>
        </Link>
        <MainNav className="tablet:flex gap-8 mobile:hidden" />
        <div className="tablet:hidden right-10 absolute">
          <BsMenuButtonWideFill
            size={25}
            onClick={() => dispatch(open())}
            className={`${isNavOpen.value ? "text-cyan" : "text-white"}`}
          />
        </div>
        {isNavOpen.value && (
          <MainNav className="tablet:hidden mobile:flex flex-col absolute top-20 right-10 z-30 border rounded-md gap-4 py-4 px-4 bg-primary" />
        )}
      </motion.nav>
    </section>
  );
};

const MainNav = ({ className }: { className: string }) => {
  const path = usePathname();
  return (
    <div className={className}>
      {navigationLink.map((l, i) => (
        <Link
          key={i}
          href={l.path}
          className={`${
            path == l.path ? "text-lime" : "text-white"
          } font-bold hover:text-lime`}
        >
          <motion.p variants={navItemVariants} whileHover={{ scale: 1.1 }}>
            {l.name}
          </motion.p>
        </Link>
      ))}
    </div>
  );
};
