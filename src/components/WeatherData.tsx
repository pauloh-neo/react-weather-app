import {Sun, CloudSun,  ThermometerSun, Umbrella} from 'lucide-react'

export function WeatherData(){

    const arrOfNum = Array.from({length: 1}, (_, i) => i)

    return(
        <ul className="w-full flex flex-col gap-5">
                    <span className='text-2xl font-medium border-b border-gray-400'>Manaus</span>
                <li>
                    <div className='flex justify-between'>
                        <ThermometerSun size={26}/>
                        <span>30°C</span>
                    </div>
                    <div className='flex justify-between '>
                        <CloudSun size={26}/>
                        <span>Partialy cloudy</span>
                    </div>
                    <div className='flex justify-between'>
                        <Umbrella size={26}/>
                        <span>Rain chance: 40%</span>
                    </div>    
                </li>
        </ul>
    )
}