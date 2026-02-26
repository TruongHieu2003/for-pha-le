function showLove() {
    alert("Anh yêu em nhiều hơn những gì anh từng thể hiện.");
}

function openChapter(number) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    if (number === 1) {
        text.innerHTML = `

        <h2 class="chapter-title">Vì Anh Thích Em</h2>

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

<p>
Vì anh dại dột thôi.  
Anh cứ giữ cái suy nghĩ là 2 đứa không hợp.
</p>

<p>
Nhiều chuyện nhỏ lẻ mà 2 bên giải quyết chưa xong  
nên nó thành ra vậy.
</p>

<p>
Anh cũng sợ…  
Sau này nếu mình được về chung nhà  
mà còn gặp những chuyện như vậy nữa  
thì rất khó.
</p>

<p>
Đôi lúc anh thấy em trẻ con lắm.  
Tự nhiên đưa cho anh ví dụ,  
rồi tự nhiên giận anh.
</p>

<p>
Anh là dạng người không có overthinking.  
Anh luôn tin tưởng em,  
nên anh thường không có suy nghĩ gì nhiều  
về chuyện người thứ 3 sẽ xuất hiện.
</p>

<p class="highlight">
Và tại sao anh lại bỏ đi cái suy nghĩ không hợp này…  
thì em đọc cái tiếp theo nha.
</p>


        `;
    }

    if (number === 3) {
        text.innerHTML = `
<p>
Anh nhận ra là anh muốn gì.
</p>

<p>
Anh sẽ thay đổi từng cái  
để hợp với em hơn.  
Anh sẽ tiếp thu  
và dịu dàng với em nhất.
</p>

<p>
Anh sẽ suy nghĩ cho cảm xúc của em nhiều hơn.
</p>

<p>
Anh xin lỗi  
vì đã làm em nghĩ  
anh không tôn trọng cảm xúc của em.
</p>

<p>
Nhưng chắc chắn là em biết,  
anh không bao giờ hết yêu em.
</p>

<p>
Anh luôn muốn yêu em.
</p>

<p class="highlight">
Anh cám ơn em  
vì vẫn cho anh cơ hội,  
vẫn chọn anh.
</p>


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



