function copy(elem) {
  copyTextToClipboard(elem.innerHTML);
}

function copyTextToClipboard(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert(`Copied: \n ${text}`);
}

function elem(tag, content, attr = {}) {
  const attributeString = Object.keys(attr)
    .map(key => `${key}=${attr[key]}`)
    .join(' ');

  return `<${tag} ${attributeString}>${content}</${tag}>`;
}

function detailsElem(title, content, attr = {}) {
  const summary = elem('summary', title);
  const details = elem('details', summary + content, attr);
  return details;
}

function scrollToUrlHash(notFoundMessage = '') {
  console.log('ddd')
  if (window.location.hash) {
    let targetId = window.location.hash.substring(1);
    let target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView();
      target.classList.add('targeted');
    } else { 
      if (notFoundMessage) {
        notFoundMessage = notFoundMessage.replace('__target__', targetId);
        alert(notFoundMessage);
      }
    }
  }
}

console.log('main.js loaded');