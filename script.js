function showLove() {
    alert("Anh yêu em nhiều hơn những gì anh từng thể hiện.");
}

function openChapter(number) {

    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");
    const intro = document.getElementById("photoIntro");

    let content = "";

    if (number === 1) {
        content = `
        <h2 class="chapter-title">Vì Anh Thích Em</h2>

        <p>Thật ra… cũng không vì lý do gì hết.<br>
        Anh thấy thích em thôi.<br>
        Anh chỉ đơn giản là muốn em làm người yêu anh.</p>

        <p>Những ngày tháng đầu… công nhận là vô tư thật ha.<br>
        Anh không suy nghĩ gì nhiều.<br>
        Anh chỉ muốn làm em cười thôi.</p>

        <p>Anh chỉ muốn mỗi ngày đi học đều được thấy em.<br>
        Được đi căn tin chung.<br>
        Ăn chung. Uống chung.</p>

        <p>Anh thích nhất là lúc em xem anh đá banh.<br>
        Có lần anh nghe trên lầu có người kêu tên anh.<br>
        Anh không quay lên — vì anh biết đó không phải giọng em.</p>

        <p>Nhưng anh biết…<br>
        Em đang nhìn anh.</p>

        <p class="highlight">Tóm lại là…<br>ANH YÊU EM.</p>
        `;
    }

    else if (number === 2) {
        content = `
        <h2 class="chapter-title">Vì Anh Dại Dột</h2>

        <p>Vì anh dại dột thôi.<br>
        Anh cứ giữ cái suy nghĩ là 2 đứa không hợp.</p>

        <p>Nhiều chuyện nhỏ lẻ mà 2 bên giải quyết chưa xong<br>
        nên nó thành ra vậy.</p>

        <p>Anh cũng sợ…<br>
        Sau này nếu mình được về chung nhà<br>
        mà còn gặp những chuyện như vậy nữa<br>
        thì rất khó.</p>

        <p>Đôi lúc anh thấy em trẻ con lắm.<br>
        Tự nhiên đưa cho anh ví dụ,<br>
        rồi tự nhiên giận anh.</p>

        <p>Anh là dạng người không có overthinking.<br>
        Anh luôn tin tưởng em,<br>
        nên anh thường không có suy nghĩ gì nhiều<br>
        về chuyện người thứ 3 sẽ xuất hiện.</p>

        <p class="highlight">Và tại sao anh lại bỏ đi cái suy nghĩ không hợp này…<br>
        thì em đọc cái tiếp theo nha.</p>
        `;
    }

    else if (number === 3) {
        content = `
        <h2 class="chapter-title">Anh Muốn Bên Em</h2>

        <p>Anh nhận ra là anh muốn gì.</p>

        <p>Anh sẽ thay đổi từng cái<br>
        để hợp với em hơn.<br>
        Anh sẽ tiếp thu<br>
        và dịu dàng với em nhất.</p>

        <p>Anh sẽ suy nghĩ cho cảm xúc của em nhiều hơn.</p>

        <p>Anh xin lỗi<br>
        vì đã làm em nghĩ<br>
        anh không tôn trọng cảm xúc của em.</p>

        <p>Nhưng chắc chắn là em biết,<br>
        anh không bao giờ hết yêu em.</p>

        <p>Anh luôn muốn yêu em.</p>

        <p class="highlight">Anh cám ơn em<br>
        vì vẫn cho anh cơ hội,<br>
        vẫn chọn anh.</p>
        `;
    }

    else if (number === 4) {
        content = `
        <h2 class="chapter-title">Anh Yêu Em Nhiều Hơn Cách Anh Thể Hiện</h2>

        <p>Như tiêu đề thôi,<br>
        anh yêu em nhiều hơn cách anh thể hiện.</p>

        <p>Mong muốn của anh là<br>
        2 đứa hiểu nhau hơn<br>
        và lắng nghe nhau nhiều hơn.</p>

        <p>Anh sẽ chỉ yêu mỗi em thôi.<br>
        Anh muốn bảo vệ em,<br>
        và hướng dẫn, hỗ trợ em những gì anh có thể.</p>

        <p>Anh không phải người hoàn hảo gì hết.<br>
        Cuộc sống anh tệ ra sao thì em biết rồi.</p>

        <p>Nhưng anh muốn<br>
        anh là người đàn ông tuyệt vời của em.<br>
        Là người có thể được em tự hào khoe với mọi người.</p>

        <p>Anh cám ơn em.<br>
        Khó khăn nào em cũng bên cạnh anh hết.</p>

        <p>Viết ra như vầy<br>
        cũng không thể diễn tả hết cảm xúc của anh.</p>

        <p>Anh luôn luôn muốn yêu em.</p>

        <p>Viết vầy chắc em cũng làm biếng đọc rồi đúng hong…</p>

        <p class="highlight">Anh sẽ chứng minh cho em thấy nha.<br><br>
        ANH YÊU EM.</p>
        `;
    }

    // Bật photo intro
    intro.classList.add("active");

    // Sau 3.2s mới hiện nội dung
    setTimeout(() => {
        intro.classList.remove("active");
        text.innerHTML = content;
        popup.style.display = "flex";

        // Fade nội dung
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 50);

    }, 3200);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}





