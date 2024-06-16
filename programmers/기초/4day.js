// n의 배수
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
// 입출력 예 #1
// 98은 2의 배수이므로 1을 return합니다.
// 입출력 예 #2
// 32는 3의 배수가 아니므로 0을 return합니다.

if(n%2==0){
    return 1
} else {
    return 0
}

n%2 == 0 ? 1 : 0

// 공배수
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
// number	n	m	result
// 60	    2	3	1
// 55	    10	5	0

if(number % n === 0 && number % m === 0){
    return 1
} else {
    return 0
}

// 홀짝에 따라 다른 값 변환하기
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
// 입출력 예 #1
// 예제 1번의 n은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.
// 입출력 예 #2
// 예제 2번의 n은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 22 + 42 + 62 + 82 + 102 = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

function solution(n) {
    let sum = 0;
    if (n%2===0){
        for(let i=2; i<=n; i+=2){
            sum+=i*i
        }
    } else {
        for (let i=1; i<=n; i+=2){
            sum+=i
        }
    }
    return sum;
}

// 조건 문자열
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

// 입출력 예 #1
// 20 <= 50은 참이기 때문에 1을 return합니다.
// 입출력 예 #2
// 41 > 78은 거짓이기 때문에 0을 return합니다.






// flag에 따라 다른 값 반환하기
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
// 입출력 예 #1
// 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
// 입출력 예 #2
// 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.