// 문자열 섞기
// 길이가 같은 두 문자열 str1, str2가 주어집니다. 두 문자열이 각 서로 번갈아가면서 한 번 씩 등장하는 문자열을 보여주는 코드 작성. return으로 출력
// 입출력 예
// str1	str2	result
// "aaaaa"	"bbbbb"	"ababababab"
let answer = '';
for(let i = 0; i<str1.length; i++){ // str1의 길이만큼 반복 
    answer += str1[i] + str2[i];  // str1[i]와 str2[i]를 차례로 결합하여 answer에 추가
    // 첫 번째 반복에서 str1[0] ('a')와 str2[0] ('b')가 결합되어 answer는 'ab'가 됩니다.
    // 두 번째 반복에서는 str1[1] ('a')와 str2[1] ('b')가 결합되어 answer는 'abab'가 됩니다.
}
return answer

// 코드 해석
// 길이가 같은 두 문자열 str1, str2의 길이는 같음 그니까 for문을 1개만 돌려도 된다는 소리.
// for문이 돌면서 1번당 answer값에는 ab가 들어가게 된다. 

// 문자 리스트를 문자열로 변환하기
// 문자들이 담겨있는 배열 arr가 주어지고 arr원소들을 순서대로 이어 붙인 문자열을 return하는 코드를 작성.
// 입출력 예
// arr	result
// ["a","b","c"]	"abc"
arr.join("");

// join -> 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// join(); 생략을 하면 자동으로 ,로 구분을 해줍니다. 
// join(""); 배열의 ""  

// 문자열 곱하기
// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
// 입출력 예
// my_string	k	result
// "string"	    3	"stringstringstring"
// "love"	    10	"lovelovelovelovelovelovelovelovelovelove"
let answer1 = "";

for(let i = 0; i<k; i++){
    answer1 += my_string
}

return answer1;

my_string.repeat(k);

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 입출력 예
// a	b	result
// 9	91	991
// 89	8	898
let c = Number(String(a) + String(b));
let d = Number(String(b) + String(a));

return c >= d ? c : d

function solution(a, b) {
    var answer = 0;
    // ''을 붙이면 자바스크립트는 a와 b를 문자열로 간주하고 연결하게 됩니다. 그렇지 않으면, 두 숫자를 더하는 산술 연산이 되어 문제에서 요구하는 결과와 달라집니다.
    let ab = '' + a + b; // a와 b를 문자열로 이어붙임 
    let ba = '' + b + a; // b와 a를 문자열로 이어붙임
    answer = Math.max(ab,ba); // ab와 ba 중 더 큰 값을 구함 -> Math.max()는 두 값 중 더 큰 값을 반환하는 함수입니다. 이때 중요한 점은 숫자가 아니라 문자열끼리 비교가 이루어집니다.
    return answer;
}

function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`)) // 이 코드는 숫자로 비교하는 코드
}

return Math.max(`${a}${b}`,`${b}${a}`); // 문자열로 비교하는 코드 

// toString과 String의 차이점 
// String 어떤 형태든 문자로 
// toString은 null, undefind값을 형 변환시 오류가 나타난다. 

// 두 수의 연산값 비교하기
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

// 입출력 예
// a	b	result
// 2	91	364
// 91	2	912

let c = Number(String(a)+String(b));
let d = Number(2*a*b);

return c >= d ? c : d;

return Math.max(`${a}${b}`,2*a*b);

function solution(a, b) {
    var answer = 0;
    // ''을 붙이면 자바스크립트는 a와 b를 문자열로 간주하고 연결하게 됩니다. 그렇지 않으면, 두 숫자를 더하는 산술 연산이 되어 문제에서 요구하는 결과와 달라집니다.
    let ab = '' + a + b; // a와 b를 문자열로 이어붙임 
    let ba = 2 * b * a; // b와 a를 문자열로 이어붙임
    answer = Math.max(ab,ba); // ab와 ba 중 더 큰 값을 구함 -> Math.max()는 두 값 중 더 큰 값을 반환하는 함수입니다. 이때 중요한 점은 숫자가 아니라 문자열끼리 비교가 이루어집니다.
    return answer;
}


