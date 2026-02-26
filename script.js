function showLove() {
    alert("Anh yêu em nhiều hơn những gì anh từng thể hiện.");
}

function openChapter(number) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    if (number === 1) {
        text.innerHTML = `

        <h2 class="chapter-title">Chương 1 — Vì Anh Thích Em</h2>

<p>
Thật ra… cũng không vì lý do gì hết.  
Anh thấy thích em thôi.  
Anh chỉ đơn giản là muốn em làm người yêu anh.
</p>

<p>
Những ngày tháng đầu… công nhận là vô tư thật ha.  
Anh không suy nghĩ gì nhiều.  
Anh chỉ muốn làm em cười thôi.
</p>

<p>
Anh chỉ muốn mỗi ngày đi học đều được thấy em.  
Được đi căn tin chung.  
Ăn chung. Uống chung.
</p>

<p>
Anh thích nhất là lúc em xem anh đá banh.  
Có lần anh nghe trên lầu có người kêu tên anh.  
Anh không quay lên — vì anh biết đó không phải giọng em.
</p>

<p>
Nhưng anh biết…  
Em đang nhìn anh.
</p>

<p class="highlight">
Tóm lại là…  
ANH YÊU EM.
</p>
        
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

