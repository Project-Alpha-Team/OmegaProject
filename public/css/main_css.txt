body {
    font-family: sans-serif;
    background-color: white;
    margin: inherit;
}

.venue-address {
    cursor: pointer;
    text-decoration: underline;
}

#mapid2 {
    height: 550px;
    width: 950px;
}

/* .list-items-color { */
/* background-color: rgba(231, 245, 253, 0.7); */
/* } */
.head-img-wrapper {
    /* background-image: url('../img/bg-masthead.jpg');
    background-size: cover; */
    width: 100%;
    /* height: 566px; */
}

.head-img-wrapper img {
    object-fit: cover;
    width: 100%;
    height: 566px;
    filter: brightness(.8);
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
    height: 35rem;
}

.title-wrapper {
    position: absolute;
    top: 31%;
    width: 80%;
    margin-left: 10%;
    flex-direction: column;
}

.title-wrapper h1 {
    font-family: 'Monoton', cursive;
    font-size: 49px;
    text-align: center;
    letter-spacing: 7px;
    font-weight: 350;
}

.navbar-add {
    height: 62px;
    padding: 0 14px;
}

.flex-center {
    display: flex;
    justify-content: center;
}

.navbar {
    padding: 14px;
}

.flex-end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.navbar ul {
    list-style: none;
    margin-bottom: 0;
}

.navbar section {
    width: 340px;
}

.navbar h2 {
    /* font-family: sans-serif; */
    font-size: 23px;
    margin-bottom: 0;
    color: rgb(66, 119, 249);
    letter-spacing: -1px;
    font-weight: 600;
}

.nav-item-wrapper {
    padding: 0;
    display: flex;
    justify-content: space-evenly;
}

.navitems {
    text-decoration: none;
    /* font-family: sans-serif; */
    /* color: #777777; */
    margin: 0;
    color: rgba(4, 4, 4, 0.44);
}

.nav-item-wrapper li :hover {
    text-decoration: none;
}

.btn-warning {
    /* height: 44px; */
    font-size: 24px;
    font-weight: 300;
    width: 154px;
    /* height: 78px; */
    color: #212529;
    background-color: #1c69f5;
    border-color: #9fbeff;
    color: white;
    margin-top: 14px;
    margin-bottom: 19px;
    margin-left: 6px;
}

#signUp_button {
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
}

.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 35px;
    top: 15px;
    font-size: 40px;
    font-weight: bold;
    color: #f1f1f1;
}

/* Full-width input fields */
.modal-content input[type=text],
input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
.modal-content input[type=text]:focus,
input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

.modal-content button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
    opacity: 0.85;
}

#cancel-btn {
    background-color: #f44336;
}

.clearfix :hover {
    opacity: 1.0;
}

.cancelbtn,
.signupbtn {
    float: left;
    width: 50%;
}

.close:hover,
.close:focus {
    color: #f44336;
    cursor: pointer;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.text-format {
    text-align: center;
}

.body-text {
    font-family: 'Monoton', cursive;
    font-family: 'Coustard', serif;
}

.footer-text {
    font-family: 'Monoton', cursive;
    font-family: 'Coustard', serif;
    font-family: 'Permanent Marker', cursive;
    font-family: 'Atomic Age', cursive;
}

.form-wrapper {
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-evenly;
}

.form-attribute {
    display: flex;
    flex-direction: row;
}

#mapid {
    height: 300px;
    width: 300px;
}

p {
    padding-left: 2rem;
}

.contact {
    margin-top: 12rem;
    position: absolute;
}

.head-jumbo .jumbotron {
    background-image: url(bg-masthead.jpg);
    border-radius: 0;
    /* height:400px; */
}

.top-label {
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.label-text {
    font-size: 45px;
    color: rgba(42, 100, 241, 0.84);
    font-weight: 300;
}

/* -----------------------------------------  Main body  ------------------------------------------- */
.main-wrapper {
    display: flex;
    /* width: 96%; */
    /* margin: 30px auto; */
    /* background-color: rgb(245, 249, 255); */
    padding: 44px;
}

.left-main-wrapper {
    width: 30%;
}

.upper-column {
    height: 402px;
}

.artist-image {
    border-radius: 7px;
    height: 100%;
    box-shadow: 0px 1px 15px 0 rgba(0, 0, 0, 0.33);
    background-image: url('http://via.placeholder.com/400x400');
    background-size: contain;
}

.post-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    /* margin: 20px auto; */
}

.post-card {
    padding: 20px;
    margin: 25px auto;
    width: 28%;
    height: 320px;
    background-color: #fff;
    /* box-shadow: 0 1px 0 0 rgba(0,0,0,.1); */
    display: block;
    /* box-shadow: 0 1px 0 0 rgba(0,0,0,.1);; */
}

.post-head {
    border-radius: 4px;
    height: 50%;
    background-image: url('http://via.placeholder.com/320x158');
    background-size: cover;
}

.post-body p {
    font-size: 15px;
    padding-left: 10px;
    margin-top: 3px;
    margin-bottom: 2px;
}

/* Insertion------------------------------------- */
/*Contact sectiom*/
.content-header {
    font-family: 'Oleo Script', cursive;
    color: #fcc500;
    font-size: 45px;
}

.section-content {
    text-align: center;
}

#contact {
    font-family: 'Teko', sans-serif;
    padding-top: 60px;
    width: 100%;
    width: 100vw;
    height: 550px;
    background-color: rgba(0, 3, 8, 0.85);
    color: #fff;
    ;
    /* background: -webkit-linear-gradient(to left, #3a6186 , #89253e); Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to left, #3a6186 , #89253e); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
}

.contact-section {
    padding-top: 40px;
}

.contact-section .col-md-6 {
    width: 50%;
}

.form-line-left {
    border-left: 1px solid #B29999;
}

.form-line {
    border-right: 1px solid #B29999;
}

.form-group {
    margin-top: 10px;
    padding: 0.25rem;
}

label {
    font-size: 1.3em;
    line-height: 1em;
    font-weight: normal;
}

/* 
.form-control {
    font-size: 1.3em;
    color: #080808;
    padding: .5rem;
}
*/
textarea.form-control {
    height: 135px;
    /* margin-top: px;*/
}

.submit {
    font-size: 1.1em;
    float: right;
    width: 150px;
    background-color: transparent;
    color: #fff;
}

/* -----------------------------------------------Insertion ends */
.font-fashion {
    font-family: 'Kaushan Script', cursive;
}

/* CONTACT STYLE */
.main3 {
    display: flex;
    padding: 45px 70px;
    color: rgba(0, 0, 0, 0.7);
}

.header-position-static {
    padding: 25px;
    width: 100%;
    display: flex;
    /* flex-flow: row wrap; */
    /* background-color: #ffffff; */
    height: 94px;
    align-items: center;
    justify-content: flex-end;
    color: rgba(0, 0, 0, 0.7);
    /* border-bottom: 2px solid rgba(119, 119, 119, 0.7); */
}

.navitems2 {
    text-decoration: none;
    /* color: #777777; */
    margin: 0;
    color: rgba(0, 0, 0, 0.7);
}

.navitems2:hover {
    color: rgb(12, 156, 167);
    /* font-size: 1.3em; */
}

.contact-inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-left: 40px;
}

.form-control {
    width: 100%;
    padding-right: 44px;
    font-size: 24px;
    line-height: 130%;
}

.form-label {
    font-size: 18px;
    margin-top: 70px;
}

.flex-between #firstName,
#lastName {
    width: 48%;
}

.inputContact {
    width: 100%;
    height: 52px;
    margin-bottom: 14px;
}

.inputContact {
    width: 100%;
    height: 52px;
    margin-bottom: 14px;
}

input[type=text]:focus {
    border: rgba(3, 134, 185, 0.795);
}

/* input ::placeholder {
    color: black;
} */
input {
    position: relative;
    font-size: 22px;
    text-transform: uppercase;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    position: absolute;
    top: 0;
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 13px;
    padding-left: 4px;
    margin-bottom: 20px;
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 13px;
    padding-left: 4px;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 13px;
    padding-left: 4px;
}

textarea {
    font-size: 20px;
    width: 100%;
    height: 250px;
    margin-bottom: 12px;
    border: solid 1px rgba(0, 0, 0, 0.2);
}

textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    padding-left: 4px;
}

textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 1.2em;
    padding-left: 4px;
}

textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: black;
    font-weight: bold;
    line-height: normal;
    font-size: 1.2em;
    padding-left: 4px;
}

.bottom-wrapper {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

button {
    font-size: 18px;
    width: auto;
    height: 46px;
    display: inline-block;
    padding: 0.5em 2em;
    text-decoration: none;
    background: #0981ce;
    color: #FFF;
    /* border-bottom: solid 4px #627295; */
    border-radius: 6px;
}

button:active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
}

.contact-info {
    width: 50%;
    padding-left: 40px;
    padding-right: 44px;
}

.contact-info h2 {
    margin-bottom: 50px;
}

.form-bottom {
    display: flex;
}

.text-wrapper-form {
    padding-right: 44px;
}

.text-wrapper-form h2,
.contact-info h2 {
    font-size: 32px;
    letter-spacing: 3px;
}

.lead {
    color: rgba(82, 82, 82, 0.81);
    letter-spacing: 0.8px;
    font-weight: 300;
    font-size: 18px;
    margin-top: 20px;
}

.form-accept {
    font-size: 14px;
}

.bottom-wrapper {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.all-info {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
}

.address-wrapper {
    margin: 56px 30px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}

.address-lecture {
    font-size: 24px;
    margin-left: 30px;
}

.bold {
    font-family: sans-serif;
    font-weight: bolder;
    color: rgba(23, 23, 25, 0.8);
}

.address {
    color: rgba(82, 82, 82, 0.81);
}

/* footer */
.black-foot {
    background-color: #1a1a1a;
    padding: 75px 100px;
    height: 360px;
}

.footer-wrapper {
    color: #ffffff;
    display: flex;
    height: 100%;
    justify-content: space-between;
}

.component-wrapper-left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.component-wrapper-right {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin-top: 5px;
    font-size: 18px;
}

.component-wrapper-left h1 {
    font-weight: bold;
    font-family: sans-serif;
    font-size: 24px;
}

li i {
    color: white;
}

.icon-wrapper ul {
    display: flex;
}

.icon {
    margin: 3px;
}

.icon :hover {
    color: rgb(107, 195, 247);
}

.footer-contents {
    font-size: 16px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.64);
}

.footer-contents :hover {
    color: white;
}

.link-white {
    text-decoration: none;
    color: white;
}