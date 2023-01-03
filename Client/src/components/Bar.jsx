import React,{useState} from 'react';
import './bar.css';
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
        <div className="container">
		<div className="progress">
            
			<div className="progress-done" style={style}>
            <span>{done}%</span>
			</div>
		</div>
        </div>
	)
}
export default Progress;