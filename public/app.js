const container = document.getElementById('card-container');

container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
});

const faqAsk = document.querySelector('.ask');
const btnAskList = document.querySelectorAll('.btn-ask');
const deskAskList = document.querySelectorAll('.deks-ask');
const iconAsk = document.querySelectorAll('.fas');

btnAskList.forEach(function (btnAsk, index) {
    btnAsk.addEventListener('click', function () {
        deskAskList[index].classList.toggle('hidden');
        iconAsk[index].classList.toggle('fa-chevron-up');
        iconAsk[index].classList.toggle('fa-chevron-down');
    });
});




