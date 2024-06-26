import { forwardRef,useImperativeHandle,useRef } from "react";

 const Resultmodal = forwardRef(function Resultmodal({time,timeLeft,reset},ref){
    let score;
    if (timeLeft <= time * 1000) {
        score = Math.round((1 - timeLeft / (time * 1000) 
        )* 100);
      } else {
        score = 0;
      }
    console.log(score);
    const k =useRef();
    useImperativeHandle(ref,()=>{
        return {
            show(){
                k.current.showModal();
            }
        }
    });
    let c ;
    if(timeLeft>0){
        c= true;
    }
    else{
        c= false;
    }

    return(
        <dialog ref ={k} className="result-modal" onClose={reset}>
            <p ><b><center>{!c && "You Lost"}</center></b></p>
            <p><b><center>{c && `You Won with score of ${score}` }</center></b></p>
            <p>Your Target Time was <b>{time}{time >= 1 ? " seconds":" second"}</b></p>
            <p>You Stopped Timer with <b> {(timeLeft/1000).toFixed(2)} seconds left!</b></p>
            <form method="dialog" onSubmit={reset}>
             <button >close</button>
            </form>
        </dialog>
    );
});
export default Resultmodal;