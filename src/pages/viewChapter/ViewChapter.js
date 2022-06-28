import React, { useState, useEffect } from 'react';
import Chapter from '../../components/Chapter';
import VideoTutorial from '../../components/VideoTutorial';
import { getChapters } from '../../firebase';


const ViewChapter = () => {
   const [chapters, setChapters] = useState([]);
   const [selectedLesson, setSelectedLesson] = useState(null);


   const getAllChapters = async () => {
      const response = await getChapters();
      console.log(response)
      if (response.status === 200) {
         setChapters(response.chapterList);
         setSelectedLesson(response.chapterList[0].lesson[0]);
      }
   }

   useEffect(() => {
      getAllChapters();

   }, []);
   return (
      <>
         <div className='chapters-container'>
            <h3 className="chapters-container-heading">Course Content</h3>

            {
               chapters.length <= 0 ? <div className='loading-spinner1'></div> : <Chapter chapters={chapters} setSelectedLesson={setSelectedLesson} />
            }
         </div>

         <div className='video-container'>
            {selectedLesson === null ? <div className='loading-spinner2'></div> : <VideoTutorial selectedLesson={selectedLesson} />}
         </div>
      </>
   )
}

export default ViewChapter;