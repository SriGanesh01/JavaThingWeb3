import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EachDiary from '../components/EachDiary';

function Home() {
    const [diaries, setDiaries] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDiaries(); // Fetch diaries on component mount
    }, []);

    const fetchDiaries = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/diaries`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setDiaries(data);
        } catch (err) {
            setError('Failed to fetch diaries');
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDiary = { title, content };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/diaries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDiary),
            });

            if (!response.ok) throw new Error('Failed to add diary entry');
            await fetchDiaries(); // Refresh the diary list
            setTitle(''); // Clear input fields
            setContent('');
        } catch (err) {
            setError('Failed to add diary entry');
            console.error(err);
        }
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
                <button type="submit">Add Diary</button>
            </form>
            {error && <p>{error}</p>} {/* Display error message */}
            {diaries.map((diary, i) => (
                <EachDiary 
                    key={i}
                    title={diary.title} 
                    content={diary.content} 
                />
            ))}
        </>
    );
}

export default Home;
