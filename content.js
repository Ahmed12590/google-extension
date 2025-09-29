console.log("Motivational Quotes Extension Loaded!"); // Debugging log

const quotes = [
  "Believe in yourself and all that you are.",
  "The future depends on what you do today.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Check if the quote already exists
if (!document.getElementById("motivation-quote")) {
  const quoteContainer = document.createElement("div");
  quoteContainer.id = "motivation-quote";
  quoteContainer.style.position = "fixed";
  quoteContainer.style.top = "20px";
  quoteContainer.style.right = "20px";
  quoteContainer.style.padding = "15px";
  quoteContainer.style.backgroundColor = "#ffeb3b";
  quoteContainer.style.color = "#333";
  quoteContainer.style.fontSize = "18px";
  quoteContainer.style.borderRadius = "8px";
  quoteContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  quoteContainer.style.zIndex = "10000";
  quoteContainer.style.width = "300px";

  const quoteText = document.createElement("div");
  quoteText.textContent = randomQuote;

  const developerCredit = document.createElement("div");
  developerCredit.textContent = "Developed by Ahmed";
  developerCredit.style.fontSize = "14px";
  developerCredit.style.marginTop = "10px";
  developerCredit.style.color = "#555";
  developerCredit.style.textAlign = "right";

  quoteContainer.appendChild(quoteText);
  quoteContainer.appendChild(developerCredit);

  document.body.appendChild(quoteContainer);

  setTimeout(() => {
    quoteContainer.remove();
  }, 5000);
}
