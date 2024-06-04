import { useFormik } from "formik";
import schema from "./schema";
import InputFi from "./InputFi";
import { inputs } from "./constants";

const App = () => {
  // form gönderildiğinde formData yöntemi ile verilere ulaşabiliyorduk ama hata yönetimi yapmıyorduk. hata yönetimi yapmak istersek kodları bizim yazdığımız senaryoda çok fazla kod tekrarı oalcağı için formik ve yup kütüphanelerini kullanarak bu formu yöneteceğiz
  // formik: formu yönetir, içindeki veriler hatalar vs.
  // yup : inputların geçerli olması için gereken koşulları söylüyor. inputun doğru formatta doldurulması vs
  // useFormik formikin bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //statei tutulacak olan verilerin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    //validasyon şeması
    //formiğin inputlardaki verileri tanımladığımız şemadaki koşullara uygun mu kontrol etmesini sağlar. eğerki inputtaki veri validasyon şemasında tanımladığımız koşullar uygun değilse formik tuttuğu error stateini günceller
    validationSchema: schema,

    // from gönderilince çalışacak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller
    // 1. param olarak formdaki verileri
    //2. param olarak formda çalışacak aksiyonları alır
    onSubmit: async (values, actions) => {
      // 3 saniye sonra alert ve resetform çalışır
      await new Promise((resolve) => 
        setTimeout(() => resolve(), 3000)
        );

      alert("Form Gönderildi.")

      // formu sıfırlama
      actions.resetForm();
      
    },
  });

  return (
    <div className=" bg-dark text-white">
      <div className="container py-2">
        <h2 className="text-center">Form</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-3"
        >

          {inputs.map((props) => (<InputFi formik={formik} {...props}/>) )}
         
          

          <button type="submit" disabled={formik.isSubmitting} className="my-5 mt-2">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;
