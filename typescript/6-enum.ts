//
// enum
// بتشيل كذا حاجة مع بعض
//www.youtube.com/watch?v=V3OFPfRNC0I

// without Enum
function checkTypeWithOutEnum(type: string) {
  if (type === "frontEnd" || type === "backEnd" || type === "fullStack") {
    return true;
  } else {
    return false;
  }
}

console.log(checkTypeWithOutEnum("frontEnd"));

//  with Enum
// ممكن نعتبره عبارة عن مفاتيح
enum Developer {
  FrontEnd, //FrontEnd='frontEnd'
  BackEnd,
  FullStack,
}
// تقدر تعدل علي ال إنام بطريقة سهلة

function checkTypeWithEnum(type: Developer) {
  if (type === Developer.FrontEnd || Developer.BackEnd || Developer.FullStack) {
    return true;
  } else {
    return false;
  }
}

console.log(checkTypeWithEnum(Developer.FrontEnd));
