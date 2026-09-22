import SuggestedUserClient from "@/components/features/Main/(SuggestedUser)/SuggestedUserClient";
import MessageButtonClient from "@/components/features/Main/MessageButton/MessageButtonClient";
import Navbar from "@/components/layouts/Navbar";

function MainPage() {
  return (
    <main className="h-screen w-screen grid grid-cols-[13%_40%_20%_17%] gap-10">
      <Navbar />

      <section className="border"></section>
      <section className="">
        <SuggestedUserClient />
      </section>
      <MessageButtonClient />
    </main>
  );
}

export default MainPage;
