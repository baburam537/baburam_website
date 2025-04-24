// Welcome message in console
console.log("Welcome to Baburam Mallah's Personal Website!");

// 1. Display current date in all footers
(function showDate() {
  const today = new Date();
  document.getElementById('currentDate').innerText = today.toDateString();
})();

// 2. This function is for show the Fun Fact on Home page
(function displayFunFact() {
  const funFacts = [
    "I can ride bikes across hills!",
    "I love swimming in rivers!",
    "Football keeps me energetic!",
    "Traveling opens my mind!",
    "Spending time in nature brings me peace!"
  ];
  const factDiv = document.getElementById('funFact');
  if (factDiv) {
    factDiv.innerText = "Fun Fact: " + funFacts[Math.floor(Math.random() * funFacts.length)];
  }
})();

// 3. Populate Skills list on Resume page
(function showSkills() {
  const skills = [
    "HTML & CSS Fundamentals",
    "JavaScript Basics",
    "Responsive Design (Flex/Grid)",
    "Git & GitHub Version Control",
    "C++ Fundamentals",
    "Teamwork & Communication"
  ];
  const skillsList = document.getElementById('skillsList');
  if (skillsList) {
    skills.forEach(skill => {
      let li = document.createElement('li');
      li.innerText = skill;
      skillsList.appendChild(li);
    });
  }
})();

// 4. Alert on hover over hobby images
//(function addHoverEffect() {
  //const imgs = document.querySelectorAll('.hobby-img');
  //imgs.forEach(img => {
    //img.addEventListener('mouseover', () => {
     // alert('I love this hobby!');
    //});
  //});
//})();
