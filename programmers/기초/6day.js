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

// 수 조작하기 2
// 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

// 입출력 예
// numLog	result
// [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"

function solution(numLog) {
    let result = '';
    
    for (let i = 1; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1];
        
        if (diff === 1) {
            result += 'w';
        } else if (diff === -1) {
            result += 's';
        } else if (diff === 10) {
            result += 'd';
        } else if (diff === -10) {
            result += 'a';
        }
    }
    
    return result;
}

// 수열과 구간 쿼리 3
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 입출력 예
// arr	queries	result
// [0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]

function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let [index1, index2] = queries[i];
        
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    
    return arr;
}

// 수열과 구간 쿼리 2
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

// 입출력 예
// arr	queries	result
// [0, 1, 2, 4, 3]	[[0, 4, 2],[0, 3, 2],[0, 2, 2]]	[3, 4, -1]

// 자바스크립트로 문제 풀어줘


function solution(arr, queries) {
    let result = [];
    
    queries.forEach(query => {
      const [s, e, k] = query;
      let minVal = Infinity;
  
      for (let i = s; i <= e; i++) {
        if (arr[i] > k && arr[i] < minVal) {
          minVal = arr[i];
        }
      }
  
      result.push(minVal === Infinity ? -1 : minVal);
    });
    
    return result;
  }
  
