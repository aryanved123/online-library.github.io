document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('#team li');
    let delay = 0;
    teamMembers.forEach(member => {
        setTimeout(() => {
            member.style.opacity = 1;
            member.style.transform = 'translateY(0px)';
        }, delay);
        delay += 100;
    });

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const info = document.createElement('p');
            info.textContent = 'More information coming soon...';
            if (!member.querySelector('p')) {
                member.appendChild(info);
                localStorage.setItem('lastClickedMember', member.textContent);
            } else {
                member.removeChild(member.querySelector('p'));
            }
        });
    });

    const lastClicked = localStorage.getItem('lastClickedMember');
    if (lastClicked) {
        const memberToOpen = Array.from(teamMembers).find(member => member.textContent.includes(lastClicked));
        if (memberToOpen && !memberToOpen.querySelector('p')) {
            const info = document.createElement('p');
            info.textContent = 'More information coming soon...';
            memberToOpen.appendChild(info);
        }
    }
});
