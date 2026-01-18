"use client";

import Image from "next/image";

import bg from "@/public/images/login/bg.jpg";
import girl from "@/public/images/login/girl.png";
import trees from "@/public/images/login/trees.png";

import leaf1 from "@/public/images/login/leaf_01.png";
import leaf2 from "@/public/images/login/leaf_02.png";
import leaf3 from "@/public/images/login/leaf_03.png";
import leaf4 from "@/public/images/login/leaf_04.png";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useLogin } from "@/src/hooks/useLogin";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();
  const {mutate, isPending, error} = useLogin();
  const { data: user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

   // 🔥 Role-based redirect
  useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case "super_admin":
        router.replace("/super-admin");
        break;

      case "admin":
        router.replace("/home");
        break;

      case "teacher":
        router.replace("/teacher/dashboard");
        break;

      case "school":
        router.replace("/school/dashboard");
        break;

      case "parent":
        router.replace("/parent/dashboard");
        break;

      case "student":
        router.replace("/student/dashboard");
        break;

      default:
        router.replace("/login");
    }
  }, [user, router]);

  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden font-[Poppins]">
      {/* Background */}
      <Image
        src={bg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Trees */}
      <Image
        src={trees}
        alt="trees"
        className="absolute top-0 left-0 w-full h-full object-cover z-100 pointer-events-none"
      />

      {/* Girl Animation */}
      <Image
        src={girl}
        alt="girl"
        className="absolute scale-[0.65] pointer-events-none animate-girl"
      />

      {/* Falling Leaves */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="relative w-full h-full">
          {[leaf1, leaf2, leaf3, leaf4, leaf1, leaf2, leaf3, leaf4].map(
            (leaf, i) => (
              <div key={i} className={`absolute animate-leaf leaf-${i + 1}`}>
                <Image src={leaf} alt="leaf" />
              </div>
            )
          )}
        </div>
      </div>

      {/* Login Card */}
      
      <form
      onSubmit={handleSubmit}
        className="relative z-20 w-125 p-15 flex flex-col gap-8 rounded-2xl 
        bg-white/25 backdrop-blur-lg border border-white/50 shadow-2xl"
      >
        <h2 className="text-center text-4xl font-semibold text-[#8f2c24]">
          Sign In
        </h2>

        <div className="flex justify-between">
          <input
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            placeholder="Email"
            className="w-full p-4 text-xl rounded-md outline-none text-[#8f2c24] placeholder-[#8f2c24]"
          />
          <Mail className="mt-4" />
        </div>

        <div className="flex justify-between">
          <input
            onChange={handleChange}
            value={formData.password}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-4 text-xl rounded-md outline-none text-[#8f2c24] placeholder-[#8f2c24]"
          />
          {showPassword ? (
            <EyeOff
              className="mt-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Eye
              className="mt-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button
        type="submit"
          disabled = {isPending}
          className="w-full p-4 text-xl font-medium text-white rounded-md 
          bg-[#8f2c24] hover:bg-[#d64c42] transition duration-500"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500 text-center">
            {(error as any)?.response?.data?.error || "Login failed"}
          </p>
        )}

        <div className="flex justify-center text-xl font-medium text-[#8f2c24]">
          <a href="#">Forget Password</a>
        </div>
      </form>
    </section>
  );
};

export default Login;
