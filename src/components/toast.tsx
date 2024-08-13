import { toast } from "sonner";

export const showToast = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
    style: {
      background: "#333",
      color: "#fff",
    },
  });
};
