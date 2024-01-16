import Head from "next/head";
import { useState } from "react";
import Autocomplete from "~/components/Autocomplete";
import { inputOptions } from "~/constants";
import { OptionType } from "~/types";

export default function Home() {
  const [options, setOptions] = useState<string[]>(["1"]);
  const [inputText, setInputText] = useState<string>("");

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
