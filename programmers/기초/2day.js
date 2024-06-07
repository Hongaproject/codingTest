// 덧셈식 출력하기
// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드 작성.
// 입력 4 5
// 출력 4 + 5 = 9
let a = Number(input[0]);
let b = Number(input[1]);
let c = a + b;

// 콘솔에 사용 할 수 있는 코드 차이점.
console.log(a,'+',b,"=",c);  // ,를 사용하면 붙여서 사용이 가능함. 4 + 5 = 9 
console.log(a+' + '+b+" = "+c); // + 사용시 스페이스로 여백을 줘야함. 4 + 5 = 9
console.log(`${a} + ${b} = ${c}`); // `사용시 변수만 ${}를 사용해서 특수 기호는 ""필요 없이 사용 가능.

// 문자열 붙여서 출력하기
// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력을 줍니다. str1과 str2을 이어서 출력하는 코드를 작성.
// 입력 apple pen
// 출력 applepen
console.log(str1+str2);

// 문자열 돌리기
// 문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성.
// 입력 abcde
// 출력 
// a
// b
// c ...
str = input[0]
[...str].forEach(a => console.log(a)); // forEach를 사용해서 작성가능

for(let i = 0; i<str.length; i++){ // for문으로도 작성 가능.
    console.log(str[i]);
}

// 홀짝 구분하기
// 자연수 n이 입력으로 주어지면 만약 n이 짝수라면 is even 홀수라면 n이 is odd가 나오게 출력하는 코드 작성.
// 입력 100 or 45
// 출력 100 is even or 45 is odd
n = Number(input[0]);
if(n % 2 == 0){
    // 둘 다 사용 가능. ,와 "" 차이점 
    console.log(n + " is even");
    console.log(n,"is even");
} else {
    console.log(n + " is odd");
    console.log(n,"is odd");
}

console.log(n % 2 == 0 ? n + " is even" : `${n} is odd`);  // 삼항연산자로도 사용 가능. ``사용시 문자열을 그대로 넣으면 특수기호를 사용하지 않아도 출력이 된다.

// 문자열 겹쳐쓰기
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
// 입출력 예
// my_string	overwrite_string	s	result
// "He11oWor1d"	"lloWorl"	2	"HelloWorld"
// "Program29b8UYP"	"merS123"	7	"ProgrammerS123"
// 입출력 예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

let answer = my_string.split("");
answer.splice(s, overwrite_string.length, overwrite_string)  // Array.splice(start: number, deleteCount?: number | undefined): T[]
return answer.join("");

// 코드 해석 문자열을 split로 한 개씩 쪼개고 splice를 사용해서 코드를 삭제해주고 join을 통해 붙혀준다. 
// splice(시작점, 삭제할부분, 추가할부분, 추가할부분, ...) 이렇게 사용이 된다. 결론 s(시작점)에서 overwrite_string.length의 길이를 삭제하고 삭제된 부분에 overwrite_string을 추가한다.
// join을 사용하여 한 개씩 쪼개진 내용을 붙혀준다.




