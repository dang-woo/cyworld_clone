
const profile = {
    name:"철수",
    age : 0,
    school:"다람쥐초등학교"
}

if (profile.age >= 20) {
    console.log("성인입니다")
} else if(profile.age >= 8) {
    console.log("학생입니다")
} else if(profile.age > 0){
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}