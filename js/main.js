const progressElement = document.getElementById('user-progress');
const progressElement2 = document.getElementById('user-progress2');
const hiddenBlockOne = document.querySelector('.hidden-block');
const hiddenBlockTwo = document.querySelector('.hidden-block2');

function onProgress(time, progress, hiddenElement) {
    let start = 0;
    let interval = Math.round(time * 1000 / 100);
    let intervalId = setInterval(function() {
        if(start > 100) {
            clearInterval(intervalId);
            hiddenElement.style.display = 'block';
        } else {
            progress.value = start;
        }
        start++;
    }, interval);
}

onProgress(3, progressElement, hiddenBlockOne);

onProgress(5, progressElement2, hiddenBlockTwo);
