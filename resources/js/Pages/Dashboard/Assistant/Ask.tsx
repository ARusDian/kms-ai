import DashboardLayout from '@/Layouts/DashboardLayout'
import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import { useState } from 'react';
import ReactLoading from 'react-loading';

interface Props {
  ACCESS_TOKEN: string,
  CHATGPT_PROXY_URL: string
}

const Index = ({ ACCESS_TOKEN, CHATGPT_PROXY_URL }: Props) => {

  const [formState, setFormState] = useState({
    prompt: "",
    answer: "Tanya Ansel Apapun!",
    options: [],
  });

  const [isAsking, setIsAsking] = useState(false);

  const api = new ChatGPTUnofficialProxyAPI({
      accessToken: ACCESS_TOKEN,
      apiReverseProxyUrl: CHATGPT_PROXY_URL,
  });
  const submitHandler = async () => {
      setIsAsking(true);
      const response = await api.sendMessage("Anggaplah Dirimu sebagai orang yang bernama Ansel, Jawab Dalam Bahasa Indonesia\n\n" + formState.prompt).then((res) => {
          console.log(res);
          setFormState({
              ...formState,
              answer: res.text
          });
          console.log({ response });
      }).catch(err => {
          console.log({ err })
      });
      setIsAsking(false);
  };

  return (
    <DashboardLayout>
      <div className="text-3xl font-bold font-sofia mb-4">Tanya ANSEL</div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className='font-bold'>Prompt :</p>
          <textarea
            className="mt-1 w-full p-2 resize-y rounded-lg"
            name="prompt"
            id="prompt"
            value={formState.prompt}
            onChange={(e) => setFormState({ ...formState, prompt: e.target.value })}
            placeholder='Tulis Pertanyaanmu Di sini'
          />
        </div>
        {!isAsking ? (
          <div className="flex flex-col gap-1">
            <p className='font-bold'>Ansel :</p>
            <textarea
              className="mt-1 block w-full p-2 resize-y h-full bg-white rounded-lg"
              name="answer"
              id="answer"
              disabled
              value={formState.answer}
            />
          </div>
        ) : (
          <div className="text-center text-black text-lg flex flex-col mx-auto gap-3">
            <div className='flex justify-center'>
              <ReactLoading color="#51B3AA" type='spin' />
            </div>
            Memuat Jawaban....
          </div>
        )}
      </form>
      <div className="flex justify-start">
        <button
          // onClick={submitHandler}
          className="bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 mt-4 rounded-lg text-md font-semibold w-32">
          Submit
        </button>
      </div>

    </DashboardLayout>
  )
}

export default Index
