// 문자열 섞기
// 길이가 같은 두 문자열 str1, str2가 주어집니다. 두 문자열이 각 서로 번갈아가면서 한 번 씩 등장하는 문자열을 보여주는 코드 작성. return으로 출력
// 입출력 예
// str1	str2	result
// "aaaaa"	"bbbbb"	"ababababab"
let answer = '';
for(let i = 0; i<str1.length; i++){
    answer += str1[i]+str2[i];
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