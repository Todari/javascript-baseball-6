// ball, strike 결과를 통해 출력 요구사항에 맞게 출력
function resultToString({ ball, strike }) {
  let output = ''

  if (ball + strike === 0) {
    output = '낫싱';
  } else if (ball * strike !== 0) {
    output = `${ball}볼 ${strike}스트라이크`;
  } else if (ball !== 0) {
    output = `${ball}볼`;
  } else if (strike !== 0) {
    output = `${strike}스트라이크`;
  }

  return output;
}

export default resultToString;