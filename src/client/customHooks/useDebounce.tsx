const useDebounce = (func: Function, delay: number) => {
    let timer: number; 
    return (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(func, delay, args);
    }
}

export default useDebounce;