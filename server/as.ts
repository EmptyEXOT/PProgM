import {setTimeout} from "timers";

export default async function fnc() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve('5');
        }, 10000);
    }))
}

