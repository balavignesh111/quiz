'use strict';

const submitBtnEle = document.querySelector('.btn-submit');
const reloadBtnEle = document.querySelector('.btn-reload');
const displayQuestionElement = document.querySelectorAll('.question-box h2');
const displayAnswerElement = document.querySelectorAll('.answer-box>div');
const resultBoxElement = document.querySelector('.result-box');
const scoreElement = document.querySelector('.mark');
// gv
const arr= ['javascript','Cascading Style Sheets','Hypertext Markup Language','1995'];

let count = 0;
let index = 0;


function init(){
  index = 0;
  count = 0;
  displayQuestionElement[0].style.display = 'block';
  displayAnswerElement[0].style.display = 'block';
  resultBoxElement.style.display = "none";
  submitBtnEle.style.display = 'inline';
  reloadBtnEle.style.display = 'none';
}

const hideAndDisplay = function(element,index){
  element[index-1].style.display = 'none';
  element[index].style.display = 'block';
}

const score = function(){ 
  displayQuestionElement[index-1].style.display = "none";
  displayAnswerElement[index-1].style.display = "none"
  resultBoxElement.style.display = "block";
  submitBtnEle.style.display = 'none';
  reloadBtnEle.style.display = 'inline';
  scoreElement.textContent = count;
}

const result = function(input){
  if(input !== null){
    index++;
    for(const val in arr){
      if(arr[val] === input.value){
        count++;
      }
    }
    if(index < displayQuestionElement.length){
      hideAndDisplay(displayQuestionElement,index);
      hideAndDisplay(displayAnswerElement,index);
    }else if((index === displayQuestionElement.length) || (index >= displayQuestionElement.length)){
      score();
    }
  }
}

submitBtnEle.addEventListener('click',()=>{
  result(document.querySelector('input[name = "option"]:checked'))
})

reloadBtnEle.addEventListener('click',()=>{
  init();
});

init();