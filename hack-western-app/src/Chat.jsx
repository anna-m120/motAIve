import "./Chat.css"
import LoadingMessage from "./LoadingMessage.jsx";
import React from "react";
function Chat(){
	const [value, handleChange] = React.useState("");
	const [isInputAvaliable, toggleInputAvaliability] = React.useState(true)
	const [messages, updateMessages] = React.useState([
		{"bot": true, "message": "Hello! How are you?"},
	]);

	function sendMessage(event){
		event.preventDefault();
		const oldMessages = messages;
		updateMessages([...messages, {"bot": false, "message": value}, {"bot": true, "message": "Loading..."}])
		toggleInputAvaliability(false)
		console.log("Bot Message: ", messages[messages.length-1].message);
		console.log("User Message: ", value);
		fetch('https://spotty-jealous-evening.glitch.me/', {
			method: 'POST', // or 'PUT'
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({"botQ": messages[messages.length-1].message, "userMsg": value}),
		  })
			.then((response) => response.text())
			.then((text) => {
				console.log(text)
				updateMessages(prevMessages => [...prevMessages.slice(0, -1),  {"bot": true, "message": text.split("\n")[0]}])
				toggleInputAvaliability(true)
			})
			.catch((error) => {
			  console.error('Error:', error);
			});
		
		handleChange("")
	}
	

	React.useEffect(() => {
		document.getElementsByClassName("chat-container")[0].scrollTop = document.getElementsByClassName("chat-container")[0].scrollHeight;
	}, [messages])

	function generateMessage(bot, message){
		if(message == "Loading..."){
			return <LoadingMessage/>
		} else {
			return <div className={bot ? "msg_bot" : "msg_usr"}><span className={bot ? "msg_bot_text" : "msg_usr_text"}>{message}</span></div>
		}
	}
	return <div>
		<div className="chat-container">
		<div className="msg">
			{messages.map(({bot, message}) => generateMessage(bot, message))}
		</div>
		</div>
		<form className="form" onSubmit={(e) => sendMessage(e)}>
			<label></label>
			<input id="chat-box" placeholder="Enter message here." disabled={!isInputAvaliable} type="text" value={value} onChange={(e) => {handleChange(e.target.value)}} />
		</form>
	</div>
}

export default Chat;