const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

const profiles = [
    {
        username: "gaurav",
        name: "Gaurav Rao",
        email: "email: \"gaurav@gmail.com\"",
        photo: "https://i.pravatar.cc/300?img=12",
        hobbies: "hobbies: \"Badminton, Gaming, Travelling\""
    },
    {
        username: "rahul",
        name: "Rahul Sharma",
        email: "email: \"rahul@gmail.com\"",
        photo: "https://i.pravatar.cc/300?img=11",
        hobbies: "hobbies: \"Cricket, Photography, Music\""
    },
    {
        username: "ananya",
        name: "Ananya Singh",
        email: "email: \"ananya@gmail.com\"",
        photo: "https://i.pravatar.cc/300?img=47",
        hobbies: "hobbies: \"Reading, Painting, Dancing\""
    }
];


// API - Get all profiles
app.get("/api/profiles", (req, res) => {
    res.json(profiles);
});


// API - Get profile by username
app.get("/api/profiles/:username", (req, res) => {

    const username = req.params.username.toLowerCase();

    const profile = profiles.find(
        person => person.username === username
    );

    if (!profile) {
        return res.status(404).json({
            message: "Profile not found"
        });
    }

    res.json(profile);
});


// Profile page
app.get("/:username", (req, res) => {

    const username = req.params.username.toLowerCase();

    const profile = profiles.find(
        person => person.username === username
    );

    if (!profile) {
        return res.status(404).send("Profile not found");
    }

    res.send(`
        <!DOCTYPE html>

        <html>

        <head>
<title>${profile.name} | Social Media</title>            <link rel="stylesheet" href="/style.css">
        </head>

        <body>

            <div class="profile">

                <h1>${profile.name}</h1>

                <img
                    src="${profile.photo}"
                    alt="${profile.name}"
                >

                <p>${profile.email}</p>

                <p>${profile.hobbies}</p>

            </div>

        </body>

        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});