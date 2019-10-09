// console.log("Hello");
// var x = document.getElementsByClassName("heading");

let i = 0;
let card_html = "";
let card_title = [
  "Blog/Article",
  "Newsletter/E-mailer",
  "Whitepaper",
  "e-book",
  "Report/Guide",
  "Product Description",
  "Website Content",
  "Video Script",
  "Company Profile/Brochure",
  "Press Release"
];

let card_price = [500, 1000, 2000, 1000, 1000, 500, 1000, 1000, 2000, 2000];
for (i = 0; i < 10; i++) {
  card_html +=
    '<div class="col-lg-4 col-md-6 col-sm-12">\
    <div class="card card-layout"\
     onmouseover="HowerIn(' +
    i +
    ')"\
    onmouseout="HowerOut(' +
    i +
    ')">\
      <div class="card-body">\
        <div class="row">\
            <div class="col-3">\
            <img src="./images/card-logo.png"\
            width="65"\
            height="65"/>\
            </div>\
            <div class="col-9">\
            <h5 class="card-title">' +
    card_title[i] +
    '</h5>\
            <div class = "card-text">\
                from ₹' +
    card_price[i] +
    '\
                </div>\
            </div>\
        </div>\
        <p class="card-text-size card-text gray-font">\
          Typically 450-500 words, an e-book is perfect for your target\
          audience ranging from prospective customers to users\
        </p>\
        <button type="button" class="btn btn-light light-cyan-font-button light-cyan-font order-btn">\
          Order\
        </button>\
      </div>\
    </div>\
    </div>';
}

document
  .getElementsByClassName("card-manual")[0]
  .getElementsByClassName("row")[0].innerHTML = card_html;

function HowerIn(i) {
  document
    .getElementsByClassName("card-layout")
    [i].getElementsByClassName("card-title")[0].style.color =
    "rgb(34, 160, 160)";
}
function HowerOut(i) {
  document
    .getElementsByClassName("card-layout")
    [i].getElementsByClassName("card-title")[0].style.color = "black";
}
