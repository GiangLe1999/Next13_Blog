import Swal from "sweetalert2";

async function DeletePopup(locale: string, callback: () => Promise<void>) {
  return Swal.fire({
    title: locale === "en" ? "Are you sure?" : "Bạn chắc chắn chứ?",
    text:
      locale === "en"
        ? "You won't be able to revert this comment!"
        : "Bạn sẽ không thể khôi phục lại comment này!",
    icon: "warning",
    iconColor: "#c9005b",
    showCancelButton: true,
    confirmButtonColor: "#c9005b",
    cancelButtonColor: "#474747",
    confirmButtonText: locale === "en" ? "Yes, delete it!" : "Tôi chắc chắn",
    cancelButtonText: locale === "en" ? "Cancel" : "Hủy",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await callback();
      Swal.fire({
        title: locale === "en" ? "Deleted!" : "Đã xóa",
        text:
          locale === "en"
            ? "Your comment has been deleted."
            : "Comment của bạn đã được xóa thành công",
        confirmButtonColor: "#c9005b",
        confirmButtonText: locale === "end" ? "Continue" : "Tiếp tục",
        icon: "success",
        iconColor: "#c9005b",
      });
    }
  });
}

export default DeletePopup;
