const form = document.querySelector('.together-form');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close');
const emailInput = form.elements.email;


const emailWrapper = document.createElement('div');
emailWrapper.style.position = 'relative';
emailInput.parentNode.insertBefore(emailWrapper, emailInput);
emailWrapper.appendChild(emailInput);


const successIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
successIcon.setAttribute('width', '14');
successIcon.setAttribute('height', '14');
successIcon.style.position = 'absolute';
successIcon.style.right = '17px';
successIcon.style.top = '130px';
successIcon.style.transform = 'translateY(-50%)';
successIcon.style.display = 'none';
successIcon.style.stroke = 'var(--accet-green)';
successIcon.style.fill = 'var(--accet-green)';

const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
useElement.setAttribute('href', './img/icons.svg#vector');
successIcon.appendChild(useElement);

emailWrapper.appendChild(successIcon);


const errorText = document.createElement('p');
errorText.textContent = 'Invalid email, try again';
errorText.style.color = 'red';
errorText.style.fontSize = '14px';
errorText.style.marginTop = '8px';
errorText.style.display = 'none';
errorText.style.textTransform = 'none'; 


emailWrapper.parentNode.insertBefore(errorText, emailWrapper.nextSibling);


emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value.trim();
  const validEmail = /^[^\s@]+@gmail\.com$/.test(emailValue);

  if (validEmail) {
    successIcon.style.display = 'block';
    errorText.style.display = 'none';
  } else {
    successIcon.style.display = 'none';
    if (emailValue.length > 0) {
      errorText.style.display = 'block';
    } else {
      errorText.style.display = 'none';
    }
  }
});


const openModal = () => {
  modalBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; 
};

// Закриття модалки
const closeModal = () => {
  modalBackdrop.classList.add('hidden');
  document.body.style.overflow = ''; 
};


form.addEventListener('submit', async event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const comment = form.elements.comment.value.trim();

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, comment }),
    });

    if (!response.ok) {
      throw new Error('Failed to send request');
    }

    openModal();
    form.reset(); 
    successIcon.style.display = 'none';
    errorText.style.display = 'none';
  } catch (error) {
    alert('Something went wrong. Please correct your inputs and try again.');
    console.error('Error:', error);
  }
});


modalCloseBtn.addEventListener('click', closeModal);


modalBackdrop.addEventListener('click', event => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
    closeModal();
  }
});
