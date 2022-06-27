import React, { useState } from "react";
import { FaCaretDown, FaRegWindowMinimize, FaCaretUp } from "react-icons/fa";

const Chapter = ({ chapters, setSelectedLesson }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedChapterLessons, setSelectedChapterLessons] = useState(null);
	const [chapterID, setChapterID] = useState(null);

	return (
		<>
			<div className="chapter-items-wrapper">
				{chapters?.map((chap) => {
					return (
						<div
							key={chap.id}
							className={`${
								chapterID === chap.id && showDropdown ? "active" : ""
							} chapter-item`}
							onClick={() => {
								setShowDropdown(!showDropdown);
								setSelectedChapterLessons(chap.lesson);
								setChapterID(chap.id);
							}}>
							{showDropdown && chapterID === chap.id ? (
								<>
									<div className="chapter-item-title">
										<span>{chap.title}</span>
										<FaCaretUp />
									</div>
									<div className="lesson-list" onClick={(e) => e.stopPropagation()}>
										{selectedChapterLessons?.map((less) => (
											<span key={less.id} onClick={() => setSelectedLesson(less)}>
												<FaRegWindowMinimize />
												{less.title}
											</span>
										))}
									</div>
								</>
							) : (
								<div className="chapter-item-title">
									<span>{chap.title}</span>
									<FaCaretDown />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Chapter;
