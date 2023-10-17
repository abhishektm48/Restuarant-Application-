window.onload = function ()
{
    const toggle = document.getElementById('toggle-btn');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () =>
    {
     menu.classList.toggle('hidden');
    })
}