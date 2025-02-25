document.addEventListener("DOMContentLoaded", function () {
    const whiteSection = document.getElementById("white-section");
    const blackSection = document.getElementById("black-section");
    const whiteText = document.getElementById("white-text");
    const blackText = document.getElementById("black-text");

    // Texts for white and black sections
    const whiteTexts = [
        "두 세계가 거기 한데 뒤섞여 있었다.",
        "이곳은 빛과 평온이 가득한 세계이다.",
        "명확함과 질서가 이 세계를 지배한다.",
        "여기서는 모든 것이 따뜻하고 밝다.",
        "새로운 시작이 가능한 세계이다."
    ];

    const blackTexts = [
        "또다른 세계는 우리 집 한가운데서 시작하지만 전혀 다른 세계였다.",
        "어둠과 감정이 요동치는 세계이다.",
        "이곳에서는 거칠고도 강렬한 감정이 소용돌이친다.",
        "이 세계는 미스터리와 강한 에너지가 넘친다.",
        "깊은 어둠 속에서도 진실을 찾을 수 있다."
    ];

    let whiteIndex = 0;
    let blackIndex = 0;
    let isExpanded = false; // Track if a section is expanded

    function changeText(textElement, textArray, indexVar) {
        textElement.classList.add("hidden-text"); // Start fade-out
        setTimeout(() => {
            textElement.textContent = textArray[indexVar]; // Change text
            textElement.classList.remove("hidden-text"); // Fade in
        }, 500); // Wait for fade-out to finish
    }

    whiteSection.addEventListener("click", function () {
        if (!isExpanded) {
            // First click: Expand to full screen
            document.body.style.background = "white";
            whiteSection.classList.add("expanded");
            blackSection.classList.add("hidden");
            isExpanded = true;
        } else {
            // Next clicks: Change text inside white section
            whiteIndex = (whiteIndex + 1) % whiteTexts.length;
            changeText(whiteText, whiteTexts, whiteIndex);
        }
    });

    blackSection.addEventListener("click", function () {
        if (!isExpanded) {
            // First click: Expand to full screen
            document.body.style.background = "black";
            blackSection.classList.add("expanded");
            whiteSection.classList.add("hidden");
            isExpanded = true;
        } else {
            // Next clicks: Change text inside black section
            blackIndex = (blackIndex + 1) % blackTexts.length;
            changeText(blackText, blackTexts, blackIndex);
        }
    });
});
