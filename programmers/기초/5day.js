// 코드 처리하기
// 문자열 code가 주어집니다.
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.
// mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
// 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

// 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

function solution(code) {
    let ret='';
    let mode = 0;
    
    for (let i=0; i<code.length; i++){
        if(mode == 0){
        code[i] == '1' ? (mode=1):(i%2==0&&(ret+=code[i]))
        }else{
            code[i] =='1' ? (mode=0):(i%2!==0&&(ret+=code[i]))
        }
    }
    return ret.length > 0 ? ret : "EMPTY";
}

// 등차수열의 특정한 항만 더하기
// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
// 입출력 예
// a	d	included	result
// 3	4	[true, false, false, true, true]	37
// 7	1	[false, false, false, true, false, false, false]	10

// 예제 1번은 a와 d가 각각 3, 4이고 included의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

// 1항	2항	3항	4항	5항
// 등차수열	3	7	11	15	19
// included	true	false	false	true	true
// 따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.

function solution(a, d, included) {
    var answer = 0;
    for (var i = 0; i < included.length; i++) {
        if (included[i]) {
        answer += (a + i * d);
        }
    }
    return answer;
}





