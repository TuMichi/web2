const source = document.querySelector('#source');
const target = document.querySelector('#target');

source.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
})

target.addEventListener('dragover', (e) => {
        e.preventDefault();
})

target.addEventListener('drop', (e) => {
        e.preventDefault();
        target.classList.remove('dragover');
        const sourceID = e.dataTransfer.getData('text/plain');
        e.target.appendChild(document.getElementById(sourceID));
})