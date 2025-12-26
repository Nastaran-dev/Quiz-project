const bodyh = document.body.scrollHeight
    const star = document.getElementById('star')
    for(let i =0 ; i<500 ; i++){
      let starbeauty = document.createElement('div')
       starbeauty.classList.add('star')
      starbeauty.style.top=Math.random()*bodyh + 'px'
      starbeauty.style.left=Math.random()*100 + '%'
     star.appendChild(starbeauty)
    }
     
     
   const question = document.getElementById("question");
    const answer = document.querySelectorAll("label");
    const btn = document.querySelector("button");
    const id = document.querySelector("b");
    const _alert= document.getElementById('scoreAlertPersian')
    const closealert=document.getElementById('closealert')
    const scorepercent=document.getElementById('scorepercent')
    const tahlil = document.getElementById('tahlil')
    const countquestion = document.getElementById('countquestion')
    const showscore = document.getElementById('showscore')
    count = 0
    turn = 0;
    score = 0;
    num = 0;
     calckquestion();
    function calckquestion() {
      answer.forEach((item) => {
        item.classList.remove("true" , 'false' , 'active');
        const radio = item.querySelector('input[type="radio"]')
        radio.checked= false
      });
      if (turn >= data.length) {
       _alert.style.display='flex'
        return;
      }
      question.innerText = data[turn].question;
      answer[0].querySelector('.text').innerText = data[turn].answer.ans1;
      answer[1].querySelector('.text').innerText = data[turn].answer.ans2;
      answer[2].querySelector('.text').innerText = data[turn].answer.ans3;
      answer[3].querySelector('.text').innerText = data[turn].answer.ans4;
      turn++;
      count++
      countquestion.innerHTML=` ${count +'/'+ data.length}`
    
    }

     answer.forEach((val , i)=>{
    
        val.addEventListener('click' , ()=>{
                answer.forEach((item)=>{
            item.classList.remove('active')
        })
            num=i
              val.classList.add('active')
        })
      
    })

    function checkAnswer() {
      if (data[turn - 1].number == num) {
        answer[num].classList.add("true");
        score++
        showscore.innerHTML=score 
        scorepercent.innerHTML=score*100/20 +'%'
        if(score <=20 ){
          tahlil.innerHTML='عالی بود ! شما درک فوق العاده ای از این موضوع دارید .'
          scorepercent.style.color='green'
          if(score <=17){
          tahlil.innerHTML='خوب بود , اما با کمی تمرکز بیشتر می توانید به بهترین نتیجه برسید .'
           scorepercent.style.color='blue'
          }
        
          if(score <=12){
          tahlil.innerHTML='نتیجه فعلی نشان می دهد که برای رسیدن به تسلط کامل نیاز به تلاش بیشتری در این زمینه دارید ,ادامه دهید'
           scorepercent.style.color='red'
          }
        } 
       
      } else {
        answer[num].classList.add("false");
       answer[data[turn - 1].number].classList.add("true");
      }
      setTimeout(() => {
        calckquestion();
      }, 1000);
        console.log(score);
    }
    btn.addEventListener("click", checkAnswer);

    
     closealert.addEventListener('click'  , (val)=>{
       _alert.style.opacity='0'
       location.reload()
    })

  
  

  