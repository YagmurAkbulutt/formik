// validasyon şeması 
// inputlardaki değerli geçerli olabilmesi için grekli olan koşulları ifade eder

import * as yup  from "yup";

const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'

const schema = yup.object().shape({
    //shape içeriisnde bir alan ismi ve o alan içn gerekli olan koşullar tanımlanır
   
    //email alanının geçerli olması için gerekli koşullar
    email: yup.string().required('E-mail alanını doldurmak zorunlu.').email('E-mail geçerli bir formatta değil.'),
    
    //yaş alanının geçerli olması için gerekli koşullar
    age: yup.number().min(18, "Yaş 18'den küçük olamaz.").max(100, "Yaş 100'den büyük olamaz.").integer("Lütfen bir tam sayı değeri giriniz.").required('Yaş alanını doldurmak zorunlu.'),

    //şifre için geçerli koşullar
    password: yup.string().min(5, "Şifre en az 5 karakter olmalı.").matches(regex, "Şifreniz yeterince güçlü değil.").required("Şifre zorunlu alan."),

    // şifre onay için gerekli koşullar
    //oneof kontrol ettiğimiz inputtaki verinin dizi içerisindeki değerlerden biriyle aynı olmasını kontrol eder
    // ref: farklı bir inputtaki veriyi çağırmayı sağlar
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Onay şifreniz asıl şifrenizle eşleşmiyor.").required("Şifre Onay alanını doldurmak zorunlu."),

})

export default schema;