import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import LoginForm from "../../../components/Auth/LoginForm";
import { login } from "../../../api/AuthAPI";
import { LoginType } from "../../../types";

export default function LoginView() {
  const navigate = useNavigate();

  const initialValues: LoginType = {
    user: "",
    userPassword: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Sesion iniciada correctamente");
      navigate("/admin");
      reset();
    },
  });

  const handleForm = (formData: LoginType) => mutate(formData);
  return (
    <main className="w-full h-screen flex px-4 md:px-6 lg:px-0 justify-center items-center relative bg-gradient-to-r from-quaternary ">
      <Link
        to="/"
        className="absolute top-6 left-6 bg-primary text-white rounded-xl px-6 py-4 uppercase font-bold hover:bg-secondary transition-all"
      >
        Volver al home
      </Link>
      <div className="w-full max-w-screen-md rounded-2xl shadow-xl p-4 md:p-16 bg-white">
        <h3 className="text-3xl md:text-5xl font-bold mt-5 mb-2 text-primary text-left">
          Iniciar sesion
        </h3>
        <p className="text-font-color mb-5 text-left">
          Introduzca su dirección de correo electrónico para acceder a su cuenta
        </p>
        <form
          onSubmit={handleSubmit(handleForm)}
          noValidate
          className="my-4 w-full space-y-4 flex flex-col mx-auto text-start"
        >
          <LoginForm register={register} errors={errors} />
          <input
            type="submit"
            value={"Iniciar Sesion"}
            className="w-full bg-primary mb-5 py-3 text-white text-xl rounded cursor-pointer hover:bg-secondary transition-colors"
          />
        </form>
      </div>
    </main>
  );
}
