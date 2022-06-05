let con = document.querySelector('.container');
let ls = localStorage.getItem('editing');
let text;
// let p = document.getElementsByTagName("p")[0].innerText;
if (ls == null) {
    text = document.createTextNode("Click here to edit");
}
else {
    text = document.createTextNode(ls);
    console.log("dsad");
}
con.appendChild(text);
console.log(con);
con.addEventListener("click", function () {
    let n = document.getElementsByClassName('text').length;
    if (n == 0) {
        let html = con.innerHTML;
        con.innerHTML = `<textarea class=" text form-control" placeholder="Leave a comment here" id="text">${html}</textarea>`;
    }

    let text = document.getElementById('text')
    text.addEventListener("blur", function () {
        con.innerHTML = text.value;
        localStorage.setItem('editing',con.innerHTML);
    })
})

