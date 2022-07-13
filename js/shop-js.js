
// 图片懒加载

// let imgs = document.querySelectorAll('img')

// const callback = entries => {
//     entries.forEach(e => {
//         // 值为真说明交叉
//         if(e.isIntersecting){
//             const img = e.target
//             // 获取自定义属性
//             const data_src = img.getAttribute('data-src')
//             // 设置src属性
//             img.setAttribute('src', data_src)
//             // 已经显示就卸载监听
//             observer.unobserve(img)
//         }
//     })
// }

// // 实例化
// const observer = new IntersectionObserver(callback)

// imgs.forEach(img => {
//     // 监听img是否交叉
//     observer.observe(img)
// });

var mySwiper = new Swiper ('.swiper', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        // el: '.swiper-scrollbar',
    },
    // 自动切换
    speed: 1000,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // 切换效果
    effect: 'cube',
    
})
    
// nav导航

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const select = document.querySelector('.banner-select')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    // select.style.height = 0
})


// main

// 下拉菜单区域

const select_menu_div = document.querySelectorAll('.select-menu-div')
const option_list = document.querySelectorAll('.option-list')
const option = document.querySelectorAll('.option')


// const select_menu = document.querySelector('.select-menu')
// const select_menu_div_all = document.querySelectorAll('.select-menu-div')

// select_menu_div.addEventListener('click',()=>{
//     // 追加类名，将盒子设置高度实现显示
//     option_list.classList.toggle('active')
//     // 上下图标切换
//     select_menu_div.querySelector('.icon-arrow-down').classList.toggle('icon-arrow-up')
    
// })
document.querySelectorAll('.select-menu-div').forEach((p)=>{
    p.addEventListener('click',()=>{
        // option_list.classList.toggle('active')
        // document.querySelectorAll('.option-list').forEach((option)=>{
            
        //     option.classList.toggle('active')
            
        // })
        p.nextElementSibling.classList.toggle('active')
        // 跟换图标
        p.querySelector('.icon-arrow-down').classList.toggle('icon-arrow-up')
        
    })
    
})



// 点击下拉框中的内容时，收起下拉框
option.forEach((option)=>{
    option.addEventListener('click',()=>{
        option_list.classList.toggle('active')
        option.querySelector('.icon-arrow-down').classList.toggle('icon-arrow-up')
    })
    
})

