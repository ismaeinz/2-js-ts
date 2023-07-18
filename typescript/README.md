تمارين بسيطة علي شرح الـ تايبسكريبت

for install :
sudo npm i -g typescript
-g mean globally
[TypeScript Tutorial ( Arabic )](https://www.youtube.com/playlist?list=PLtFbQRDJ11kH1RHmJD7DYtV9RXY42Al5g)
بسم الله الرحمن الرحيم :
أولا :
تعالو نتكلم عن الـdataType :
بيتم تعريفها في الـtypeScript بالطريقة دي :
الـconst variableName: dataType = variableValue
فمثلا لو هتعرف متغير من نوعـstring هتقولـ const variableName:string وهكذا
طبعا ما ننساش إن عندنا كذا نوع من الـdataType مثلا string أو number أو boolean
فيه كمانـdataType ممكن يكون غريب شوي اسمهـany وده ببساطة نوعـdataType مالوشـdataType
في حالة انت مش عارف إي نوع الـdataType ال جيلك استخدمه

بالنسبة للـarrays في الـtypeScript بتتعرف بطريقتين الأولي زي طريقة تعريف المتغيرات
الـconst arrName: dataType []=arrValues
بالشكل ده :
الـconst myArr: number[] = [12, 90, 71]
الطريقة التانية :
الـconst arrName: Array<dataType> = arrValues

وأكيد طبعا نقدر نستخدم معاها any

انظر الصورة رقمـ1
---
ثانيا :
هنتكلم عن الـtuple وده مشـdataType إنما هو نوع من أنواع المصفوفات أو شكل معين
المصفوفة العادية بتكون عناصرها واحدة string أو number
لكن الـtuple بيديك خاصية إنك تقدر تتحكم في كل عنصر علي حدا
انظر الصورة رقمـ2
