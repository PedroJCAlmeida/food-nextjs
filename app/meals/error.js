"use client";

export default function Error({error}){
    return(
        <main className="error">
            <h1> An error occorred!</h1>
            <p>Feiled to fetch meal data. Please try again later.</p>
        </main>
    );
}