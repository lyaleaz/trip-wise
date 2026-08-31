"use client";

import { useState } from "react";

export default function CreateTrip() {
    const interests = ["Food","Culture","History","Nature","Adventure","Shopping","Art","Sports","Other"];
    const paces =[
        {value: "relaxed", label: "Relaxed"},
        {value: "balanced", label: "Balanced"},
        {value: "packed", label: "Packed"},
    ];
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [travelers, setTravelers] = useState(1);
    const [budget, setBudget] = useState(0);
    const [pace, setPace] = useState("relaxed");
    const [accommodation,setAccommodation] = useState("hotel");
    const accommodations = [
        {value: "hotel", label: "Hotel"},
        {value:"hostel" , label: "Hostel"},
        {value:"apartment" , label: "Apartment"},
        {value:"no-preference" , label: "No Preference"},
    ];
    const [transportation, setTransportation] = useState("public-transit");
    const transportations = [
        { value: "public-transit", label: "Public transit" },
        { value: "rental-car", label: "Rental car" },
        { value: "walking", label: "Walking" },
        { value: "mix", label: "Mix of options" },
    ];
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const toggleInterest = (interest: string, checked: boolean) => {
        if (checked) {
            setSelectedInterests([...selectedInterests, interest]);
        } else {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest));
        }
    };
    
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!destination.trim()){
            alert("Please enter a destination");
            return;
        }
        if(!startDate){
            alert("Please enter a start date.");
            return;
        }
        if(!endDate){
            alert("Please enter a end date.");
            return;
        }
        if(endDate<startDate){
            alert("End date must be after the start ddate.");
            return;
        }
        if(travelers<1){
            alert("Number of travelers must be at least 1");
            return;

        }
        if(budget<0){
            alert("Budget cannot be nagative.");
            return;
        }
        if(selectedInterests.length === 0)
        {
            alert("Please select at least one intrest.");
            return;
        }
        console.log({
            destination,
            startDate,
            endDate,
            travelers,
            budget,
            interests:selectedInterests,
            pace,
            accommodation,
            transportation,
        });
    }
    const [step,setStep] = useState(1);
    const validateStep1 = () => {
        if(!destination.trim()){
            alert("Please enter a sestination");
            return false;
        }
        if(!startDate){
            alert("pllease enter a start date.");
            return false;
        }
        if(!endDate){
            alert("please enter an end date");
            return false;
        }
        if(endDate<startDate){
            alert("End date must be after the start date.");
            return false;
        }
        if (travelers < 1){
            alert("Number of travelers musr be at least 1");
            return false;
        }
        if (budget < 0){
            alert("Budget connot be nagetive");
            return false;
        }
        return true; 

    }
    const handleNext = () =>{
        if(step===1){
            if(!validateStep1()){
                return;
            }
            setStep(2)
        }
    }
    const handleNextStep2 = () => {
        if (selectedInterests.length === 0) {
            alert("Please select at least one interest.");
            return;
        }
        setStep(3);
    }
    return(
        <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                {/* page header */}
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                        Plan Your Trip
                    </h1>
                    <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-600">
                        Tell us about your interests and travel style to create a personalized itinerary.
                    </p>
                </div>

                {/* form */}
                <form 
                onSubmit={handleSubmit}
                className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="space-y-8">
                        {/* Trip basics */}
                        {step === 1 &&(

                        
                        <fieldset className="space-y-6">
                            <legend className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                Trip details 
                            </legend>
                          
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                    Destination
                                </label>
                                <input
                                    type="text"
                                    id="destination"
                                    name="destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="e.g. Tokyo, Paris, or Bali"
                                    className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-400"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="start-date" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        Start date
                                    </label>
                                    <input
                                        id="start-date"
                                        name="startDate"
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="end-date" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        End date
                                    </label>
                                    <input
                                        id="end-date"
                                        name="endDate"
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="travelers" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                        Number of travelers
                                    </label>
                                    <input
                                        type="number"
                                        id="travelers"
                                        name="travelers"
                                        min={1}
                                        value={travelers}
                                        onChange={(e) => setTravelers(Number(e.target.value))}
                                        placeholder="1"
                                        className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                        Budget (USD)
                                    </label>
                                    <input
                                        type="number"
                                        id="budget"
                                        name="budget"
                                        value={budget}
                                        onChange={(e)=> setBudget(Number(e.target.value))}
                                        min={0}
                                        placeholder="e.g. 2000"
                                        className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-400"
                                    />
                                </div>
                            </div>
                        </fieldset>
)}
                        {/* Interests */}
                        {step === 2 && (
                        <>
                        <fieldset className="space-y-4">
                            <legend className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                Interests
                            </legend>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Select all that apply
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {interests.map((interest) => {
                                    const id = `interest-${interest.toLowerCase()}`;
                                    return (
                                        <label
                                            key={interest}
                                            htmlFor={id}
                                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-600 dark:hover:bg-sky-950/30"
                                        >
                                            
                                            <input
                                                type="checkbox"
                                                id={id}
                                                name="interests"
                                                value={interest}
                                                checked={selectedInterests.includes(interest)}
                                                onChange={(e) => toggleInterest(interest, e.target.checked)}
                                                className="h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500 dark:border-zinc-600 dark:bg-zinc-800"
                                            />
                                            {interest}
                                        </label>
                                    );
                                })}
                            </div>
                        </fieldset>
                         
                        {/* Travel pace */}
                        <fieldset className="space-y-4">
                            <legend className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                Travel pace
                            </legend>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {paces.map(({ value, label }) => {
                                    const id = `pace-${value}`;
                                    return (
                                        <label
                                            key={value}
                                            htmlFor={id}
                                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-600 dark:hover:bg-sky-950/30"
                                        >
                                            <input
                                                type="radio"
                                                id={id}
                                                name="pace"
                                                value={value}
                                                checked ={ pace===value}
                                                onChange={(e)=> setPace(e.target.value)}
                                                className="h-4 w-4 border-zinc-300 text-sky-600 focus:ring-sky-500 dark:border-zinc-600 dark:bg-zinc-800"
                                            />
                                            {label}
                                        </label>
                                    );
                                })}
                            </div>
                        </fieldset>
                        <fieldset className="space-y-4">

                            <legend className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                Transportation
                            </legend>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    How do you prefer to get around?
                                </p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {transportations.map(({ value, label }) => {
                                        const id = `transportation-${value}`;
                                        return (
                                            <label
                                                key={value}
                                                htmlFor={id}
                                                className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-600 dark:hover:bg-sky-950/30"
                                            >
                                                <input
                                                    type="radio"
                                                    id={id}
                                                    name="transportation"
                                                    value={value}
                                                    checked={transportation === value}
                                                    onChange={(e) => setTransportation(e.target.value)}
                                                    className="h-4 w-4 border-zinc-300 text-sky-600 focus:ring-sky-500 dark:border-zinc-600 dark:bg-zinc-800"
                                                />
                                                {label}
                                            </label>
                                        );
                                    })}
                                </div>
                        </fieldset>
                        </>
                        )}

{step === 3 && (
    <fieldset className="space-y-4">
        <legend className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Accommodation
        </legend>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Where would you like to stay?
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {accommodations.map(({ value, label }) => {
                const id = `accommodation-${value}`;

                return (
                    <label
                        key={value}
                        htmlFor={id}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-600 dark:hover:bg-sky-950/30"
                    >
                        <input
                            type="radio"
                            id={id}
                            name="accommodation"
                            value={value}
                            checked={accommodation === value}
                            onChange={(e) => setAccommodation(e.target.value)}
                            className="h-4 w-4 border-zinc-300 text-sky-600 focus:ring-sky-500 dark:border-zinc-600 dark:bg-zinc-800"
                        />

                        {label}
                    </label>
                );
            })}
        </div>
    </fieldset>
)}
                        <div className="pt-2"> 
                        {step === 1 &&(

                      
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-full rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 sm:w-auto"
                            >
                                Next -
                            </button>
                              )}
                              {step === 2 &&(
                                <button 
                                type = "button"
                                onClick = {handleNextStep2}
                                className="w-full rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 sm:w-auto"
                                >
                                Next -
                                </button>
                              )}
                              {step === 3 &&(
                                <button 
                                type="button"
                                onClick={()=>setStep(4)}
                                className="w-full rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 sm:w-auto"
                                >
                                    Next -
                                </button>

                              )}

                              {step === 4 && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                            Review your trip
                                        </h2>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            Please review the details of your trip.
                                        </p>
                                    </div>

                                    <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
                                        <div>
                                            <p className="text-sm text-zinc-500">Destination</p>
                                            <p className="font-medium">{destination}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-500">Dates</p>
                                            <p className="font-medium">
                                                {startDate} - {endDate}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-500">Travelers</p>
                                            <p className="font-medium">{travelers}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-500">Budget</p>
                                            <p className="font-medium">${budget}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-500">Interests</p>
                                            <p className="font-medium">{selectedInterests.join(", ")}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-500">Travel pace</p>
                                            <p className="font-medium">{pace}</p>
                                        </div>
                                        <div> 
                                            <p className="text-sm text-zinc-500">Transportation</p>
                                            <p className="font-medium">
                                                {transportations.find((item) => item.value === transportation)?.label}
                                            </p>

                                             </div>
                                             <button 
                                             type="submit"
                                             className="w-full rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 sm:w-auto"

                                             >
                                                Create Trip
                                             </button>
                                    </div>
                                </div>
                              )}
                            
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
