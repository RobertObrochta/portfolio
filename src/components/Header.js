import React, { useEffect, useState } from 'react'

const Header = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true); 
    const [reverse, setReverse] = useState(false);
    
    const words = ["Robert Obrochta"];

    // typing
    useEffect(() => {
        if (index === words.length) return;
        if (
        subIndex === words[index].length + 1 &&
        index !== words.length - 1 &&
        !reverse
        ){
            setReverse(true);
            return;
        }
        
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.floor((Math.random() * 160) + 50));
        
        return () => clearTimeout(timeout);
        // eslint-disable-next-line
        }, [subIndex, index, reverse]);


    // blinking 
    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);


    return (
        <header className='header'>
            <h1 className='name'>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h1>       
        </header>
    )
}


export default Header
