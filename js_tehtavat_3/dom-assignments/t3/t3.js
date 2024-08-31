'use strict';

const checkInfo = () => {
  const target = document.getElementById('target');

  const browserInfo = navigator.userAgent;

  const osName = navigator.platform;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const finnishDateTime = new Date().toLocaleDateString('FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const dateNode = document.createElement('p');
  dateNode.innerHTML = finnishDateTime;

  const infoItems = [
    `Browser info: ${browserInfo}`,
    `Operating system: ${osName}`,
    `Screen width: ${screenWidth}`,
    `Screen height: ${screenHeight}`,
    `Available screen width: ${windowWidth}`,
    `Available screen height: ${windowHeight}`,
    `Current date and time: ${finnishDateTime}`,
  ];

  console.log('Info items:', infoItems);

  infoItems.forEach((infoItems) => {
    const p = document.createElement('p');
    p.innerHTML = infoItems;
    target.appendChild(p);
  });
};

checkInfo();
