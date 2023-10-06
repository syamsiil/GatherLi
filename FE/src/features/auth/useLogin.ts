import { API } from "../../libs/api";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AUTH_LOGIN } from "@/stores/rootReducer";
import { AUTH_LOGIN } from "../../stores/rootReducer";
import { useDispatch } from "react-redux";

interface ILogin {
  email: string;
  password: string;
}

export function useLogin() {
  const [errorAlert, setErrorAlert] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [_, setUser] = useState<User[]>([]);
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  // const fetchData = async () => {
  //   try {
  //     const response = await API.get("/user");
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // async function handleSubmit() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await API.post("/auth/login", form);
      dispatch(AUTH_LOGIN(response.data));
      navigate("/"); // Ganti '/dashboard' dengan rute tujuan setelah login
      console.log("ini dari login", response.data);
      setSuccessAlert("Login berhasil!");
      setErrorAlert("");

      //  {
      //     email: form.email,
      //     password: form.password,
      //   });
      // Lakukan sesuatu setelah berhasil login, misalnya redirect atau menyimpan token
      // Dapatkan token dari respons API
      // const token = response.data.token;

      // Simpan token ke state
      // setToken(authToken);
      // localStorage.setItem("token", token);
      // setAuthToken(localStorage.token);

      // setForm({
      //   email: "",
      //   password: "",
      // });

      // fetchData();
    } catch (err: any) {
      if (err.response && err.response.data) {
        setErrorAlert(err.response.data.error);
      } else {
        setErrorAlert("Terjadi kesalahan pada server");
      }

      console.log(err);
      // toast({
      //   title: "Email already exists",
      //   status: "error",
      // });
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return {
    handleSubmit,
    changeHandler,
    setErrorAlert,
    navigate,
    errorAlert,
    successAlert,
    form,
  };
}
