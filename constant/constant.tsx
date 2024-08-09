export const SS_API = process.env.NODE_ENV;
export const PROFILE_DESCRIPTION = [
  "I am capable of working well with new people. I am also known as a good listener, able to grasp the core of the issue and provide the right solution.",
  "I can make quick and accurate decisions, even in critical or high-pressure situations. To me, every task is important. Working on it meticulously and to the best of my ability is my form of responsibility.",
  "I am a creative person who enjoys finding alternative solutions to various problems. I am also open to all possible solutions. Creativity helps me become a good leader because I can anticipate various issues.",
  "I am highly focused on work results, often to the point of being idealistic. However, I can also be realistic when setting targets or goals, always striving to achieve them in a good and efficient manner.",
  "Born in Wonosobo on August 8, 1993, I am someone who is very enthusiastic about everything related to programming and always feels challenged to work on new projects involving Mobile and Web application development.",
];

export const ABOUT_ME = [
  "I am a creative person who enjoys finding alternative solutions to various problems. I am also open to all possible solutions.",
  "I am also open to all possible solutions.",
  "Creativity helps me become a good leader because I can anticipate various issues.",
];

export const MY_CONTACT = {
  email: "arifadayona@gmail.com",
  email_link: "mailto:arifadayona@gmail.com",
  phone: "+6285163054352",
  whatsapp_link: "https://wa.me/+6285163054352",
  location: "Ds.Lempongsari, Kec.Kaliwiro, Kab.Wonosobo",
  location_link: "https://maps.app.goo.gl/uB4hLkzv3MAqL2ns7",
};
export const MY_EDUCATION = {
  school: "SMAN 2 Wonosobo",
  date: "Feb 2007 - Okt 2010",
};
export const WORK_EXPERIENCES = [
  {
    ptName: "PT. Tiki Jalur Nugraha Ekakurir",
    role: "IT Support JNE / IT Support JNE",
    date: "Jan 2017 - Jan 2018",
    description:
      "As an IT Support, I assisted clients in resolving server-side issues, ensuring the smooth operation of JNE's systems.",
    website: "https://www.jne.co.id",
    logo: "/jne.svg",
  },
  {
    ptName: "PT. Cranium Royal Aditama",
    role: "Junior Mobile Developer",
    date: "Mar 2018 - Jan 2020",
    description:
      "Started my career as a Junior Mobile Engineer, handling projects such as Shusitei (a restaurant app) and Kalm/Kalmselor (an online counseling app). Technologies used include Flutter, Java, Firebase, and Push Notification.",
    website: "https://www.cranium.id",
    logo: "/cranium.svg",
  },
  {
    ptName: "PT. Sprout Digital Labs",
    role: "Advance Mobile Developer",
    date: "Jan 2020 - Sep 2020",
    description:
      "As an Advance Mobile Engineer, I managed projects like Indolab (a pharmacy-based app) using technologies such as Flutter, Firebase, Push Notification, State Management, and Map. Additionally, I learned bridging between Flutter and native code.",
    website: "https://sprout.co.id/",
    logo: "/sprout.svg",
  },
  {
    ptName: "PT. Infosys Solusi Terpadu",
    role: "Advance Mobile Developer",
    date: "Nov 2020 - Des 2021",
    description:
      "Held the role of Advance Mobile Engineer, overseeing projects like Kumparan (a news and information app with a chat system) and BSI Mobile Banking. Technologies used include Kotlin, XML, Firebase, and Push Notification.",
    website: "https://www.ist.id",
    logo: "/infosys.svg",
  },
  {
    ptName: "PT. Indocyber Global Technology",
    role: "Senior Mobile Developer",
    date: "Jan 2022 - Jan 2024",
    description:
      "As a Senior Mobile Engineer and Advance Frontend Engineer, I worked on projects such as BNI46 Mobile at the client site in Menara BNI Pejompongan. I developed banking-based libraries or SDKs like EDC and MPOS, gained experience in reverse engineering to find vulnerabilities in mobile apps, and learned about encryption and decryption systems. The technologies used were diverse, including Java, Kotlin, Flutter, and React.",
    website: "https://www.indocyber.co.id",
    logo: "/indocyber.svg",
  },
];

export const REPOSITORIES_EXP = [
  {
    name: "PokeBase",
    platform: "Platform : Android",
    desc: " over a hundreds Pokemon",
    link: "https://github.com/dayonaart/pokebase.git",
    features: [
      "Kotlin",
      "Jetpack Compose",
      "Native Module for http services ( jar )",
      "Mobile Database",
      "Pagination",
      "Dark / Light Mode",
      "Search / Query",
      "Data Table",
    ],
  },
  {
    name: "Logicque",
    platform: "Platform : Android",
    desc: " Chat App",
    link: "https://github.com/dayonaart/logicque.git",
    features: [
      "Kotlin",
      "Jetpack Compose",
      "Native Module for http services ( jar )",
      "Mobile Database ( Room )",
      "Pagination",
      "Dark / Light Mode",
      "Search / Query",
      "Add Fav",
      "Fav Delete",
      "Fav Query",
      "Add Friend",
    ],
  },
  {
    name: "Kalm",
    platform: "Platform : Android & IOS",
    desc: "Online Counseling for user part of Kalmselor",
    link: "https://github.com/dayonaart/kalm-new-null-safety",
    features: [
      "Flutter",
      "GetX",
      "Chat",
      "Database",
      "Videos",
      "News",
      "Gratitude Journal",
      "Firebase",
      "Onesignal",
      "Push Notification",
      "Payment",
    ],
  },

  {
    name: "Kalmselor",
    platform: "Platform : Android & IOS",
    desc: "Online Counseling for Counselor part of Kalm",
    link: "https://github.com/dayonaart/kalmselor",
    features: [
      "Flutter",
      "GetX",
      "Chat",
      "Database",
      "Videos",
      "News",
      "Gratitude Journal",
      "Firebase",
      "Onesignal",
      "Push Notification",
      "Payment",
    ],
  },
  {
    name: "DarkMod",
    platform: "Platform : Android",
    desc: "Modding Android Tools Template Hacking is ilegal,for Education purposed",
    link: "https://github.com/dayonaart/darkmod.git",
    features: ["Java", "C++", "Dump Memory", "Hooking"],
  },
  {
    name: "Smartpost Tool",
    platform: "Platform : Android",
    desc: "Android EDC Tool Adalah SDK Perbankan untuk Mobile EDC",
    link: "https://github.com/dayonaart/smart_pos_tools.git",
    features: [
      "Java",
      "Kotlin",
      "Bind Device",
      "Inject Master Key",
      "Inject Pin Key",
      "Inject Data Key",
      "EMV",
      "Encrypt Using 3DES",
      "Decrypt Using 3DES",
    ],
  },
  {
    name: "Micro Atm Sdk",
    platform: "Platform : Android & IOS",
    desc: "Flutter MPOS Library/SDK untuk Perbankan",
    link: "https://github.com/dayonaart/microatmsdk.git",
    features: [
      "Java",
      "Kotlin",
      "Flutter",
      "Binding Device Using Bluetooth",
      "Bluetooth Finder",
      "Bluetooth Pairing",
      "Bluetooth Connecting",
      "Inject Master Key",
      "Inject Pin Key",
      "Inject Data Key",
      "Encrypt Using 3DES",
      "Decrypt Using 3DES",
      "EMV",
    ],
  },
  {
    name: "Sushitei",
    platform: "Platform : Android",
    desc: "Restorant App",
    link: "https://github.com/dayonaart/sushitei.git",
    features: ["Java", "Order Food", "Apply Voucher"],
  },
  {
    name: "My Portofolio",
    platform: "Platform : Web",
    desc: "My Portofolio Project",
    link: "https://github.com/dayonaart/arifa.dayona",
    features: ["Typescript", "Tailwind CSS"],
  },
];
