async function loadProfiles() {

    try {

        const response = await fetch("/api/profiles");

        const profiles = await response.json();

        const container = document.getElementById("profiles-container");

        container.innerHTML = "";

        profiles.forEach(profile => {

            const card = document.createElement("div");

            card.className = "profile-card";

            card.innerHTML = `
                <img src="${profile.photo}" alt="${profile.name}">

                <h2>${profile.name}</h2>

                <p class="email">${profile.email}</p>

                <h3>Hobbies</h3>

                <ul class="hobbies">
                    ${profile.hobbies
                        .map(hobby => `<li>${hobby}</li>`)
                        .join("")}
                </ul>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error("Error loading profiles:", error);

    }
}

// Load profiles when page opens
loadProfiles();