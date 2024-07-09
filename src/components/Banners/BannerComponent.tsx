import "./Styles/Style.css";

interface BannerProps {
	color?: string;
	text: string;
}

export function Banner({ color, text }: BannerProps) {
	return (
		<div className="banner-wrapper">
			<div className="rectangle" 
				style={{ 
					backgroundImage: 
						`linear-gradient(to right, ${color}, ${color}, transparent)` 
				}}>
				<p>{text}</p>
			</div>
		</div>
	);
}
