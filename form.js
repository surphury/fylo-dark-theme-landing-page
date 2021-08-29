/* All HTMLElements have a '$' at the beginning */

const $form = document.getElementById('form'),
    $formWrapper = document.getElementById('formWrapper'),
    $emailInput = document.getElementById('emailInput');

const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$form.addEventListener('input', (e) => {
    e.preventDefault();
    console.log('fgwregfwef')
    if (!emailRegex.test($emailInput.value.trim())) {
        $formWrapper.setAttribute('invalid-email', 'Please enter a valid email adress');
    } else {
        $formWrapper.removeAttribute('invalid-email');
    }
})