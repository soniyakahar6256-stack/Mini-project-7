const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
     "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
]

const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a fantastic problem-solver.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're incredibly hardworking.",
    "You have a wonderful personality.",
    "You make people feel special.",
    "You're stronger than you think.",
    "Your ideas are brilliant.",
    "You have an amazing talent.",
    "You're a true inspiration.",
    "Your confidence is admirable.",
    "You're one of a kind.",
    "You have a beautiful soul.",
    "You never give up easily.",
    "You're incredibly genuine.",
    "You make every moment memorable.",
    "Your energy is amazing.",
    "You're capable of achieving great things.",
    "The world is lucky to have you."
]

const predictions = [
    "You will become a crorepati!",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected—great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "You will achieve something you once thought impossible.",
    "A new friendship will bring happiness into your life.",
    "Your future is brighter than you can imagine.",
    "You will discover a talent you never knew you had.",
    "Financial success is heading your way.",
    "You will overcome every obstacle in your path.",
    "An exciting new chapter is about to begin.",
    "Your patience and dedication will bring amazing results.",
    "One day, you will look back and be proud of yourself."
]; 

// size 20
const victimCardCompliments = [
    "You are an amazing person.",
    "Your smile makes everyone's day brighter.",
    "You have a beautiful heart.",
    "You deserve all the happiness in the world.",
    "You are stronger than you think.",
    "Your kindness makes you special.",
    "You have a wonderful personality.",
    "You make people feel valued.",
    "You are truly one of a kind.",
    "Your energy is contagious.",
    "You have the power to inspire others.",
    "You are loved more than you know.",
    "You make the world a better place.",
    "You are incredibly talented.",
    "Your presence is a gift.",
    "You have an amazing sense of humor.",
    "You are someone's reason to smile.",
    "You deserve endless success.",
    "You are beautiful inside and out.",
    "Never forget how special you are."
];

const recommendations = [
    "Believe in yourself, even when things get difficult.",
    "Never stop learning new things.",
    "Take risks and step outside your comfort zone.",
    "Always be kind to yourself.",
    "Focus on your goals, not your distractions.",
    "Surround yourself with positive people.",
    "Don't be afraid to make mistakes.",
    "Work hard and stay consistent.",
    "Take care of your mental health.",
    "Be patient with your progress.",
    "Celebrate your small achievements.",
    "Learn from your failures.",
    "Stay curious about the world.",
    "Don't compare your journey with others.",
    "Trust your instincts.",
    "Make time for the things you love.",
    "Keep a positive mindset.",
    "Be grateful for what you have.",
    "Step out of your comfort zone.",
    "Never underestimate your potential.",
    "Choose happiness whenever you can.",
    "Be honest with yourself and others.",
    "Keep chasing your dreams.",
    "Learn to say no when necessary.",
    "Take breaks when you need them.",
    "Be open to new opportunities.",
    "Don't let fear stop you.",
    "Invest in yourself every day.",
    "Stay humble and keep growing.",
    "Make every day count."
];

const form = document.getElementById("astroForm");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const name = document.getElementById("name").value;
   const surname = document.getElementById("surname").value;
   const day = parseInt(document.getElementById("day").value);
   const month = parseInt(document.getElementById("month").value);
   const year= parseInt(document.getElementById("year").value);
  const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}.
  compliments ${compliments[day-1]}. ${victimCardCompliments[year%20]}. 
  ${recommendations[(day*month)%30]}.
  predictions ${predictions[(name.length*surname.length)%20]}`;
  document.getElementById("result").textContent=text;

  
});