import "./Home.css";
import reasonData from "../../../data/reason.json";
import mainData from "../../../data/mainData.json";
import { useState } from "react";
import { useEffect } from "react";
import outputOne from "../../../data/outputDataOne.json";

const Home = () => {
    const [reason, setReason] = useState([]);
    const [inputData, setInputData] = useState();
    const [isDisabled, setIsDisabled] = useState(false);
    const getMainData = [];
    // collect data
    const [collectData, setCollectData] = useState([]);

    useEffect(() => {
        const findData = mainData.filter((data) => data.name === inputData);
        findData.map((item) => setReason(item.data));
    }, [inputData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getMainData.length < 4) {
            alert("All Field Should Be Required");
        } else {
            console.log(getMainData);
            setIsDisabled(true);

            if (getMainData[0] === "রাগী প্রকৃতির মানুষ") {
                setCollectData(outputOne);
            } else {
                console.log("norom");
            }
        }
    };

    // Try Again Button

    const tryAgainHandler = () => {
        window.location.reload(true);
    }


    return (
        <div className="app-container">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">
                            স্বাগতম ওপেন মাইন্ড ওয়েব অ্যাপে
                        </h1>
                        <select
                            disabled={isDisabled}
                            onChange={(e) => setInputData(e.target.value)}
                            className="select select-secondary w-full max-w-xs"
                        >
                            <option disabled selected>
                                আপনি কি ধরণের অনুষ্টানে যেতে চান ?
                            </option>
                            {reasonData.map((item, i) => {
                                return (
                                    <option value={item} key={i}>
                                        {item}
                                    </option>
                                );
                            })}
                        </select>
                        {/* Reason Wise Question Set */}
                        <form onSubmit={handleSubmit}>
                            {reason.map((question, i) => {
                                return (
                                    <select
                                        disabled={isDisabled}
                                        key={i}
                                        onChange={(e) => getMainData.push(e.target.value)}
                                        className="select select-secondary w-full max-w-xs"
                                        required
                                    >
                                        <option selected>{question.question}</option>
                                        {question.option.map((item, i) => {
                                            return (
                                                <option required value={item} key={i}>
                                                    {item}
                                                </option>
                                            );
                                        })}
                                    </select>
                                );
                            })}
                            {reason.length > 0 ? (
                                <button
                                    disabled={isDisabled}
                                    className="btn btn-secondary mt-5"
                                >
                                    Submit
                                </button>
                            ) : (
                                ""
                            )}
                        </form>
                    </div>
                </div>
            </div>
            {/* show Output */}
            <div className="main-container">
                <div className="output-container">
                    {collectData.map((item, i) => {
                        console.log(item)
                        return (
                            <div key={i} className="">
                                {/* Cloth Details */}
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={item.img} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.title} !</h2>
                                        <p>{item.des}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline py-6 px-4 bg-[cornsilk]">{item.others}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {
                    collectData.length > 0 ?
                        <center>
                            <button
                                onClick={tryAgainHandler}
                                className="btn btn-secondary mt-5"
                            >
                                Try Again
                            </button>
                        </center>
                        :
                        ''
                }

            </div>
        </div >
    );
};

export default Home;
