const OpenButton = document.querySelector('.Menu-Icon');
const CloseButton = document.querySelector('.CloseBtn');
const OffsetMenuBar = document.querySelector('.Offsetbar');
const BandB = document.querySelector('.blackandblur');

OpenButton.addEventListener('click',function(e){
    e.preventDefault();
    OffsetMenuBar.classList.add('active');
    BandB.classList.add('actblack');
});
CloseButton.addEventListener('click',function(e){
    e.preventDefault();
    OffsetMenuBar.classList.remove('active');
    BandB.classList.remove('actblack');
})


const forparaAni = document.querySelector('.ForParaAni');
const paraspan = document.querySelectorAll('.AboutMe .Para span');
const para = document.querySelector('.Para');

forparaAni.addEventListener('mouseover', () => {
    paraspan.forEach(span => {
        
        span.style.transition = 'color 0.5s'
        span.style.color = 'white';
    });
});

forparaAni.addEventListener('mouseout',() =>{
    paraspan.forEach(span =>{
        span.style.color = '';
    })
})

para.addEventListener('mouseover',() => {
    paraspan.forEach(span => {
        span.style.transition = 'color 0.5s';
        span.style.color='white';
    });
});
para.addEventListener('mouseout',() => {
    paraspan.forEach(span => {
        span.style.color='';
    });
});




/** Blurring and scaling of squares when hovering over it. */
const ForHoveringOverme = document.querySelector('.me');
const ForSquares = document.querySelector('.squares');
ForHoveringOverme.addEventListener('mouseover', () =>{
    
            ForSquares.style.scale = '0.9';
            ForSquares.style.filter='blur(5px)';
            ForSquares.style.transition='scale 0.5s, filter 0.5s';
        
            paraspan.forEach(span => {    
                span.style.transition = 'color 0.5s'
                span.style.color = 'white';
            });
               
})
ForHoveringOverme.addEventListener('mouseout',() =>{
    ForSquares.style.scale='1';
    ForSquares.style.filter='blur(0)';

    paraspan.forEach(span =>{
        span.style.color = '';
    })

})
ForHoveringOverme.addEventListener('mousedown',() =>{
    ForSquares.style.scale='1';
    ForSquares.style.filter='blur(0)';
})


ForHoveringOverme.addEventListener('touchstart',function(event){
    ForSquares.style.scale = '0.9';
    ForSquares.style.filter='blur(5px)';
    ForSquares.style.transition='scale 0.5s, filter 0.5s';
    
    paraspan.forEach(span => {    
        span.style.transition = 'color 0.5s'
        span.style.color = 'white';
    });
})
ForHoveringOverme.addEventListener('touchend',function(event){
    ForSquares.style.scale='1';
    ForSquares.style.filter='blur(0)';

    paraspan.forEach(span =>{
        span.style.color = '';
    })
});


/*Animation for squares on scroll*/
const squares=document.getElementById('AnimatedSquares');
const GetGreen=document.getElementById('idForGreen');
const GetWhite=document.getElementById('idForWhite');
const GetBlue=document.getElementById('idForBlue');

const HideWebDeveloperArea = document.getElementById('HideWDWhenScroll');
const BlackHeader=document.getElementById('BH');

const STA=document.getElementById('SeTAr');


/*Need to update jumping problem of squares */

function handleOrientationChange(mq){

    if(mq.matches){
        /**Landscape Orientation */
       
        window.addEventListener('scroll',()=>{
            const ScrollPosition=window.scrollY;
        
            if(ScrollPosition>400){

                BlackHeader.style.display='none';

                ForHoveringOverme.classList.add('BlurandHideme');
        
                ForSquares.style.scale='1';
                ForSquares.style.filter='blur(0)';

                squares.classList.add('AnimateSquresonScroll');
                GetGreen.classList.add('GreenToService');
                GetWhite.classList.add('WhiteToService');
                GetBlue.classList.add('BlueToService');

                squares.style.transition='transform 1s, filter 0.5s';
                
                HideWebDeveloperArea.style.display='none';

                STA.classList.add('HideandDisplaySTA');
                
            }
            else{

                BlackHeader.style.display='block';
                HideWebDeveloperArea.style.display='block';
                
                ForHoveringOverme.classList.remove('BlurandHideme');
        
                squares.classList.remove('AnimateSquresonScroll');
                GetGreen.classList.remove('GreenToService');
                GetWhite.classList.remove('WhiteToService');
                GetBlue.classList.remove('BlueToService');

                STA.classList.remove('HideandDisplaySTA');
                
        
            }
        
        });
        


    }
    else{
        /**Portrait Orientation */
        


    }

}

const landscapeQuery = window.matchMedia("(orientation:landscape)");
landscapeQuery.addListener(handleOrientationChange);
handleOrientationChange(landscapeQuery);
