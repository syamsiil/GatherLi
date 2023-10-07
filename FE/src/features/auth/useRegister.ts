// import { User } from "@/features/thread";
import { User } from "@/features/threads/threadsCard";
import { API } from "../../libs/api";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ICreateUser {
  username: string;
  full_name: string;
  email: string;
  password: string;
}

export function useRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string[]>([]);
  const [successAlert, setSuccessAlert] = useState("");

  const navigate = useNavigate();
  const [_, setUser] = useState<User[]>([]);
  const [form, setForm] = useState<ICreateUser>({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const fetchData = async () => {
    try {
      const response = await API.get("/user");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await API.post("/auth/register", form);
      // {
      //   username: form.username,
      //   full_name: form.full_name,
      //   email: form.email,
      //   password: form.password,
      // });
      console.log(response.data, "ini post");
      setForm({
        username: "",
        full_name: "",
        email: "",
        password: "",
      });
      navigate("/login");
      setSuccessAlert("Registrasi berhasil!");
      setErrorAlert([]);

      // toast({
      //   title: "Registrasi Berhasil",
      // });
      fetchData();
    } catch (error: any) {
      if (
        error.response &&
        error.response.data.error &&
        Array.isArray(error.response.data.error)
      ) {
        setErrorAlert(error.response.data.error);
      } else {
        console.log("YANG BENER C*K", error.response.data.error as string);
        setErrorAlert([, error.response.data.error]);

        // setErrorAlert((prevAlerts) => [
        //   ...prevAlerts,
        //   { message: "Email already exists" },
        // ]);
      }

      // toast({
      //   title: "Email already exists",
      //   status: "error",
      // });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    handleSubmit,
    changeHandler,
    setErrorAlert,
    setShowPassword,
    errorAlert,
    successAlert,
    showPassword,
    form,
  };
}
