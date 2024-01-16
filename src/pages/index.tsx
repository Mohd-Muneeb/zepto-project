import Head from "next/head";
import { useState } from "react";
import Autocomplete from "~/components/Autocomplete";
import { OptionType } from "~/types";

export default function Home() {
  const [options, setOptions] = useState<string[]>(["qweqw"]);

  const [inputText, setInputText] = useState<string>("");

  const inputOptions: OptionType[] = [
    {
      label: "Muneeb",
      value: "qweqw",
      text: "mohdmuneeb1307@gmail.com",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      label: "Mal",
      value: "qweqwasdas",
      text: "mohdmuneeb1307@gmail.com",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <>
      <Head>
        <title>Zepto Project</title>
      </Head>
      <main className="w-[100vw] py-12 text-center">
        <h1>Please select the user here</h1>
        <br />
        <div className="flex w-full items-center justify-center">
          <Autocomplete
            value={options}
            onChange={setOptions}
            inputOptions={inputOptions}
            //Activate useDispatch hook here if needed, feel free to connect with me to know my prespective about use dispatch
            onTextChange={setInputText}
            placeholder="Enter username here"
          />
        </div>
      </main>
    </>
  );
}
