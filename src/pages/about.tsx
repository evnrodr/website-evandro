import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "../components/Container";

const About: NextPage = () => {
  return (
    <Container>
      <div className="flex items-center flex-col bg-raisinBlack shadow-lg rounded-lg mt-32 p-4">
        <div className="-mt-28">
          <Image
            src="https://www.github.com/evnrodr.png"
            alt="Evandro Rodrigues"
            width="180px"
            height="180px"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col items-center mt-8">
          <h1 className="text-2xl font-semibold">
            Evandro Rodrigues de Paula Junior
          </h1>
          <h1 className="text-lg mt-2">Software Enginner</h1>
        </div>

        <div className="w-full flex flex-row justify-around mt-16">
          <div className="w-1/3">
            <div className="p-0.5 mb-2 bg-blue-700 rounded flex justify-center items-center">
              <h1 className="text-2xl">Personal</h1>
            </div>

            <div>
              <h1>
                👦 <strong>Age</strong>: 24
              </h1>
              <h1>
                🌎 <strong>Location</strong>: Fortaleza - Ceará | Brazil
              </h1>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-0.5 mb-2 bg-green-700 rounded flex justify-center items-center">
              <h1 className="text-2xl">Skills</h1>
            </div>

            <div>
              <h1>
                <strong>React</strong>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-0 transition "></div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
