// Envelope Interaction
const envelope = document.getElementById('envelope');
const timeline = document.getElementById('timeline');
const preProposal = document.getElementById('pre-proposal');
const proposal = document.getElementById('proposal');
const heartButton = document.getElementById('heart-button');
const clickableText = document.querySelector('.clickable-text');

clickableText.addEventListener('click', () => {
  envelope.style.height = '100vh';
  envelope.style.width = '100vw';
  envelope.style.margin = '0';
  envelope.style.borderRadius = '0';
  document.body.style.overflow = 'auto';

  setTimeout(() => {
    envelope.style.display = 'none';
    timeline.style.display = 'block';
    animateCards();
  }, 1000);
});

// Timeline Card Animation
function animateCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 500);
  });
}

// Heart Button Interaction
heartButton.addEventListener('click', () => {
  timeline.style.display = 'none';
  preProposal.style.display = 'block';
});

// Pre-Proposal Interaction
const proceedBtn = document.getElementById('proceed-btn');
proceedBtn.addEventListener('click', () => {
  preProposal.style.display = 'none';
  proposal.style.display = 'block';
});

// Proposal Interaction
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const finalMessage = document.getElementById('final-message');
const emojiApproval = document.getElementById('emoji-approval');

yesBtn.addEventListener('click', () => {
  finalMessage.style.display = 'none'; // Hide the proposal buttons
  emojiApproval.style.display = 'block'; // Show the emoji approval message
});

noBtn.addEventListener('mouseover', () => {
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${Math.random() * 80 + 10}%`;
  noBtn.style.top = `${Math.random() * 80 + 10}%`;
});