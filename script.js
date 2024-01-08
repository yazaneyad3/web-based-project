function showCoffeeDetails(coffeeType) {
    const content = document.getElementById('content');
    const coffee = coffeeDetails[coffeeType];

    content.innerHTML = `<h2>${coffee.title}</h2>
                         <img src="${coffee.image}" alt="${coffee.title}" style="max-width: 100%;">
                         <p>${coffee.history}</p>
                         <p><strong>Appropriate Time to Drink:</strong> ${coffee.timeToDrink}</p>`;

    // Add code to pop up a window with a metaphorical sentence about the user's current mood
    const moodMetaphor = getMoodMetaphor(coffeeType);
    alert(`For a ${coffeeType} mood: ${moodMetaphor}`);
}

function getMoodMetaphor(mood) {
    switch (mood) {
        case 'happy':
            return 'Sip the chilled essence of energy, as cold brew whispers promises of a revitalizing journey, urging you to savor the brisk dance of bold flavors that awaken your day';
        case 'sad':
            return 'Savor the liquid poetry of espresso, where each drop is a concentrated burst of intensity, a caffeinated sonnet that urges you to embrace the rich symphony of flavor, one potent sip at a time.';
        case 'dizzy':
            return 'Indulge in the machiato, a delightful harmony of contrasts where the bold espresso meets the velvety touch of frothy simplicity, inviting you to experience the perfect balance in every enticing sip.';
        case 'sick':
            return 'Embrace the smooth sophistication of a flat white, where the robust espresso whispers beneath a creamy canvas, inviting you to sip on a harmonious blend of strength and silkiness, a comforting refuge in every velvety mouthful.';
        case 'sleepy':
            return 'When feeling sleepy, cappuccino is your loyal companion, gently nudging you back to alertness.';
       
    }
}
function showMoodMetaphor(mood) {
    const moodMetaphor = getMoodMetaphor(mood);
    alert(`For a ${mood} mood: ${moodMetaphor}`);
}