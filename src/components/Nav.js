import React from 'react';
import { useState } from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";

const Nav = () => {
    
    const home = "Home"
    const [title1, setTitle1] = useState("Student")
    const [title2, setTitle2] = useState("Programmer")
    const [title3, setTitle3] = useState("Lifelong Learner")
    
    // this will toggle classes to show what the current page is 
    function toggleCurrent(e) {
        let classes = "afterclick";
        let els = document.getElementsByClassName("afterclick selected")
        if (els) {
            while (els[0]) {
            els[0].classList.remove('selected')
            }
        
        }
        e.target.className = classes.replace('afterclick', 'afterclick selected')
    }


    function change1() {
        setTitle1("About")
    }
    function change2() {
        setTitle2("Experience")
    }
    function change3() {
        setTitle3("Contact")
    }

    // changing classes after initial click on titles
    let class1 = "beforeclick";
        if (title1 === 'About'){
            class1 = 'afterclick'
        }

    let class2 = "beforeclick";
        if (title2 === 'Experience'){
            class2 = 'afterclick'
        }

    let class3 = "beforeclick";
        if (title3 === 'Contact'){
            class3 = 'afterclick'
        }

        
    let scroll = animateScroll;
    function scrollToTop() {
        scroll.scrollToTop();
    }
    function scrollToBottom() {
        if (title3 === 'Contact') {
        scroll.scrollToBottom()
        }
    }

    return (
        <header className='nav wrapper'>
            <div className='fixed-wrapper'>
                <div className='fixed'>
                    <h1 className='selected afterclick' id={home} onClick={(e) => {toggleCurrent(e); scrollToTop();}}>{home}</h1>
                    <Link activeClass="active" to={title1} spy={true} smooth={true} offset={0} duration={1000}><h1 className={class1 ? class1 : 'selected'} onClick={(e) => {change1(); toggleCurrent(e)}}>{title1}</h1></Link>
                    <Link activeClass="active" to={title2} spy={true} smooth={true} offset={0} duration={1000}><h1 className={class2 ? class2 : 'selected'} onClick={(e) => {change2(); toggleCurrent(e)}}>{title2}</h1></Link>
                    <h1 className={class3 ? class3 : 'selected'} onClick={(e) => {change3(); toggleCurrent(e); scrollToBottom(); }}>{title3}</h1>
                </div>
            </div>
        </header>
    )
}

export default Nav



