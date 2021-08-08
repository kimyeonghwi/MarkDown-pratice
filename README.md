# 제목(Header)

# 제목 1 (아래에 줄 생긴당 ㅋㅋ)
## 제목 2 (줄 안생김)
### 제목 3 (줄 안생김)
#### 제목 4
##### 제목 5
###### 제목 6 

# 문장작성(paragraph) p태그와 비슷
동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세 

# 줄바꿈(Line Breaks) 띄어쓰기 2번으로 가능 혹은 <br/> 태그 넣어
동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세  
무궁화 삼천리 화려 강산   
대한 살람 대한으로 길이 보전하세

# 강조 
_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  


# 목록

1. 순서가 필요한 목록 
1. 순서가 필요한 목록 
1. 순서가 필요한 목록 
    1. 서브 목록 (들여쓰기 2번 or 띄어쓰기 4번)
    1. 서브 목록 
    1. 서브 목록 
1. 순서가 필요한 목록 


- 순서가 필요하지 않은 목록 
    - 순서가 필요하지 않은 목록 
    - 순서가 필요하지 않은 목록 
- 순서가 필요하지 않은 목록 
- 순서가 필요하지 않은 목록 


# 링크
<a href="https://naver.com">naver.com<a/>

[naver.com](https://naver.com)

<a href="https://naver.com" title="네이버로 이동">naver<a/>

<!-- 타이틀 추가 해주기  -->
[네이버로이동](https://naver.com "네이버로 이동!")


# 이미지 출력해주기 (똑같음)

![대체 텍스트 들어감](https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F15%2Fd0%2F9315d0bf8570a39a77cc2c471622fef4.jpg&type=sc960_832)

<!-- 대괄호에 이미지 코드 전체 복사하면 그 이미지에 해당 링크 걸린다.  -->
[![대체 텍스트 들어감](https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F15%2Fd0%2F9315d0bf8570a39a77cc2c471622fef4.jpg&type=sc960_832)
](https://naver.com)

     
# 인용문
 > 남의 말이나 글에서 직접 또는 간접적으로 따온 문장.  
 > (네이버 국어 사전)

>인용문 중첩 
>> 인용문 중첩
>>>인용문 중첩첩

# 인라인 코드 강조 내가 원하는 곳을 잡아서 팩틱 한번 누르면 됨 

css에서 `background` 혹은  
`background-image` 속성으로 요소에 배경  
이미지를 삽입할 수 있습니다.

# 블럭 코드 강조

```html
<a href="https://naver.com" target="_blank">네이버</a>
```

```java
int a = 10;
```

```javascript
int a = 10;
```

```bash 
$ git push origin master
```

```plaintext
그냥 텍스트 ㅋㅋㅋㅋㅋ
```

# 표 !!! 테이블이다. 

position 속성

값 | 의미 | 기본값   
--|:--:|--:  
static | 배치기준 없음 | O
relative | 요소 자신 | X
absolute|위치상부모요소  |X
fixed|뷰포트|X
