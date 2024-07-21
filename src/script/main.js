const mobileAnimate = () => {
  const sideBar = document.getElementById('side-bar');
  const mobileView = document.getElementById('mobile-view');
  const listItem = document.getElementById('list-item');
  const closeItem = document.getElementById('close-item');

  const toggleFun = () => {
    mobileView.classList.toggle('hidden')
    mobileView.classList.toggle('flex')
  }

  sideBar.addEventListener('click', toggleFun);
  listItem.addEventListener('click', toggleFun);
  closeItem.addEventListener('click', toggleFun);
}

document.addEventListener('DOMContentLoaded', mobileAnimate);