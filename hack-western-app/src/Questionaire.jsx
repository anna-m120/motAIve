import React from "react";
import "./questionaire.css"
function Questionaire({hideQuestionaire}){

    React.useEffect(() => {
        Notification.requestPermission().then((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                setTimeout(() => new Notification("Take a minute to reflect", {icon: "./motaive.png"}), 20000);
            }
          });
      }, []);
    const questions = [{q:"What's your name bestie?", n: "Blue"}, {q:"What's your age?", n: "22"}, {q:"What's your favourite food?", n: "Pickles"}, {q:"Do you enjoy cooking?", n: "Yes"}, {q:"Do you like hackWestern?", n: "Yes"}]
    return (<section >
        <h1 id="questionaire_title">Welcome to motivai -- INSERT LOGO HERE</h1>
        {questions.map((data, index) => <div key={"questionaire-question-"+index} className="q_label_wrapper"><label class="q_label">{data.q}:</label> <div><input value={data.n}/></div></div>)}
        <div style={{textAlign: "center"}}><button className="questionaire_button button-9" onClick={() =>{ 
            hideQuestionaire()
            }}>Submit my background</button></div>
    </section>)
}
export default Questionaire;