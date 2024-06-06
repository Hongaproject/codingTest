// 문자열 출력하기
console.log(str);

// a와 b 출력하기
// 정수 a,b가 주어지며 각수를 받아 입출력을 예와같이 출력하는 코드 작성
// 입력 4 5
// 출력 a = 4 b = 5
console.log('a =' + Number(input[0]));
console.log('b =' + Number(input[1]));

// 문자열 반복해서 출력하기
// 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드 작성
// 입력 string 5 
// 출력 stringstringstringstringstring
console.log(str.repeat(n));

// repeat 메소드는 문자열 반복때 사용이 됨.

// 대소문자 바꿔서 출력하기
// 영어 알파벳으로 이루어진 문자열 str을 주어지고 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 코드 작성
// 입력 aBcDeF
// 출력 AbCdEf
str = input[0].split("");
str.forEach((value, index) => {
    if(value === value.toUpperCase()){
        str[index] = value.toLowerCase();
    } else {
        str[index] = value.toUpperCase();
    }
})
console.log(str.join(""));

// toUpperCase(); 소문자를 대문자로 변환시켜줍니다.
// toLowerCase(); 대문자를 소문자로 변환시켜줍니다.

// 특수문자 출력하기
// 출력 !@#$%^&*(\'"<>?:;
console.log('!@#$%^&*(\'"<>?:;');