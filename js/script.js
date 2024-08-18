$(function(){

    $('.shopproductSlider').slick({
      rows: 3,
      slidesPerRow: 4,
      prevArrow: ".left",
      nextArrow: ".right",
    dots: true,
    dotsClass:"shopProductDots",
        responsive: [
          {
            breakpoint: 992,
            settings: {
                slidesPerRow: 3,
                rows: 2
            }
        },
        {
                breakpoint: 768,
          settings: {
              slidesPerRow: 2,
              rows: 3
          }
          },
          {
            breakpoint: 450,
            settings: {
                slidesPerRow: 1,
                rows: 3
            }
        }
      
        ]
        
    })
    
    
    })




 
 
 
 
 // *bootstrap tooltip* //

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

 
