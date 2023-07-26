var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId1: function() {       // birthday, pId값을 객체 안의 프로퍼티가 아닌
                                // 변수 birthday, pId를 전역범위에서 찾고 undefined값을 얻게된다.
        return birthday + pId;  // undefined,undefined 를 숫자로 더해 NaN를 반환하게 된다.
    },
    fullId1_1: function() {
        return ""+ birthday + pId; // undefined,undefined를 문자열로 더해 undefinedundefined를 반환하게 된다.
    },
    fullId2: function() {
        return person.birthday + person.pId;// person의 프로퍼티 값으로 정상적으로 작동한다.
    },
    fullId3: function() {
        return this.birthday + this.pId;    // 객체의 이름이 수정되는 경우나 다른 객체에 코드를 적용하는 경우에
    },                                      // 따로 코드를 수정할 필요없이 바로 적용 가능하다.
};

