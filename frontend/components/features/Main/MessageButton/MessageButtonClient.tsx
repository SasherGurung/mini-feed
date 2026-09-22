import Image from "next/image";
import React from "react";
import { LuMessageSquareDot } from "react-icons/lu";

function MessageButtonClient() {
  return (
    <section className="border py-10 flex h-full justify-end flex-col items-center">
      <div className="flex items-center justify-between gap-8 px-8 py-3 rounded-full bg-shadow cursor-pointer shadow-xl text-lg font-semibold hover:bg-zinc-100">
        <div className="flex gap-1 items-center">
          <LuMessageSquareDot className="h-6 w-6 font-bold" />
          <p className="">Message</p>
        </div>

        <div>
          <div className="relative h-9 w-9 overflow-hidden border rounded-full">
            <Image
              src="/images/logo/logo.png"
              alt="User Name"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageButtonClient;
