document.addEventListener('DOMContentLoaded', function() {
    const userProfile = {
        name: "Alex",
        age: 25,
        hobbies: ["Leer", "Viajar", "Deportes"]
    };

    const matches = [
        {name: "Sam", age: 24, hobbies: ["Cine", "Yoga"]},
        {name: "Charlie", age: 29, hobbies: ["Fotografía", "Gimnasio"]}
    ];

    function displayUserProfile(user) {
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = `<h2>${user.name}, ${user.age}</h2>
                                <p>Hobbies: ${user.hobbies.join(", ")}</p>`;
    }

    function displayMatches(matchList) {
        const matchesDiv = document.getElementById('matches');
        matchesDiv.innerHTML = '<h3>Posibles coincidencias:</h3>';
        matchList.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('match');
            matchDiv.innerHTML = `<h4>${match.name}, ${match.age}</h4>
                                  <p>Hobbies: ${match.hobbies.join(", ")}</p>`;
            matchesDiv.appendChild(matchDiv);
        });
    }

    displayUserProfile(userProfile);
    displayMatches(matches);
});
