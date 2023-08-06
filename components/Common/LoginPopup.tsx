import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

async function LoginPopup(locale: string) {
  return Swal.fire({
    title: "Oops...",
    text:
      locale === "en"
        ? "You have to login to like comment."
        : "Bạn cần đăng nhập để like comment.",
    icon: "error",
    iconColor: "#c9005b",
    confirmButtonColor: "#c9005b",
    confirmButtonText: locale === "en" ? "Login" : "Đăng nhập",
  }).then(async (result) => {
    if (result.isConfirmed) {
      signIn("github");
    }
  });
}

export default LoginPopup;
