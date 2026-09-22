import { MdOutlineGroup } from "react-icons/md";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function SuggestedUserClient() {
  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-md font-semibold tracking-wide">
          Suggested for you
        </h3>

        <Button variant="link" className="cursor-pointer text-sm text-zinc-500">
          See all
        </Button>
      </div>

      <div className="p-9 flex flex-col items-center text-center">
        <MdOutlineGroup className="h-15 w-15 text-zinc-400" />
        <h2 className="mt-2 text-2xl font-bold">No Users Found</h2>
        <p className="mt-2 text-sm text-zinc-500">
          We could not find any new people to connect with right now.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden border rounded-full">
              <Image
                src="/images/logo/logo.png"
                alt="User Name"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <Button variant="link" className="cursor-pointer p-0 text-sm">
                User Name
              </Button>
              <p className="text-xs text-gray-500">Profession</p>
            </div>
          </div>

          <button className="ml-3 flex cursor-pointer text-sm text-(--brand-blue)">
            Connect
          </button>
        </div>
      </div>
    </Card>
  );
}

export default SuggestedUserClient;
