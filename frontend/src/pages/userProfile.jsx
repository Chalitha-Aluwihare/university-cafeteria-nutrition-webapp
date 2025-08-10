import React from "react";
import Footer from "../components/footer";
import bgImage from "../assets/userProfile/personalized-nurtrition-and-diet.png"; // update with your chosen image
import { useState } from "react";

function UserProfile() {

    const [progress, setProgress] = useState(-1);

    const nextProgress = () => {
        setProgress(progress + 1)
    }

    const prevProgress = () => {
        if (progress != -1) {
            setProgress(progress - 1)
        }
    }

    const [gender, setGender] = useState("");

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    const [activity, setActivity] = useState("");

    const handleChangeActivity = (e) => {
        setActivity(e.target.value);
    };
    return (
        <>
            <div className="pt-20 px-30">


                {/* Main section with background image */}
                <div>

                    <div className="relative z-10  bg-opacity-80 rounded-2xl p-6 h-full flex flex-col">
                        {[0, 1, 2, 3].includes(progress) &&
                            <div>

                                {/* Progress bar */}
                                <div className="w-full rounded-full h-3 mb-6 flex gap-3">
                                    <div className={`bg-[#4CCF7E] h-3 rounded-full w-1/4 ${progress === 0 || progress === 1 || progress === 2 || progress === 3 || progress === 4
                                        ? 'bg-[#4CCF7E]'
                                        : 'bg-[#b7b7b7]'
                                        }`}></div>
                                    <div className={`bg-[#4CCF7E] h-3 rounded-full w-1/4 ${progress === 1 || progress === 2 || progress === 3 || progress === 4
                                        ? 'bg-[#4CCF7E]'
                                        : 'bg-[#b7b7b7]'
                                        }`}></div>
                                    <div className={`bg-[#4CCF7E] h-3 rounded-full w-1/4 ${progress === 2 || progress === 3 || progress === 4
                                        ? 'bg-[#4CCF7E]'
                                        : 'bg-[#b7b7b7]'
                                        }`}></div>
                                    <div className={`bg-[#4CCF7E] h-3 rounded-full w-1/4 ${progress === 3 || progress === 4
                                        ? 'bg-[#4CCF7E]'
                                        : 'bg-[#b7b7b7]'
                                        }`}></div>
                                </div>

                                {/* Step buttons */}
                                <div className='flex items-center justify-center gap-2'>
                                    <div>
                                        <button
                                            className={`w-[120px] py-2 rounded-full text-xl text-white ${progress === 0 || progress === 1 || progress === 2 || progress === 3 || progress === 4
                                                ? 'bg-[#4CCF7E]'
                                                : 'bg-[#b7b7b7]'
                                                }`}
                                        >

                                            Personal
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className={`w-[120px] py-2 rounded-full text-xl text-white ${progress === 1 || progress === 2 || progress === 3 || progress === 4
                                                ? 'bg-[#4CCF7E]'
                                                : 'bg-[#b7b7b7] '
                                                }`}
                                        >

                                            Activity
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className={`w-[120px] py-2 rounded-full text-xl text-white ${progress === 2 || progress === 3 || progress === 4
                                                ? 'bg-[#4CCF7E]'
                                                : 'bg-[#b7b7b7]'
                                                }`}
                                        >

                                            Health
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className={`w-[120px] py-2 rounded-full text-xl text-white ${progress === 3 || progress === 4
                                                ? 'bg-[#4CCF7E]'
                                                : 'bg-[#b7b7b7]'
                                                }`}
                                        >

                                            Lifestyle
                                        </button>
                                    </div>
                                </div>

                            </div>}



                        {/* Central messaging */}
                        {
                            progress === -1 &&
                            <div className="text-center py-20 flex-grow">
                                <h1 className="text-3xl font-semibold">Create your profile for</h1>
                                <h1 className="text-5xl font-bold">personalized AI food</h1>
                                <h1 className="text-3xl font-bold">recommendations</h1>
                                <button className="bg-[#4CCF7E] px-10 py-3 rounded-full text-2xl text-white font-bold mt-5"
                                    onClick={nextProgress}>
                                    Get Started
                                </button>
                            </div>

                        }

                        {
                            progress === 4 &&
                            <div className="text-center py-20 flex-grow">
                                <h1 className="text-5xl font-bold">Profile Setup Completed</h1>
                                <p className="text-2xl mt-4">You’re all set to get personalized AI food recommendations!</p>
                                <button
                                    className="bg-[#4CCF7E] px-10 py-3 rounded-full text-2xl text-white font-bold mt-5"
                                    onClick={nextProgress}
                                >
                                    Continue
                                </button>
                            </div>


                        }


                        {progress === 0 &&
                            <div className="py-5">
                                <h1 className='text-lg font-semibold mb-2'>Basic Personal Details for Profile Customization</h1>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>


                                        <label className="text-lg">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. W.B.Chalitha"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Aluwihare"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Height</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 130Cm"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Weight</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 56Kg"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Location</label>


                                        <input
                                            type="text"
                                            placeholder="E.g. Kurunegala"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div className=" items-center ">
                                        <label className="text-lg">Gender</label>
                                        <div className="flex gap-3">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={gender === "male"}
                                                    onChange={handleChange}
                                                    className="form-radio text-green-500 w-5 h-5 "
                                                />
                                                <span className="text-gray-700 font-medium">Male</span>
                                            </label>

                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={gender === "female"}
                                                    onChange={handleChange}
                                                    className="form-radio text-green-500 w-5 h-5"
                                                />
                                                <span className="text-gray-700 font-medium">Female</span>
                                            </label>

                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="other"
                                                    checked={gender === "other"}
                                                    onChange={handleChange}
                                                    className="form-radio text-green-500 w-5 h-5"
                                                />
                                                <span className="text-gray-700 font-medium">Other</span>
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        }

                        {progress === 1 &&
                            <div className="py-5">
                                <h1 className='text-lg font-semibold mb-2'>Physical Activity and Lifestyle Information</h1>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="activity" className="text-lg">
                                            Activity Type
                                        </label>
                                        <select
                                            id="activity"
                                            value={activity}
                                            onChange={handleChangeActivity}
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select your main physical activity
                                            </option>
                                            <option value="walking">athletic</option>
                                            <option value="running">Basketball</option>
                                            <option value="gym">Badmintain</option>
                                            <option value="cycling">Cricket</option>
                                            <option value="swimming">Dancing</option>
                                            <option value="swimming">Swimming</option>
                                            <option value="swimming">Tennis</option>
                                            <option value="swimming">Walking</option>
                                            <option value="swimming">Weight Training</option>
                                            <option value="swimming">Yoga</option>

                                        </select>

                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="activity" className="text-lg">
                                            Activity Intensity
                                        </label>
                                        <select
                                            id="activity"
                                            value={activity}
                                            onChange={handleChangeActivity}
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select activity level
                                            </option>
                                            <option value="walking">Low</option>
                                            <option value="running">Moderate</option>
                                            <option value="gym">Hight</option>

                                        </select>

                                    </div>
                                    <div>


                                        <label className="text-lg">Weekly Activity Time</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 60Minits"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Calories Burned</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 250Kcl"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>


                                </div>

                            </div>

                        }

                        {progress === 2 &&
                            <div className="py-5">
                                <h1 className='text-lg font-semibold mb-2'>Health & Body Metrics</h1>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="activity" className="text-lg">
                                            Current Health Conditions
                                        </label>
                                        <select
                                            id="activity"
                                            value={activity}
                                            onChange={handleChangeActivity}
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select your current health conditions
                                            </option>
                                            <option value="walking">Diabetes</option>
                                            <option value="running">Hypertension</option>
                                            <option value="gym">Asthma</option>
                                            <option value="cycling">None</option>


                                        </select>

                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="activity" className="text-lg">
                                            Smoking Status
                                        </label>
                                        <select
                                            id="activity"
                                            value={activity}
                                            onChange={handleChangeActivity}
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select Smoking Status
                                            </option>
                                            <option value="walking">Yes</option>
                                            <option value="running">No</option>
                                            <option value="gym">Occasionally</option>

                                        </select>

                                    </div>
                                    <div>


                                        <label className="text-lg">Blood Pressure</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 72.9"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Heart Rate</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 69.5"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">BMI</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 19.6"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>


                                        <label className="text-lg">Body Fat</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 28.5%"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>


                                </div>

                            </div>

                        }
                        {progress === 3 &&
                            <div className="py-5">
                                <h1 className='text-lg font-semibold mb-2'>Lifestyle & Health History</h1>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>


                                        <label className="text-lg">Daily Calorie Target (optional if AI calculates)</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 72.9"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="activity" className="text-lg">
                                            Macronutrient Focus
                                        </label>
                                        <select
                                            id="activity"
                                            value={activity}
                                            onChange={handleChangeActivity}
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select Smoking Status
                                            </option>
                                            <option value="walking">Balanced</option>
                                            <option value="running">High Protein</option>
                                            <option value="gym">Low Carb</option>
                                            <option value="gym">Low Fat</option>


                                        </select>

                                    </div>




                                </div>

                            </div>

                        }

                        {/* Navigation buttons */}
                        {[0, 1, 2, 3].includes(progress) &&

                            <div className="flex items-center justify-between mt-auto">
                                <button className="bg-[#dadada] px-10 py-3 rounded-full text-xl" onClick={prevProgress}>
                                    Prev
                                </button>
                                <button className="bg-[#4CCF7E] px-10 py-3 rounded-full text-xl text-white " onClick={nextProgress}>
                                    Next
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserProfile;
