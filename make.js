var link="";
var q=location.search,p="";

document.addEventListener("click",s);
var sn=0;
function s() {
  sn++;
  if(sn>=4){
    document.removeEventListener("click",s);
    start();
  }
}

function start(){
  if(q){
    q=q.replace("?h=","");
    q=decodeURI(q);
    log(q)
    makeShowPan();
  }else{
    makeMakePan("","918578069916","Your message here...")
  }
}

function checkP(e){
  var decIt=decrypt(q);
  decIt=decIt.split("~~~");

  p=e.value;

  if(e.value==decIt[1]){
    e.remove();
    op(".msgBx").classList.add("active")
    op("#msgBx").innerHTML=decIt[0];
  }
}



function makeLnk() {
  var sec=encrypt(op("#msg").value+"~~~"+op("#pass").value);
  log(sec)
  link=encodeURI(document.URL.split('?')[0]+"?h="+sec);
}

function copyLnk(){
  makeLnk();
  copy(link);
}

function dirSend(num){
  makeLnk();
  window.open(encodeURI(`https://wa.me/${num}?text=${link}`));
} 

function makeMakePan(pass="",num="",place="Your msg here..."){
  var html=`  <div class="pan make active">
    <label class="fr">
      <textarea id="msg" placeholder="${place}"></textarea>
    </label>

    <label class="fr">
      <p>Password</p>
      <input type="number" placeholder="PIN" value="${pass}" id="pass">
    </label>

    <div class="fr">
      <div class="btn">
        <button id="cl" onclick="copyLnk()">Copy Link</button>
      </div>

      <div class="btn">
        <button id="cl" onclick="dirSend('919835631564')">to Kismis</button>
        <button id="cl" onclick="dirSend('918578069916')">to Kaju</button>
      </div>
    </div>

  </div>`;

  document.body.innerHTML=html;
  resetFormat();
}

function makeShowPan(){
  var html=`  <div class="pan active">
    <div class="flex c show">
      <input type="number" oninput="checkP(this)" id="pin" placeholder="PIN" style="text-align: center;">
      <div class="msgBx">
        <pre id="msgBx"></pre>
        <button onclick='makeSpecial()'>Create Message</button>
      </div>
    </div>
  </div>`;
  log("ca")
  document.body.innerHTML=html;
  op("#pin").focus();
}

function makeSpecial() {
  makeMakePan(p,"918578069916","Your message here...")
}