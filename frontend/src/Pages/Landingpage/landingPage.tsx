import { HeaderSection } from "./components/HeaderSection";
import { UpComingEvent } from "./components/UpComingEvent";

export const LandingPage = () => {
  return (
    <main className="w-full h-full">
      <HeaderSection/>
      <UpComingEvent/>
    </main>
  );
};
