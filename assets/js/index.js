let titles = document.querySelectorAll('.faqs .faq h3');
titles.forEach((title) => {
title.addEventListener('click',()=> {
   let p = title.nextElementSibling;
    title.classList.toggle('active')
   p.classList.toggle('active')
   
})
})


