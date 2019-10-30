import {useLocalStorage} from './useLocalStorage';
import {useEffect} from ''react";


export function useDarkMode(){
    const [value, setValue]= useLocalStorage("darkmode");
}