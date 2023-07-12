import MeasurementDataCard from '@/Components/Cards/MeasurementDataCard';
import { asset } from '@/Helper/document_file';
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Children, Measurement } from '@/types';
import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import moment from 'moment';
import { useMemo, useState } from 'react';
import ReactLoading from 'react-loading';

interface ChildrenWithLatestMeasurement extends Children {
    measurements: Measurement[]
}

interface Props {
    ACCESS_TOKEN: string,
    CHATGPT_PROXY_URL: string
    child: ChildrenWithLatestMeasurement
}

const AskGrowth = ({ ACCESS_TOKEN, CHATGPT_PROXY_URL, child }: Props) => {

    const totalAgeDays = moment().diff(child.date_of_birth, 'days');
    const childAgeObj = useMemo(() => {
        return {
            years: Math.floor(totalAgeDays / 365),
            months: Math.floor((totalAgeDays % 365) / 30)
        }
    }, []);

    const [formState, setFormState] = useState({
        prompt: `Anak dengan nama ${child.name} berumur ${childAgeObj.years} Tahun ${childAgeObj.months} Bulan, memiliki tinggi badan ${child.measurements[0].height} cm, berat badan ${child.measurements[0].weight} kg, dan lingkar kepala ${child.measurements[0].head_circumference} cm. Apakah pertumbuhan anak saya normal?`,
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
        const response = await api.sendMessage("Anggaplah Dirimu sebagai orang yang bernama Ansel, Jawab Dalam Bahasa Indonesia Mudah Dipahami\n\n" + formState.prompt).then((res) => {
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

    // const api = new ChatGPTUnofficialProxyAPI({
    //     accessToken: ACCESS_TOKEN,
    //     apiReverseProxyUrl: CHATGPT_PROXY_URL,
    // });
    // const submitHandler = async () => {
    //     setIsAsking(true);
    //     const response = await api.sendMessage("Anggaplah Dirimu sebagai orang yang bernama Ansel, Jawab Dalam Bahasa Indonesia\n\n" + formState.prompt).then((res) => {
    //         console.log(res);
    //         setFormState({
    //             ...formState,
    //             answer: res.text
    //         });
    //         console.log({ response });
    //     }).catch(err => {
    //         console.log({ err })
    //     });
    //     setIsAsking(false);
    // };

    return (
        <DashboardLayout>
            <div className="text-3xl font-bold">Analisis Pertumbuhan</div>
            <div className="-mt-8 mb-2">
                <MeasurementDataCard
                    measurement={child.measurements[0]}
                    childId={child.id}
                    display={{
                        allData: false,
                        analysis: false,
                        headerText: false,
                    }}
                />
            </div>
            <div className="flex flex-col gap-5 mt-2 p-4">
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

                <div className="flex flex-row gap-4 items-center w-full">
                    <div className="flex items-center w-20 h-24">

                        <div className="relative w-[72px] h-[72px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-20 h-20 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <p className='font-bold'>Anda :</p>
                        <textarea
                            className="mt-1 w-full p-2 resize-y rounded-lg"
                            name="prompt"
                            id="prompt"
                            value={formState.prompt}
                            onChange={(e) => setFormState({ ...formState, prompt: e.target.value })}
                            placeholder='Tulis pertanyaanmu di sini...'
                        />
                    </div>
                </div>
                <button
                    onClick={submitHandler}
                    className="bg-yellow-500 text-white hover:bg-yellow-600 py-2 w-full mt-4 rounded-lg text-md font-semibold mx-auto">
                    Submit
                </button>
            </div>
            {/* <form className="flex flex-col gap-5">
                <div className="flex gap-3">
                    <label htmlFor="prompt" className="text-white">Prompt</label>
                    <textarea
                        className="mt-1 block w-full p-2 resize-y"
                        name="prompt"
                        id="prompt"
                        value={formState.prompt}
                        onChange={(e) => setFormState({ ...formState, prompt: e.target.value })}
                    />
                </div>
                {!isAsking ? (
                    <div className="flex gap-3">
                        <label htmlFor="prompt" className="text-white ">Answer</label>
                        <textarea
                            className="mt-1 block w-full p-2 resize-y h-full bg-white"
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
            <div className="flex justify-center mt-5">
                <button
                    // onClick={submitHandler}
                    className="bg-yellow-500 text-white hover:bg-yellow-600 py-3 px-5 rounded-lg text-md font-semibold m-5 mt-10 w-1/2">
                    Submit
                </button>

            </div> */}
        </DashboardLayout>
    )
}

export default AskGrowth;
