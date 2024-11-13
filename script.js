let encouragements = {};

fetch('encouragements.json')
    .then(response => response.json())
    .then(data => {
        encouragements = data;
    })
    .catch(error => console.error("Error loading encouragements:", error));

let selectedCategory = "";

function selectCategory(category) {
    selectedCategory = category;
    document.getElementById("result").innerText = `คุณเลือกหมวดหมู่: ${category}`;
}

function getRandomEncouragement() {
    if (!selectedCategory) {
        document.getElementById("result").innerText = "กรุณาเลือกหมวดหมู่ก่อน";
        return;
    }

    const selectedEncouragements = encouragements[selectedCategory];
    const randomIndex = Math.floor(Math.random() * selectedEncouragements.length);
    const randomEncouragement = selectedEncouragements[randomIndex];

    document.getElementById("result").innerText = randomEncouragement;
}
