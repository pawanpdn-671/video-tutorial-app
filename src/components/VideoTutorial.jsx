import React, { useEffect, useState } from "react";

const VideoTutorial = (props) => {
	const str = props?.selectedLesson?.description;
	const truncateStr = str.substring(0, 150);

	const [readMore, setReadMore] = useState(false);

	useEffect(() => {
		setReadMore(false);
	}, [props]);

	return (
		<div className="video-block">
			<div className="video-title-block">{props?.selectedLesson.title}</div>
			<div className="video-frame-block">
				<video controls autoPlay={true} muted loop src={props?.selectedLesson?.url} />
			</div>
			<div className="video-details-block">
				<p className="description">
					{readMore ? str : truncateStr}
					{readMore ? "" : "..."}
					<span
						className="read-more-btn"
						onClick={() => {
							setReadMore(!readMore);
						}}>
						{readMore ? "Read less" : "Read more"}
					</span>
				</p>
			</div>
		</div>
	);
};

export default VideoTutorial;
