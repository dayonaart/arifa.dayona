export default function Contact() {
  return (
    <div className="flex tablet:flex-row tablet:items-start flex-col items-center gap-10 justify-center content-center w-[100%] h-[100%]">
      <div className="flex flex-col gap-2 mobile:w-[100%] tablet:w-[60%] laptop:w-[50%]">
        <input
          type="text"
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight "
          placeholder="Your Name"
        ></input>
        <input
          type="email"
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight"
          placeholder="Email"
        ></input>
        <textarea
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight"
          placeholder="Message"
          rows={5}
        ></textarea>
      </div>
      <InfoList />
    </div>
  );
}

const InfoList = () => {
  return (
    <ul className="flex flex-col">
      <li className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="">Address</h3>
          <p className="">Ds.Lempongsari,</p>
          <p className="">Kec.Kaliwiro, Kab.Wonosobo</p>
        </div>
      </li>

      <li className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            <path d="M15 7a2 2 0 0 1 2 2"></path>
            <path d="M15 3a6 6 0 0 1 6 6"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="">Contact</h3>
          <p className="">Mobile: +6285-163-054-352</p>
          <p className="">Mail: arifa.dayona@gmail.com</p>
        </div>
      </li>
      <li className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 7v5l3 3"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Working hours
          </h3>
          <p className="">Monday - Friday: 09:00 - 17:00</p>
        </div>
      </li>
    </ul>
  );
};
