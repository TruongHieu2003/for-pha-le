function showLove() {
    alert("Anh yêu em nhiều hơn những gì anh từng thể hiện.");
}

function openChapter(number) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    if (number === 1) {
        text.innerHTML = `
        <!-- DÁN NỘI DUNG CHAPTER 1 Ở ĐÂY -->
        <p>Viết nội dung chương 1 ở đây...</p>
        `;
    }

    if (number === 2) {
        text.innerHTML = `
        <!-- DÁN NỘI DUNG CHAPTER 2 Ở ĐÂY -->
        <p>Viết nội dung chương 2 ở đây...</p>
        `;
    }

    if (number === 3) {
        text.innerHTML = `
        <!-- DÁN NỘI DUNG CHAPTER 3 Ở ĐÂY -->
        <p>Viết nội dung chương 3 ở đây...</p>
        `;
    }

    if (number === 4) {
        text.innerHTML = `
        <!-- DÁN NỘI DUNG CHAPTER 4 Ở ĐÂY -->
        <p>Viết nội dung chương 4 ở đây...</p>
        `;
    }

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
