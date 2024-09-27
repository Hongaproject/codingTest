// 마지막 두 원소
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// num_list	result
// [2, 1, 6]	[2, 1, 6, 5]
// [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]

function solution(num_list) {
    let last = num_list[num_list.length - 1]; // 마지막 원소를 가르킴
    let prev = num_list[num_list.length - 2]; // 마지막에서 앞에 원소를 가르킴
    // length는 0부터 시작하지 않고 1부터 시작함 -> [2, 1, 6] = 3 
    
    if(last > prev){
        num_list.push(last - prev); // 마지막 원소가 더 크면 -> 마지막원소 - 앞에 원소 마지막에 push로 값 추가
    }else{
        num_list.push(last * 2); // 마지막 원소가 앞에 원소보다 작으면 2곱하기
    }
    return num_list;
}


// 수 조작하기1
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// 입출력 예
// n	control	result
// 0	"wsdawsdassw"	-1

function solution(n, control) {
    // control 문자열의 각 문자에 따라 n의 값을 변화시킴
    for (let i = 0; i < control.length; i++) {
        let char = control[i];  // control 문자열에서 i번째 문자 가져오기
        if (char === 'w') {
            n += 1;  // w일 때 n이 1 증가
        } else if (char === 's') {
            n -= 1;  // s일 때 n이 1 감소
        } else if (char === 'd') {
            n += 10; // d일 때 n이 10 증가
        } else if (char === 'a') {
            n -= 10; // a일 때 n이 10 감소
        }
    }
    
    return n;  // 최종 계산된 n 반환
}
