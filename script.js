function generateArchScript() {
    const update = document.querySelector('input[name="update"]:checked').value;
    const apps = Array.from(document.querySelectorAll('.app:checked')).map(el => el.value);
    const custom_apps = Array.from(document.querySelectorAll('.custom-app:checked')).map(el => el.value);

    let script = 'echo "Generated with PackaScript ^^ (https://packascript.andus.dev/)" && sudo pacman -S';
    script += update === 'yes' ? 'yu ' : ' ';
    script += apps.join(' ');
    script += custom_apps.join('');

    document.getElementById('install-script').value = script;
}
function generateDebianScript() {
    const update = document.querySelector('input[name="update"]:checked').value;
    const apps = Array.from(document.querySelectorAll('.app:checked')).map(el => el.value);

    let script = 'echo "Generated with PackaScript ^^ (https://packascript.andus.dev/)" && sudo apt ';
    script += update === 'yes' ? 'update -y && sudo apt ' : '';
    script += 'install -y ' + apps.join(' ');

    document.getElementById('install-script').value = script;
}

document.addEventListener('DOMContentLoaded', function() {
    const nosrcCheckboxes = document.querySelectorAll('.nosrc');

    nosrcCheckboxes.forEach(checkbox => {
        const message = document.getElementById('nosrcmsg');
        message.classList.add('message');
        message.textContent = "This app is not open source, meaning users can't see it's code. It's not always bad, but just be cautious <3.";

        checkbox.addEventListener('mouseover', () => {
            message.style.display = 'block';
        });

        checkbox.addEventListener('mouseout', () => {
            message.style.display = 'none';
        });
    });
});