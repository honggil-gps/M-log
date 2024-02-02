document.addEventListener("DOMContentLoaded", function() {
    // HTML 문서가 로드되면 실행될 코드

    // 현재 추천한 사람 수를 저장할 변수
    var recommendedCount = 0;

    // 추천 버튼을 클릭할 때 실행될 함수
    function likeButtonClick(event) {
        // 기본 동작 중지
        event.preventDefault();

        // 추천한 사람 수 1 증가
        recommendedCount++;

        // 추천한 사람 수를 HTML에 반영
        updateRecommendedCount();

        // 애니메이션 클래스 추가
        addAnimationClass();

        // 애니메이션 종료 후 클래스 제거
        setTimeout(removeAnimationClass, 500);

        // 이 부분에 서버로 데이터를 보내는 등의 추가적인 로직을 넣을 수 있습니다.
    }

    // 추천한 사람 수를 HTML에 반영하는 함수
    function updateRecommendedCount() {
        var likeBtn = document.querySelector(".like-btn");
        likeBtn.innerHTML = '<i class="far fa-thumbs-up fa-3x"> </i><br/><b>추천한 사람 : ' + recommendedCount + '</b>';
    }

    // 애니메이션 클래스 추가 함수
    function addAnimationClass() {
        var thumbsUpIcon = document.querySelector(".like-btn .fa-thumbs-up");
        thumbsUpIcon.classList.add("animate-beat");
    }

    // 애니메이션 클래스 제거 함수
    function removeAnimationClass() {
        var thumbsUpIcon = document.querySelector(".like-btn .fa-thumbs-up");
        thumbsUpIcon.classList.remove("animate-beat");
    }

    // 추천 버튼에 이벤트 리스너 등록
    var likeBtn = document.querySelector(".like-btn");
    likeBtn.addEventListener("click", likeButtonClick);
});

  function goBack() {
    window.history.back();
  }