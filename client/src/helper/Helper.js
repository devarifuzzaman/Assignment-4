import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class FormHelper {
	IsEmpty(value) {
		return value.length === 0; // true if get empty
	}
	SuccessToast(msg) {
		toast.success(msg);
	}
	ErrorToast(msg) {
		toast.error(msg);
	}

	DeleteAlert() {
		return MySwal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				return true;
			}
		});
	}
}

export const {SuccessToast, ErrorToast, IsEmpty, DeleteAlert } =  new FormHelper();