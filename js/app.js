let tabs = document.querySelectorAll('.tab')
let spans = document.querySelectorAll('.span')

tabs.forEach(tab =>{
    tab.addEventListener('click',function(){
        tabs.forEach(el =>el.classList.remove('active'));
        tab.classList.add('active')
        let x = tab.children
        let y = x[0].firstChild;
        spans.forEach(item => item.classList.remove('activo'))
        y.classList.add('activo')
        
    })
})

