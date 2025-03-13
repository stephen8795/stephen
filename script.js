const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Serious Fact 1 </h3>
                <p>
                    Aarush is 4.0 student
                </p>
                <ul>
                    <li>He recently had an 4.0 but he will get it back</li>
                    <li>He is really smart -- only in school</li>
                    <li>
                        He has no common sense
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Serious Fact 2 </h3>
                <p>
                    Advik is also really smart
                </p>
                <ul>
                    <li>He can think on his feet because of his pro gaming skills</li>
                    <li>He is 3.8 student</li>
                    <li>
                        He will go to harvard
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Serious Fact 3 </h3>
            <p>
                Neil has concussions
            </p>
            <ul>
                    <li>He's had at least 4 concussions</li>
                    <li>He has to sit out of soccer and wear a head band</li>
                    <li>
                        Sometimes, he forgets important info because of his concussions
                    </li>
                </ul>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Silly Fact 1</h3>
                <p>
                    I'm huge fan of Advik Adhiyaman
                </p>
                <ul>
                    <li>He is the best Fortnite Player</li>
                    <li>He is the best Siege player</li>
                    <li>
                        He is the best soccer player in the world
                    </li>
                </ul>
        `;
        card2.innerHTML = `
           <h3>Silly Fact 2</h3>
                <p>
                    Aarush is bad singing
                </p>
                <ul>
                    <li>He is tone deaf</li>
                    <li>I took choir with him and he cannot sing.</li>
                    <li>
                        He does not know how to read music
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Silly Fact 3</h3>
                <p>
                    Aarush is curry fein
                </p>
                <ul>
                    <li>He is indian</li>
                    <li>He loves curry</li>
                    <li>
                        He is curry fein
                    </li>
                </ul>
    `;
    }
});