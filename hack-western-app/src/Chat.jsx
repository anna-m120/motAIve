import "./chat.css"
function Chat(){
	const messages = [
		{"bot": true, "message": "hello! how are you?"},
		{"bot": false, "message": "bestie im vibing"},
		{"bot": true, "message": "good to hear! are you working on healthy habits?"},
		{"bot": false, "message": "not rlly!"},
		{"bot": true, "message": "what healthy habits do you wnat to work on?"},
		{"bot": false, "message": "meditation!"},
		{"bot": true, "message": "perfect let me add that to the list!"},
	]
	return <div class="msg">
		{messages.map(({bot, message}) => <div className={bot ? "msg_bot" : "msg_usr"}><span>{message}</span></div>)}
		<input></input>
	</div>
}

export default Chat;