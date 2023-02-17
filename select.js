
// 암장, 난이도 볼 수 있는 탭

function selectGymGrade(e) {
  const gravityGrade = ["빨강", "주황", "노랑", "초록", "파랑", "남색", "보라", "흰색", "그래비티"]; // 노가다 배열 생성,,ㅎㅎ
  const theClimbGrade = ["흰색", "노랑", "주황", "초록", "파랑", "빨강", "보라", "회색", "검정"];
  const target = document.getElementById("ClimbGrade");
  
  if (e.value == "theClimb") { // value 값을 찾아 변수에 배열을 넣어준다.
    add = theClimbGrade;
  } else if (e.value == "gravity") {
    add = gravityGrade;
  }

  target.options.length = 1; // 난이도 갯수 , 암장을 바꿀 떄 난이도 초기화 하기 위해

  for (property in add) { // opt 엘리먼트 생성하여 html에 넣어준다
    let opt = document.createElement("option");
    opt.value = add[property];
    opt.innerHTML = add[property];
    target.appendChild(opt);
  }
}

const showValue = (target) => { // 선택시 창에 보여지는 부분
  const value = target.value;
  const text = target.options[target.selectedIndex].text;

  document.querySelector("#pushGrade").innerHTML = `${value}`;
}