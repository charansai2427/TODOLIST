import { useEffect, useState } from "react";

const Countdown = () =>{
    const initValue= {
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
        futureDate:0,
};

    const [cd,setCd] = useState(initValue);

useEffect(()=>{
    if(cd.futureDate !==0){
    const timer = setInterval(()=>{
        const ct = new Date().getTime();
        const ft = cd.futureDate.getTime();
        const expt = ft-ct;
        if(expt < 0) clearInterval(timer)
        const days = parseInt(expt/24*60*60*1000) ;
        const hours = parseInt((expt%(24*60*60*1000))/60*60*1000);
        const min = Math.floor((expt%(60*60*1000))/60*1000);
        const sec = Math.floor((expt%(60*1000))/1000);
        setCd({...cd,days,hours,min,sec})
    },1000)
}

},[cd.futureDate])
 
    return(
    <div>
        <div>
            <input onChange ={(e) =>
             setCd({...cd ,futureDate : new Date(e.target.value)})
        }
        type="datetime-local"/>
        </div>
        <span>{cd.days}</span>
        <span>{cd.hours}</span>
        <span>{cd.minutes}</span>
        <span>{cd.seconds}</span>

    </div>

    )
}

export default Countdown;

