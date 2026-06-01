import { useState } from "react";
import { FormSearch } from "../components/FormSearch";
import { Header } from "../components/Header";
import { WeatherData } from "../components/WeatherData";

//const KEY = "https://open-meteo.com/v1/forecast?temperature_unit"

export function Home(){

    const [city, setCity] = useState("Manaus");


    return(
        <main className="flex flex-col m-auto mt-20 gap-4 max-w-125 bg-cyan-100 p-4 rounded-2xl">
            <Header>
                Weather
            </Header>
            <FormSearch city={city} setCity={setCity}/>
            <WeatherData city={city}/>
        </main>
    )
}