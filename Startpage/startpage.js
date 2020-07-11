setInterval(setupWelcomeMessage, 1000 * 1 * 0)
const NAME = "Dean";
const WELCOME_MESSAGE_TEMPLATE = ["Night", "Morning", "Afternoon", "Evening"];
function setupWelcomeMessage(){
  let curHours = new Date().getHours();
  curHours = Math.floor(curHours/6);
  if (curHours == 4) curHours = 4;
  let welcome = "Good " + WELCOME_MESSAGE_TEMPLATE[curHours] + " " + NAME;
  document.getElementById("welcome-string").innerHTML = welcome;
}
setInterval(change_background, 1000 * 1 * 0);
function change_background() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n === 2 || n < 4) {
    document.body.className = "late-night";} 
    else if (n >= 24 && n < 2)
    document.body.className = "mid-night";
    else if (n >= 22 && n < 24)
    document.body.className = "early-night";
    else if (n >= 20 && n < 22)
    document.body.className = "late-evening";
    else if (n >= 18 && n < 20)
    document.body.className = "mid-evening";
    else if (n >= 16 && n < 18)
    document.body.className = "early-evening";
    else if (n >= 14 && n < 16)
    document.body.className = "late-afternoon";
    else if (n >= 12 && n < 14)
    document.body.className = "mid-afternoon";
    else if (n >= 10 && n < 12)
    document.body.className = "early-afternoon";
    else if (n >= 8 && n < 10)
    document.body.className = "late-morning";
    else if (n >= 6 && n < 8)
    document.body.className = "mid-morning";
    else {
        document.body.className = "early-morning";}
  console.log("test");
}
var tick;
function stop() {
  clearTimeout(tick);
  }
  function clock() {
    var ut=new Date();
    var h,m,s;
    var time="        ";
    h=ut.getHours();
    m=ut.getMinutes();
    s=ut.getSeconds();
    if(s<=9) s="0"+s;
    if(m<=9) m="0"+m;
    if(h<=9) h="0"+h;
    time+=h+":"+m+":"+s;
    document.getElementById('clock').innerHTML=time;
    tick=setTimeout("clock()",1000); 
}
function main(){
  change_background();
  setupWelcomeMessage();
  clock();
}
main();