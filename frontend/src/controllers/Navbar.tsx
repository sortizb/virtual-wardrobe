function showMobileOptions() {
    const optionsContainer = document.getElementById('mobile_options') as HTMLElement;
    optionsContainer.style.visibility = 'visible';
}

function hideMobileOptions() {
    const optionsContainer = document.getElementById('mobile_options') as HTMLElement;
    optionsContainer.style.visibility = 'hidden';
}

function switchTo(event: React.MouseEvent<HTMLElement>) {
    const clicked = event.currentTarget as HTMLElement;
    const targetRoute = clicked.getAttribute('data-target');
    console.log(`Go to ${targetRoute}`);
}

function logout() {
    console.log("Successfully LoggedOut")
}

export { showMobileOptions, hideMobileOptions, switchTo, logout};