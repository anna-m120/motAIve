import React from "react";

function LoadingMessage(){
	const [text, changeText] = React.useState("bkvfsbhifbvoerbpvprebgerogfbreo8frebfoerfbreofb2rfourebwfvor8fyb382r734r843hrg834grf348r34g834rrbkvfsbhifbvoerbpvprebgerogfbreo8frebfoerfbreofb2rfourebwfvor8fyb382r734r843hrg834grf348r34g834rrbkvfsbhifbvoerbpvprebgerogfbreo8frebfoerfbreofb2rfourebwfvor8fyb382r734r843hrg834grf348r34g834rrbkvfsbhifbvoerbpvprebgerogfbreo8frebfoerfbreofb2rfourebwfvor8fyb382r734r843hrg834grf348r34g834rr");
	React.useEffect(() => {
		const interval = setInterval(() => {
            console.log("interval")
			switch(text) {
				case "Loading...":
					changeText(prevText => "Loading")
				  break;
				case "Loading":
					changeText("Loading.")
				  break;
				case "Loading.":
					changeText("Loading..")
				  break;
				case "Loading..":
					changeText("Loading...")
				  break;
				default:
				changeText("Loading")
			  }

		}, 1000);
		return () => clearInterval(interval);
	  }, [text, changeText]);

	return <div className="msg_bot"><span className="loading_msg">{text}</span></div>;
}

export default LoadingMessage;