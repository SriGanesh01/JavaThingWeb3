import React, { useEffect, useRef, useState } from 'react';
import EachDiary from '../components/EachDiary';
import { firestore } from '../firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

function Home() {
  const titleRef = useRef();
  const contentRef = useRef();
  const [diaries, setDiaries] = useState([]);
  const ref = collection(firestore, 'diaries');

  // Fetch diary entries from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const diaryData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDiaries(diaryData);
    });

    return () => unsubscribe();
  }, [ref]);

  const handleSave = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    try {
      const docRef = await addDoc(ref, {
        title,
        content
      });
      console.log('Document written with ID: ', docRef.id);
      // Clear input fields after saving
      titleRef.current.value = '';
      contentRef.current.value = '';
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Diary Entries</h1>
      <form onSubmit={handleSave} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            ref={titleRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter diary title"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            ref={contentRef}
            id="content"
            cols="30"
            rows="10"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your diary content here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Diary
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {diaries.map((diary) => (
          <EachDiary key={diary.id} title={diary.title} content={diary.content} />
        ))}
      </div>
    </div>
  );
}

export default Home;
