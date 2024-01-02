//Accent Marker JS code
const accentedTextElement = document.getElementById('accentedText');

function displayPitchAccent(text) {
  let accentedHTML = '';
  const morae = text.split(' '); // Assuming space-separated morae

  for (const mora of morae) {
    const tone = getTone(mora); // Function to determine high or low tone

    if (tone === 'high') {
      accentedHTML += `<span class="high-tone">${mora}</span> `;
    } else if (tone === 'low') {
      accentedHTML += `<span class="low-tone">${mora}</span> `;
    } else {
      accentedHTML += mora + ' ';
    }
  }

  accentedTextElement.innerHTML = accentedHTML;
}

function getTone(mora) {
  // Replace this function with your logic to determine the pitch accent of the mora
  // You might need a dictionary or API to get the pitch accent information for each mora.
  // For this example, I'm assuming that words ending in 'ん' (n) are high-tone, and the rest are low-tone.
  return mora.endsWith('ん') ? 'high' : 'low';
}

// Example usage
const japaneseText = 'こんにちは'; // Replace this with your Japanese text
displayPitchAccent(japaneseText);