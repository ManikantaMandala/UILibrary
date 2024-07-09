import "./Styles/Style.css";

interface MessageProps {
	messageData: string;
	time: Date;
	send: string;
	color: string;
}

export function Message({ messageData, time, send, color }: MessageProps) {
  return (
	<div className="message-wrapper" style={{ backgroundColor: color }}>
		<div className="send-name">
		  <p>{send}</p>
		</div>
		<div className="message-data">
		  <p>{messageData}</p>
		</div>
		<div className="message-time">
		  <p>{time.getHours()}:{time.getMinutes()}</p>
		</div>
	</div>
  );
}
