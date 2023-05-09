function handleClick(buttonClass, titleClass, contentClass) {
    const buttonAudienseItem = document.querySelector(`.audience-item.${buttonClass}`);
    const title = document.querySelector(`.${titleClass} .tab-item-title`);
    const content = document.querySelector(`.${contentClass} .tab-item-content`);

    function toggleActive() {
        title.classList.toggle('active');
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    }

    buttonAudienseItem.addEventListener('click', toggleActive);
}

handleClick('audience-item-veterans', 'veterans', 'veterans');
handleClick('audience-item-IntDisplacedPersons', 'IntDisplacedPersons', 'IntDisplacedPersons');
handleClick('audience-item-PeopleWithDisabilities', 'PeopleWithDisabilities', 'PeopleWithDisabilities');
handleClick('audience-item-kids', 'kids', 'kids');
