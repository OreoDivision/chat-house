import React from 'react';

import "../../../main.css";

function emoji(message: any){
	message = message.replace(':)', "🙂")
	message = message.replace(';)', "😉")
	message = message.replace(':o', "😮")
	message = message.replace(':0', "😮")
	message = message.replace(':|', "😐")
	message = message.replace(':p', "😛")
	message = message.replace(':P', "😛")
	message = message.replace(';p', "😜")
	message = message.replace(';P', "😜")
	message = message.replace('\:', ":")
	message = message.replace('\;', ";")
	message = message.replace('\|', "|")
	return message
}

const Message = ({ message }: {message:any}) => {
	message.message = emoji(message.message)
	if (message.mention == false){
		return (

			<div style={{color: "white", backgroundColor: "", borderRadius: "10px", marginRight: "min", height: "content"}}>
				<p style={{marginLeft: "10px"}}>
				{message.name}
				</p>
				<p style={{marginLeft: "10px"}}>
				{message.message}
				</p>
			</div>
			
		)
	} else {
		return (
			<div style={{color: "white", backgroundColor: "#001eff", borderRadius: "10px", marginRight: "min", height: "content", minHeight: "30px", verticalAlign: "50%", flexWrap: 'wrap'}}>
					<p style={{marginLeft: "10px"}}>
					{message.name}
					</p>
					<p style={{marginLeft: "10px"}}>
					{message.message}
					</p>
			</div>
		)
	}
}

export default Message;