import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';


export function useDarkMode(){
    const [value, setValue]= useLocalStorage("darkmode");

    useEffect(() => {
        const body= window.document.body;

        if (value ){

            // if it is true we are adding the dark mode to the body element
            body.classList.add("dark-mode")
        } else{
            //if false, removing the class from the body element
            body.classList.remove('dark-mode');
        }
    }, [value] );

    //following last bit of the read me, we are returning our ivalue from our setter function

    return[value, setValue];



}

