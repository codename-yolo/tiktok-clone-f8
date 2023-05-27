import { useEffect, useState } from "react"

const useDebounce = (value: string, delay?: number): string => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value)
    // console.log('1' + debouncedValue, '2' + value);

    useEffect(() => {
        // console.log('ef3');

        const timer = setTimeout(() => {
            // console.log('time out');
            setDebouncedValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce;