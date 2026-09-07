function Card({ title, description }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>View</button>
        </div>
    );
}

function App() {

    return (
        <div>
            <h1>Reusable React Components</h1>

            <Card
                title="HTML"
                description="Used to create web page structure."
            />

            <Card
                title="CSS"
                description="Used to style web pages."
            />

            <Card
                title="JavaScript"
                description="Used to add interactivity."
            />
        </div>
    );
}

export default App;