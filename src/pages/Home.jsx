import React, { useEffect } from 'react';
import Header from '../components/Header';
import EachDiary from '../components/EachDiary';

function Home() {
    const [diaries, setDiaries] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchDiaries();
    }, []);

    const fetchDiaries = () => {
        fetch('http://localhost:8081/diaries')
            .then(response => response.json())
            .then(data => setDiaries(data))
            .catch(err => setError('Failed to fetch diaries'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDiary = { title, content };

        fetch('http://localhost:8081/diaries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDiary),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(() => {
            fetchDiaries(); // Fetch diaries again to get updated list
            setTitle(''); // Clear input fields
            setContent('');
        })
        .catch(err => setError('Failed to add diary entry'));
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
