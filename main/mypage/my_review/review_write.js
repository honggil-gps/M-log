const modal = document.querySelector('.modal');
const btnOpenModal1=document.querySelector('.openModal1');
const btnOpenModal2=document.querySelector('.openModal2');
const btnOpenModal3=document.querySelector('.openModal3');
const btnOpenModal4=document.querySelector('.openModal4');
const btnOpenModal5=document.querySelector('.openModal5');
const btnOpenModal6=document.querySelector('.openModal6');
const btnCloseModal=document.querySelector('.closeModal');
const btnsavereview1=document.querySelector(".reviewbtn1")
const btnsavereview2=document.querySelector(".reviewbtn2")


btnOpenModal1.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 엑시트" 
});
btnOpenModal2.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 인셉션"
});
btnOpenModal3.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 매트릭스"
});
btnOpenModal4.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 아바타"
});
btnOpenModal5.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 괴물"
});
btnOpenModal6.addEventListener("click", ()=>{
  modal.style.display="flex";
  let movietitle = document.querySelector('.modal h5')
  console.log(movietitle)
  movietitle.innerText = "리뷰 작성 중인 영화 : 코코"
});

btnCloseModal.addEventListener("click", ()=>{
  modal.style.display="none";
})

btnsavereview1.addEventListener("click", () => {
  alert("임시저장되었습니다");
})

btnsavereview2.addEventListener("click", () => {
  alert("저장되었습니다");
})