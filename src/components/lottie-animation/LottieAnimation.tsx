import React, { useEffect, useRef } from 'react';
import animationData from "../../assets/SYLCAnimation.json";
import lottie from 'lottie-web'

interface ILottieAnimationProps {
    className?: string;
}

function LottieAnimation(props: ILottieAnimationProps) {
    let elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const divElement = elementRef.current;
        lottie.loadAnimation({
            container: divElement as Element,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings:{
                preserveAspectRatio: "xMidYMid meet",
                viewBoxOnly: true,
                viewBoxSize: '0 120 500 300',
            }
        }).resize();
      }, []);
      
    return <div ref={elementRef} className={props.className}/>; 
  }
  
  export default LottieAnimation;
