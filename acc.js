//earned value

var buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}

function calc(e) {
  if (e.target.innerHTML === "SV") {
    var ev = document.getElementById("ev").value;
    var pv = document.getElementById("pv").value;
    var ac = document.getElementById("ac").value;
    var sv = document.getElementById("sv");
    sv.value = ev - pv;
    if (sv.value < 1) {
      document.getElementById("status1").innerHTML = "Behind the schedule";
    } else {
      document.getElementById("status1").innerHTML = "Ahead of schedule";
    }
  } else if (e.target.innerHTML === "CV") {
    var ev = document.getElementById("ev").value;
    var pv = document.getElementById("pv").value;
    var ac = document.getElementById("ac").value;
    var cv = document.getElementById("cv");
    cv.value = ev - ac;
    if (cv.value < 1) {
      document.getElementById("status2").innerHTML = "over budget";
    } else {
      document.getElementById("status2").innerHTML = "under budget";
    }
  } else if (e.target.innerHTML === "SPI") {
    var ev = document.getElementById("ev").value;
    var pv = document.getElementById("pv").value;
    document.getElementById("spi").value = (ev / pv).toFixed(2);
  } else if (e.target.innerHTML === "CPI") {
    var ev = document.getElementById("ev").value;
    var ac = document.getElementById("ac").value;
    document.getElementById("cpi").value = (ev / ac).toFixed(2);
  } else if (e.target.innerHTML === "EAC") {
    var ev = document.getElementById("ev").value;
    var ac = document.getElementById("ac").value;
    var bac = 1000;
    var aec = document.getElementById("eac");
    aec.value = ((ac / ev) * bac).toFixed(0);
    var variance = bac - aec.value;
    document.getElementById("variance").innerHTML = variance;
  }
}
//net present value
function calculate() {
  console.log("clicked");
  var interest = Number(document.getElementById("interest").value);
  console.log(interest);
  var cash1 = document.getElementById("cash1");
  var cash2 = document.getElementById("cash2");
  var cash3 = document.getElementById("cash3");
  var cash4 = document.getElementById("cash4");
  var cash5 = document.getElementById("cash5");
  var cash6 = document.getElementById("cash6");
  var int1 = document.getElementById("int1");
  var int2 = document.getElementById("int2");
  var int3 = document.getElementById("int3");
  var int4 = document.getElementById("int4");
  var int5 = document.getElementById("int5");
  var int6 = document.getElementById("int6");
  var pre1 = document.getElementById("pre1");
  var pre2 = document.getElementById("pre2");
  var pre3 = document.getElementById("pre3");
  var pre4 = document.getElementById("pre4");
  var pre5 = document.getElementById("pre5");
  var pre6 = document.getElementById("pre6");
  //first column
  int1.value = (1 / (1 + interest)).toFixed(4);
  pre1.value = (cash1.value * int1.value).toFixed(2);
  //second column
  int2.value = Math.pow(1 / (1 + interest), 2).toFixed(4);
  pre2.value = (cash2.value * int2.value).toFixed(2);
  //third column
  int3.value = Math.pow(1 / (1 + interest), 3).toFixed(4);
  pre3.value = (cash3.value * int3.value).toFixed(2);
  //third column
  int4.value = Math.pow(1 / (1 + interest), 4).toFixed(4);
  pre4.value = (cash4.value * int4.value).toFixed(2);
  //fifth column
  int5.value = Math.pow(1 / (1 + interest), 5).toFixed(4);
  pre5.value = (cash5.value * int5.value).toFixed(2);
  //last column
  int6.value = Math.pow(1 / (1 + interest), 6).toFixed(4);
  console.log(cash6.value);
  pre6.value = (cash6.value * int6.value).toFixed(2);
  console.log(pre6.value);
  var investment = document.getElementById("investment").value;
  var final = document.getElementById("final");
  final.value =
    Number(pre1.value) +
    Number(pre2.value) +
    Number(pre3.value) +
    Number(pre4.value) +
    Number(pre5.value) +
    Number(pre6.value);
  Pi.value = Number(final.value) / Number(investment);

  document.getElementById("answerNpv").value =
    Number(final.value) - Number(investment);
}
var npv = document.getElementById("npv");
npv.addEventListener("click", calculate);

//pay back

var button1 = document.getElementById("btnAns");

function answer() {
  var capital = Number(document.getElementById("capital").value);
  var cf1 = Number(document.getElementById("cf1").value);
  var cf2 = Number(document.getElementById("cf2").value);
  var cf3 = Number(document.getElementById("cf3").value);
  var cf4 = Number(document.getElementById("cf4").value);
  var cf5 = Number(document.getElementById("cf5").value);
  var cf6 = Number(document.getElementById("cf6").value);
  var answer = document.getElementById("answer");
  if (cf1 < capital) {
    if (cf1 + cf2 < capital) {
      if (cf1 + cf2 + cf3 < capital) {
        if (cf1 + cf2 + cf3 + cf4 < capital) {
          if (cf1 + cf2 + cf3 + cf4 + cf5 < capital) {
            if (cf1 + cf2 + cf3 + cf4 + cf5 + cf6 < capital) {
              answer.innerHTML = "No payback";
            } else {
              var five = capital - (cf1 + cf2 + cf3 + cf4 + cf5);
              answer.innerHTML = `${(5 + five / cf6).toFixed(2)} years`;
              console.log(5 + five / cf6);
            }
          } else {
            var four = capital - (cf1 + cf2 + cf3 + cf4);
            answer.innerHTML = `${(4 + four / cf5).toFixed(2)} years`;
          }
        } else {
          var three = capital - (cf1 + cf2 + cf3);
          answer.innerHTML = `${(3 + three / cf4).toFixed(2)} years`;
          console.log(3 + three / cf4);
        }
      } else {
        var two = capital - (cf1 + cf2);
        answer.innerHTML = `${(2 + two / cf3).toFixed(2)} years`;
        console.log(2 + two / cf3);
      }
    } else {
      var one = capital - cf1;
      answer.innerHTML = `${(1 + one / cf2).toFixed(2)} years`;
      console.log(1 + one / cf2);
    }
  } else {
    console.log(capital / cf1);
    answer.innerHTML = `${(capital / cf1).toFixed(2)} years`;
  }
}
button1.addEventListener("click", answer);

// irr
function irr() {
  console.log("clicked");
  var lowInt = Number(document.getElementById("lowInt").value);
  console.log(lowInt);
  var highInt = Number(document.getElementById("highInt").value);
  console.log(highInt);
  var npv1 = Number(document.getElementById("npv1").value);
  console.log(npv1);
  var npv2 = Number(document.getElementById("npv2").value);
  var irrAns = document.getElementById("irrAns");
  irrAns.value = (
    (lowInt - (npv1 / (npv2 - npv1)) * (highInt - lowInt)) *
    100
  ).toFixed(2);
}
var btnIrr = document.getElementById("irr");
btnIrr.addEventListener("click", irr);

//return on investment
function roi() {
  var outflow = Number(document.getElementById("outflow").value);
  var yr1 = Number(document.getElementById("year1").value);
  var yr2 = Number(document.getElementById("year2").value);
  var yr3 = Number(document.getElementById("year3").value);
  var yr4 = Number(document.getElementById("year4").value);
  var yr5 = Number(document.getElementById("year5").value);
  var yr6 = Number(document.getElementById("year6").value);
  var roiAns = document.getElementById("roiAns");
  var numOfYrs = Number(document.getElementById("numOfYrs").value);
  var avCF = (yr1 + yr2 + yr3 + yr4 + yr5 + yr6 - outflow) / numOfYrs;
  roiAns.value = ((avCF / outflow) * 100).toFixed(2);
  arr.value =
    ((yr1 + yr2 + yr3 + yr4 + yr5 + yr6) / numOfYrs / (outflow / 2)) * 100;
}
var BtnRoi = document.getElementById("roi");
btnRoi.addEventListener("click", roi);

//time value of money
function TVM() {
  var fvalue = document.getElementById("fvalue");
  var pvalue = document.getElementById("pvalue");
  var per = document.getElementById("per");
  var compound = document.getElementById("compound");
  var n = document.getElementById("n");
  if (fvalue.value === "") {
    fvalue.value = (
      Number(pvalue.value) *
      Math.pow(
        1 + Number(per.value) / Number(compound.value),
        Number(n.value) * Number(compound.value)
      )
    ).toFixed(2);
    fvalue.style.borderColor = "red";
    fvalue.style.color = "red";
  } else if (pvalue.value === "") {
    pvalue.value = (
      Number(fvalue.value) /
      Math.pow(
        1 + Number(per.value) / Number(compound.value),
        Number(n.value) * Number(compound.value)
      )
    ).toFixed(2);
    pvalue.style.borderColor = "red";
    pvalue.style.color = "red";
  }
}
document.getElementById("calculate").addEventListener("click", TVM);
