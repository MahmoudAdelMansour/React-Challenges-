async function handleFormSubmit(e){
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage)
    try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch (err)
    {
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}
function handleTextareaChange(){
    if (textarea.value.length > 0){
        enable(button);
    } else {
        disable(button);
    }

}
function show(element){
    element.style.display = '';

}
function hide(element){
    element.style.display = 'none';
}
function enable(element){
    element.disabled = false;
}
function disable(element){
    element.disabled = true;
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === 'istanbul') {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }
        }, 1500);
    });
}

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;
