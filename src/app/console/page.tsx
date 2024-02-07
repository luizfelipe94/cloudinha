import { Card } from "@/components/card";
import { FaDatabase } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { PiPinwheelDuotone } from "react-icons/pi";
import { SiSparkar } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Console() {

  return (
    <div className="min-h-[calc(100vh-56px)]">
      <div className="flex flex-col mx-52 gap-8">
        <div className="flex flex-row justify-between mt-10">
          <div className="text-2xl">Hello, Luiz</div>
          <div className="text-xl"><span>0</span> Tickets</div>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-4">
            <Card
              title="Services"
            >
              <div className="grid grid-cols-3 gap-6 p-6">
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><TbApi /></span>
                  API Gateway
                </div>
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><FaDatabase /></span>
                  Databases
                </div>
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><PiPinwheelDuotone /></span>
                  ELT Jobs
                </div>
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><GiBrain /></span>
                  Generative AI
                </div>
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><MdMonitorHeart /></span>
                  Monitoring
                </div>
                <div className="flex flex-row w-full gap-4 justify-center items-center">
                  <span><SiSparkar /></span>
                  Spark as a Service
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <Card
              title="News"
            />
          </div>
          <div className="col-span-3">
            <Card
              title="Costs"
            />
          </div>
          <div className="col-span-3">
            <Card
              title="Alerts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
