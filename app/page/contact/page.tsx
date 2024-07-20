"use client";

import { MY_CONTACT } from "@/constant/constant";
import { RequestBody, sentMail } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { LocateFixedIcon } from "lucide-react";
import { useState } from "react";

async function sendingMail(payload: RequestBody) {
  await sentMail(payload);
}
export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [hasSent, setHasSent] = useState(false);
  return (
    <div className="flex laptop:hidden mobile:flex-col justify-center items-center gap-10 ">
      {hasSent && <Loading />}
      <div className="flex flex-col gap-2 w-full">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight"
          placeholder="Nama"
        ></input>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight"
          placeholder="Perusahaan"
        ></input>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex bg-primary text-white border border-lime rounded py-3 px-4 leading-tight"
          placeholder="Pesan"
          rows={5}
        ></textarea>
        <div
          className="border rounded-md text-center py-2 cursor-pointer"
          onClick={() => {
            if (!name) {
              alert("Pastikan Nama telah diisi");
              return;
            }
            if (!company) {
              alert("Pastikan Perusahaan telah diisi");
              return;
            }
            if (!message) {
              alert("Pastikan Pesan telah diisi");
              return;
            }
            setHasSent(true);
            const payload = {
              from: name,
              company: company,
              message: message,
            };
            sendingMail(payload).then(() => {
              setName("");
              setCompany("");
              setMessage("");
              setHasSent(false);
            });
          }}
        >
          <h1>Kirim</h1>
        </div>
      </div>
      <Info />
    </div>
  );
}

const Info = () => {
  return (
    <ul className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <MdAlternateEmail size={40} />
        <li className="text-2xl text-wrap">{MY_CONTACT.email}</li>
      </div>
      <div className="flex flex-row gap-2">
        <FaWhatsapp size={40} />
        <li className="text-2xl">{MY_CONTACT.phone}</li>
      </div>
      <div className="flex flex-row gap-2">
        <LocateFixedIcon size={40} />
        <li className="text-2xl">{MY_CONTACT.location}</li>
      </div>
    </ul>
  );
};

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-cyan"></div>
    </div>
  );
};
