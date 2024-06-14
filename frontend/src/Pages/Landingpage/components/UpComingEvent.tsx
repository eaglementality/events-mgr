import { CustomCard } from "../../../templates/CustomCard";
export const UpComingEvent = () => {
  return (
    <main className="w-full h-full">
      <section className="grid justify-center items-center px-48">
        <div className="flex justify-center px-12 py-8 z-50 -my-[10%] space-x-16 rounded-lg bg-black text-white">
          <div>
            <div className="text-sm">{`Search`}</div>
            <input
              className="text-white  border-b-white border-t-black border-l-black border-r-black bg-black"
              type="text"
            />
          </div>
          <div>
            <div className="text-sm">{`Place`}</div>
            <input
              className="text-white  border-b-white border-t-black border-l-black border-r-black bg-black"
              type="text"
            />
          </div>
          <div>
            <div className="text-sm">{`When`}</div>
            <input
              className="text-white  border-b-white border-t-black border-l-black border-r-black bg-black"
              type="date"
            />
          </div>
        </div>
        <div className="mt-[208px] flex justify-between">
          <h3 className="font-sans text-4xl">{"Upcoming Events"}</h3>
          <div className="flex space-x-5">
            <select className="border border-white">
              <option>{`Weekdays`}</option>
            </select>
            <select className="border border-white">
              <option>{`Event Type`}</option>
            </select>
            <select className="border border-white">
              <option>{`Any Category`}</option>
            </select>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-4">
         <CustomCard/>
         <CustomCard/>
         <CustomCard/>
         <CustomCard/>
         <CustomCard/>
         <CustomCard/>
        </div>
      </section>
    </main>
  );
};
