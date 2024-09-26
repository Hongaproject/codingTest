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
    return ret.length > 0 ? ret : "EMPTY"; // >를 통해서 ret가 비어있는지 검사
}

function solution(code) {
    var ret = '';
    let mode = 0;
    
    for(let i = 0; i<code.length; i++){
        if(mode==0){
            code[i] == '1' ? (mode=1) : (i%2==0&&(ret+=code[i]))
        }else{
            code[i] == '1' ? (mode=0) : (i%2!==0&&(ret+=code[i]))
        }
    }
    return ret.length===0 ? "EMPTY" : ret; // ===를 통해서 ret가 비어있는지 검사
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
    for(let i = 0; i<included.length; i++){ // 등차수열 항 직접 계산 그담에 sum에 더함.
        const q = a + i * d; // 등차수열 생성 -> n번째 항 = a + (n−1) × d
        if(included[i]){ // included[i]가 true인 경우  
            answer += q; // answer에 등차수열 값을 누적하여 더 합니다.
        }
    }
    return answer; // 값 나타내기
}

function solution(a, d, included) {
    let diffArray = []
    let answer = 0

    for(i=1; i <= included.length; i++){
        diffArray.push(a + (i - 1) * d);
    }

    included.map((item, index) => item ? answer += diffArray[index] : null)

    return answer
}

// 주사위 게임 2
// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c) {
    if(a === b && b === c && a === c) return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3)
    if(a === b || b === c || a=== c) return (a + b + c) * (a**2 + b**2 + c**2)
    return a+b+c
}


// 원소들의 곱과 합
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    let add = 0; // 합 초기값 0
    let mul = 1; // 곱 초기값 1
    for(let i = 0; i<num_list.length; i++){
        add += num_list[i];
        mul *= num_list[i];
    }
    add = add*add;
    if(add > mul){ // 곱이 합의 제곱보다 작으면 1
        return 1;
    }
    return 0;
}

function solution(num_list) {
    // 1. 모든 요소의 합을 구함
    let add = num_list.reduce((a, c) => a + c, 0);
    
    // 2. 모든 요소의 곱을 구함
    let mul = num_list.reduce((a, c) => a * c, 1);
    
    // 3. 합의 제곱과 곱을 비교하여 결과 반환
    return (add * add > mul) ? 1 : 0;
}

// 이어 붙인 수
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    let sol = num_list.filter(el => (el % 2 === 1));  // 홀수만 필터링
    let sol2 = num_list.filter(el => (el % 2 === 0)); // 짝수만 필터링

    return Number(sol.join('')) + Number(sol2.join(''));  // 이어 붙여서 숫자로 변환 후 합산
    // sol.join(''): 홀수 배열을 문자열로 이어 붙임. 예를 들어 [3, 5, 1] → '351'.
    // sol2.join(''): 짝수 배열을 문자열로 이어 붙임. 예를 들어 [4, 2] → '42'.
    // 이렇게 만든 문자열을 Number()로 변환하여 숫자로 만들고, 두 수의 합을 계산하는 것이 이 코드의 동작 방식입니다.
}

function solution(num_list){
    let odd = '';
    let even = '';
    num_list.forEach((num) => {
        if(num%2===0){
            even += num;
        }else {
            odd += num;
        }
    })
    return Number(odd)+Number(even);
}

function solution(num_list){
    let odd = '';
    let even = '';
    for(let i = 0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            even += num_list[i];
        }else{
            odd += num_list[i];
        }
    }
    return Number(odd)+Number(even);
}



