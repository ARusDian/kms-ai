import { asset } from '@/Helper/document_file';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react';
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
  const [isError, setIsError] = useState(false);

  const api = new ChatGPTUnofficialProxyAPI({
      accessToken: ACCESS_TOKEN,
      apiReverseProxyUrl: CHATGPT_PROXY_URL,
  });
  const submitHandler = async () => {
    setIsError(true);
    setIsAsking(false);
    const response = await api.sendMessage("Anggaplah Dirimu sebagai orang yang bernama Ansel, Jawab Dalam Bahasa Indonesia\n\n" + formState.prompt).then((res) => {
        console.log(res);
        setFormState({
            ...formState,
            answer: res.text
        });
        console.log({ response });
    }).catch(err => {
        setIsError(true);
        console.log({ err })
    });
  };

  return (
    <DashboardLayout>
      <Head title='Tanya Ansel' />
      <div className="flex flex-row gap-4 items-center">

        {/* <img src={asset('root', 'assets/logo-ansel-crop.png')} className='h-24' /> */}
        <div className="text-3xl font-bold font-sofia mb-4">Tanya ANSEL</div>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        {!isAsking ? (
          <div className="flex flex-row gap-4 w-full">
            <img src={asset('root', 'assets/logo-ansel-crop.png')} className='h-24 w-20' />
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row gap-4 items-end">
                <p className='font-bold'>Ansel :</p>
              </div>
              <textarea
                className="mt-1 block w-full p-2 resize-y h-full bg-white rounded-lg"
                name="answer"
                id="answer"
                disabled
                value={formState.answer}
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-black text-lg flex flex-col mx-auto gap-3">
            <div className='flex justify-center'>
              <ReactLoading color="#51B3AA" type='spin' />
            </div>
            <p>Ansel Sedang Berpikir</p>
            <p>Tunggu Ya 😉...</p>
          </div>
        )}

        {isError && (
          <div className="text-center text-red-500 text-lg flex flex-col mx-auto gap-3">
            <p>Maaf, Ansel Sedang Sakit</p>
            <p>Coba Lagi Nanti Ya 🤧...</p>
          </div>
        )}

        <div className="flex flex-row gap-4 items-center w-full">
          <div className="flex items-center w-20 h-24">
            <button
              onClick={submitHandler}
              className="bg-yellow-500 text-white hover:bg-yellow-600 py-2 w-full mt-4 rounded-lg text-md font-semibold mx-auto">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-1 w-full">
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
        </div>
      </div>

    </DashboardLayout>
  )
}

export default Index
