import { useForm } from "react-hook-form";
import { useNavigate , Link } from "react-router-dom";


function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitdata = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ name: data.fullname, password: data.password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/message");
  };

  return (
    <div className="App">
      <div className="container py-4">
        <h1 className="text-center text-info">Registration Form</h1>
        <form onSubmit={handleSubmit(submitdata)}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Enter Your Full Name"
              {...register("fullname", {
                required: "full name is required",
                minLength: {
                  value: 4,
                  message: "minimum 4 characters",
                },
              })}
            />
            {errors.fullname && (
              <p className="text-danger">{errors.fullname.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Your age"
              {...register("age", {
                required: "age is required",
                min: {
                  value: 18,
                  message: "minimum age is 18",
                },
                max: {
                  value: 60,
                  message: "maximum age is 60",
                },
              })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail Address"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone Number"
              {...register("phone", {
                required: "phone is required",
                pattern: {
                  value: /^\d{10}/,
                  message: "enter valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "password required",
                minLength: { value: 8, message: "minimum 8 characters" },
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="mr-4">
              Choose Your Gender
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                name="gender"
                {...register("gender", { required: "gender is required" })}
              />
              <label className="form-check-label" htmlFor="male">
                male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                name="gender"
                {...register("gender", { required: "gender is required" })}
              />
              <label className="form-check-label" htmlFor="female">
                female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="other"
                name="gender"
                {...register("gender", { required: "gender is required" })}
              />
              <label className="form-check-label" htmlFor="other">
                other
              </label>
            </div>
            {errors.gender && (
              <p className="text-danger">{errors.gender.message}</p>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <h5 className="ml-3">Already registered <Link to="/login">Login now</Link></h5>
    </div>
  );
}

export default Form;
