const changeMessage = function() {
    const messageElement = document.querySelector('#heading');

    if (!messageElement) return;
    
    messageElement.innerText = 'ohno satoshi / sho sakura / aiba masaki / ninomiya kasunari / mastumoto jun';
}

const submitForm = function () {
    const frmName = document.querySelector('#frmText');
    const frmDate = document.querySelector('#frmDate');
    const frmPassword = document.querySelector('#frmPassword');

    console.log('name: ', frmName.value);
    console.log('date: ', frmDate.value);
    console.log('password: ', frmPassword.value);
    
}

