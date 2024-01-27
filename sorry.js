function redirectToPage(answer) {
    const redirectUrl = answer === 'yes' ? 'flowerPage.html' : 'noForgivenessPage.html';
    window.location.href = 'yes.html';
}
