import './Home.css'
import reasonData from '../../../data/reason.json'
import mainData from '../../../data/mainData.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { ragiData } from '../../../data/outputData';
const Home = () => {
    const [reason, setReason] = useState([])
    const [inputData, setInputData] = useState()
    const getMainData = [];
    // collect data
    const [collectData, setCollectData] = useState([])

    useEffect(() => {
        const findData = mainData.filter(data => data.name === inputData)
        findData.map(item => setReason(item.data))
    }, [inputData])



    const handleSubmit = () => {

        if (getMainData[0] === 'রাগী প্রকৃতির মানুষ') {
            setCollectData(ragiData)
        } else {
            console.log('norom');
        }

    }

    console.log(collectData);



    return (
        <div className='app-container'>
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">
                            স্বাগতম ওপেন মাইন্ড ওয়েব অ্যাপে
                        </h1>
                        <select onChange={(e) => setInputData(e.target.value)} className="select select-secondary w-full max-w-xs">
                            <option disabled selected>আপনি কি ধরণের অনুষ্টানে যেতে চান ?</option>
                            {
                                reasonData.map((item, i) => {
                                    return (
                                        <option value={item} key={i}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        {/* Reason Wise Question Set */}
                        {
                            reason.map((question, i) => {
                                return (
                                    <select key={i} onChange={(e) => getMainData.push(e.target.value)} className="select select-secondary w-full max-w-xs">
                                        <option disabled selected>{question.question}</option>
                                        {
                                            question.option.map((item, i) => {
                                                return (
                                                    <option value={item} key={i}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                )
                            })
                        }
                        {
                            reason.length > 0 ?
                                <button className="btn btn-secondary mt-5" onClick={handleSubmit}>Submit</button>
                                :
                                ''
                        }



                    </div>
                    {/* show Output */}
                    <div>
                        {
                            collectData.map(item => {
                                return (
                                    <img key={item} src={item} alt="" />
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;