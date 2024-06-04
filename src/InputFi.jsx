const InputFi = ({ formik, label, name, type = "text" }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] && "is-invalid"
        }`}
        name={name}
        type={type}
        value={formik.values[name]}
      />
      <div className="feedback">
        {formik.errors[name] && formik.touched[name]
          ? formik.errors[name]
          : null}{" "}
        &nbsp;
      </div>
    </div>
  );
};

export default InputFi;
