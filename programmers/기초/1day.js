// 문자열 출력하기
console.log(str);

// a와 b 출력하기
// 정수 a,b가 주어지며 각수를 받아 입출력을 예와같이 출력하는 코드 작성
// 입력 4 5
// 출력 a = 4 b = 5
console.log('a =' + Number(input[0]));
console.log('b =' + Number(input[1]));

console.log(`a = ${input[0]}`);
console.log(`b = ${input[1]}`);

const [a, b] = line.split(' ')
    console.log('a =', a)
    console.log('b =', b)

// 문자열 반복해서 출력하기
// 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드 작성
// 입력 string 5 
// 출력 stringstringstringstringstring
console.log(str.repeat(n)); // repeat 메소드는 문자열 반복때 사용이 됨. 주어진 수 만큼 반복 시켜줌. 

for(let i = 1; i<n; i++){ // str안에 이미 내용이 입력 받아서 1부터 시작.
    str += input[0] 
}
console.log(str);

// 대소문자 바꿔서 출력하기
// 영어 알파벳으로 이루어진 문자열 str을 주어지고 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 코드 작성
// 입력 aBcDeF
// 출력 AbCdEf
str = input[0].split(""); // 'a','B','c','D','e','F','g'
str.forEach((v,index) => {
    if(v === v.toUpperCase()){ // 대소문자 구분하기 위해서 조건을 걸음.
        str[index] = v.toLowerCase(); // str의 인덱스 위치를 찾아야 해서[] str[0] = 'a'
    } else {
        str[index] = v.toUpperCase();
    }
})
console.log(str.join("")); // 배열을 다시 문자열로 변환하여 출력

let str = input[0].split("");
    
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        str[i] = str[i].toLowerCase();
    } else {
        str[i] = str[i].toUpperCase();
    }
}
    
console.log(str.join(""));

// toUpperCase(); 소문자를 대문자로 변환시켜줍니다.
// toLowerCase(); 대문자를 소문자로 변환시켜줍니다.

// 특수문자 출력하기
// 출력 !@#$%^&*(\'"<>?:;
console.log('!@#$%^&*(\'"<>?:;');