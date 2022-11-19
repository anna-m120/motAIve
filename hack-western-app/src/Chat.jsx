import "./Chat.css"
import LoadingMessage from "./LoadingMessage.jsx";
import React from "react";
function Chat(){
	const [value, handleChange] = React.useState("");
	const [isInputAvaliable, toggleInputAvaliability] = React.useState(true)
	const [messages, updateMessages] = React.useState([
		{"bot": true, "message": "hello! how are you?"},
		{"bot": false, "message": "bestie im vibing"},
		{"bot": true, "message": "good to hear! are you working on healthy habits?"},
		{"bot": false, "message": "not rlly!"},
		{"bot": true, "message": "what healthy habits do you wnat to work on?"},
		{"bot": false, "message": "meditation!"},
		{"bot": true, "message": "perfect let me add that to the list!"},
	]);

	function sendMessage(event){
		event.preventDefault();
		updateMessages([...messages, {"bot": false, "message": value}, {"bot": true, "message": "Loading..."}])
		toggleInputAvaliability(false)
		// TODO: replace this with true fetch from API
		var fetchMessage = new Promise(resolve => setTimeout(resolve, 5000));
		fetchMessage.then(() => {
			updateMessages(prevMessages => [...prevMessages.slice(0, -1),  {"bot": true, "message": "This is Catie's API response!"}])
			toggleInputAvaliability(true)
		})

		handleChange("")
	}
	

	function generateMessage(bot, message){
		if(message == "Loading..."){
			return <LoadingMessage/>
		} else {
			return <div className={bot ? "msg_bot" : "msg_usr"}><span className={bot ? "msg_bot_text" : "msg_usr_text"}>{message}</span></div>
		}
	}
	return <div className="msg">
		{messages.map(({bot, message}) => generateMessage(bot, message))}
		<form className="form" onSubmit={(e) => sendMessage(e)}>
        <label></label>
          <input placeholder="Enter message here." disabled={!isInputAvaliable} type="text" value={value} onChange={(e) => {handleChange(e.target.value)}} />
      </form>
	</div>
}

export default Chat;