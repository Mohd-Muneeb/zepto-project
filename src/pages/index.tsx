import Head from "next/head";
import { useState } from "react";
import Autocomplete from "~/components/Autocomplete";
import { OptionType } from "~/types";

export default function Home() {
  const [options, setOptions] = useState<string[]>(["1"]);
  const [inputText, setInputText] = useState<string>("");

  const inputOptions: OptionType[] = [
    {
      label: "Muneeb",
      value: "1",
      text: "mohdmuneeb1307@gmail.com",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      label: "Mal",
      value: "2",
      text: "mal@gmail.com",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
    },
    {
      label: "John",
      value: "3",
      text: "john@gmail.com",
      image:
        "https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg",
    },
    {
      label: "Elena",
      value: "4",
      text: "elena@gmail.com",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbiU0IAqxPz5B-sfVrFxJWXa6FzMAOR5RbYLZseshAQ&s",
    },

    {
      label: "Tim",
      value: "5",
      text: "tim@gmail.com",
      image:
        "https://lh4.googleusercontent.com/proxy/ZbC8BBfG0fiPuCCxkeSVTYwRgPTv483FUsy4MvI0iNW0_gv9RrHl1wnMOEnLuNBPvSWRY5eFRhzs2Y1rqSMjjX0yUk1I6qy6PHAiTAOT7mFmN-70wfY",
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
