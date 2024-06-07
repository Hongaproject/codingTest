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
