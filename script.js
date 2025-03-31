const facts = [
    "You bet 10k on that you will grow taller than Aygerim",
    "We used to eat icecream together after football training",
    "You said that Madara was third hokage",
    "You used to love Deidara",
    "We played football almost everyday",
    "How you me and Aiseri went to Khan Shatyr before I went to tournament",
    "We played fifa mobile together",
    "We went to anticafe on bikes",
    "We were Mega on the New year right before your flight to America",
    "pull-up bar fall onto your head",
    "We watched blue-lock on your computer"
  ];
  
  function RememberWhen() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
  }