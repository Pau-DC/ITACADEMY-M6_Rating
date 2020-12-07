////////// MAIN FUNCTIONS //////////
// DEFINICIÓ DE VARIABLES
let rating = 0;
let mouseOutsideRating = true;

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');

const screen = document.getElementById('main-content');

// FUNCIONS GENÈRIQUES
const printRating = (e) => {
  let rateNum = e.currentTarget.id.charAt(e.currentTarget.id.length-1);
  for(let i=1; i<=rateNum; i++ ){
    document.getElementById('s'+i).children[0].classList.remove("clean");
    document.getElementById('s'+i).children[0].classList.add("filled");
  }
}

const fixRating = (e) => {
  let rateNum = e.currentTarget.id.charAt(e.currentTarget.id.length-1);
  rating = rateNum;

  eraseRating(e); 

  for(let i=1; i<=rating; i++ ){
    document.getElementById('s'+i).children[0].classList.remove("clean");
    document.getElementById('s'+i).children[0].classList.add("filled");
  }
}

const eraseRating = (e) => {
  for(let i=1; i<=5; i++){
    if(i>rating){
      document.getElementById('s'+i).children[0].classList.remove("filled")
      document.getElementById('s'+i).children[0].classList.add("clean"); 
    }
  }
}

const deleteRating = (e) => {
  if(mouseOutsideRating){
    rating = 0;
    eraseRating(null);
  }
}

const updateText = () => {
  let text = "";
  rating==="1" ?  text=rating+" star" : text=rating+" stars";

  document.getElementById('rate-text').children[0].innerHTML = text;
}


// BUTON EVENT LISTENERS
s1.addEventListener('mouseover', (e) => { mouseOutsideRating = false; printRating(e)});
s1.addEventListener('click', (e) => { mouseOutsideRating = false; fixRating(e); updateText()});
s1.addEventListener('mouseout', (e) => { mouseOutsideRating = true; eraseRating(e)});

s2.addEventListener('mouseover', (e) => { mouseOutsideRating = false; printRating(e)});
s2.addEventListener('click', (e) => { mouseOutsideRating = false; fixRating(e); updateText()});
s2.addEventListener('mouseout', (e) => { mouseOutsideRating = true; eraseRating(e)});

s3.addEventListener('mouseover', (e) => { mouseOutsideRating = false; printRating(e)});
s3.addEventListener('click', (e) => { mouseOutsideRating = false; fixRating(e); updateText()});
s3.addEventListener('mouseout', (e) => { mouseOutsideRating = true; eraseRating(e)});

s4.addEventListener('mouseover', (e) => { mouseOutsideRating = false; printRating(e)});
s4.addEventListener('click', (e) => { mouseOutsideRating = false; fixRating(e); updateText()});
s4.addEventListener('mouseout', (e) => { mouseOutsideRating = true; eraseRating(e)});

s5.addEventListener('mouseover', (e) => { mouseOutsideRating = false; printRating(e)});
s5.addEventListener('click', (e) => { mouseOutsideRating = false; fixRating(e); updateText()});
s5.addEventListener('mouseout', (e) => { mouseOutsideRating = true; eraseRating(e)});

screen.addEventListener('click', (e) => { deleteRating(e); updateText() });

//loginBtn.addEventListener('click', loginBtnClicked);
//signupBtn.addEventListener('click', signupBtnClicked);




/*
// DEFINICIÓ DE VARIABLES A PARTIR DELS ELEMENTS DEL FORMULARI
const searchForm = document.getElementById('search-form');

const searchInp = document.getElementById('search')
const searchFdbk = document.getElementById('search-feedback');


const loginForm = document.getElementById('login-form');

const loginUsrInp = document.getElementById('login-usuari')
const loginUsrFdbk = document.getElementById('login-usuari-feedback');

const loginPassInp = document.getElementById('login-pass')
const loginPassFdbk = document.getElementById('login-pass-feedback');

const loginBtn = document.getElementById('login-button');

const signupForm = document.getElementById('signup-form');

const signupUsrInp = document.getElementById('signup-usuari')
const signupUsrFdbk = document.getElementById('signup-usuari-feedback');

const signupPassInp = document.getElementById('signup-pass')
const signupPassFdbk = document.getElementById('signup-pass-feedback');

const signupPassBisInp = document.getElementById('signup-passBis')
const signupPassBisFdbk = document.getElementById('signup-passBis-feedback');

const signupProvInp = document.getElementById('signup-provincia')
const signupProvFdbk = document.getElementById('signup-provincia-feedback');

const signupBtn = document.getElementById('signup-button');


// FUNCIONS GENÈRIQUES
const goToLoginScreen = (e) => {
  window.location.href = './login.html';
}

const goToSignupScreen = (e) => {
  window.location.href = './signup.html';
}

const whichPage = () => {
  const url = window.location.href;
  const page = url.slice(url.lastIndexOf('/')+1,url.indexOf('html')-1);
  return page;
}
      
const loginBtnClicked = (e) =>{
  if(whichPage() === 'login'){
    loginForm.addEventListener('submit',validateLoginForm);
  }else{
    goToLoginScreen(e);
  }
}

const signupBtnClicked = (e) =>{
  if(whichPage() === 'signup'){
    signupForm.addEventListener('submit',validateSignupForm);
  }else{
    goToSignupScreen(e);
  }
}

// BUTON EVENT LISTENERS
searchForm.addEventListener('submit',validateSearchForm);
loginBtn.addEventListener('click', loginBtnClicked);
signupBtn.addEventListener('click', signupBtnClicked);

*/