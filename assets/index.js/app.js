const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}

const cardsData = [
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Customer-Centric",
        description: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Global Resonance",
        description: "Share insights and innovations that have a positive impact across borders and sectors."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Ethical Leadership",
        description: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Innovation",
        description: "Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Commitment to Vision 2030",
        description: "Align with and champion Saudi Arabia's technological and societal aspirations."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Collaboration",
        description: "Forge strategic partnerships across industries and institutions, </br> emphasizing both global and local advancements."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Social Responsibility",
        description: "Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable practices in both business and societal arenas."
    },
    {
        Image: "./assets/images/svg/correct-svg.svg",
        title: "Workplace Harmony",
        description: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family."
    }
];

const container = document.getElementById("cardsContainer");

container.innerHTML = cardsData.map(card => `
            <div class="col-12 col-md-6 mb-4 d-flex justify-content-center"> 
                <div class="card-box w-100">
                    <div class="d-flex align-items-center gap-8 mb-2">
                        <img src="${card.Image}" alt="correct-img">
                        <h5 class="font-family-primary fw-bold fs-6 lh-24 text-black mb-0">${card.title}</h5>
                    </div>
                        <p class="font-family-primary fw-normal fs-6 lh-24 text-black opacity-80 mb-0">${card.description}</p>
                </div>
            </div>
        `)
    .join('');