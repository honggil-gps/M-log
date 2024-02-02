function showToast() {
    var toastMessage = document.getElementById('toastMessage');
    toastMessage.style.display = 'block';

    setTimeout(function() {
        toastMessage.style.display = 'none';
    }, 2000); // 3000 milliseconds 후에 토스트 메시지를 숨깁니다 (원하는 시간으로 조정 가능)
}