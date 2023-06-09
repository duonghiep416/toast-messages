// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        const icons = {
            info: "fa-solid fa-info-circle",
            success: "fa-solid fa-check-circle",
            warning: "fa-solid fa-exclamation-circle",
            error: "fa-solid fa-times-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: "Success",
        message: "This is a success toast",
        type: "success",
        duration: 5000,
    });
}
function showErrorToast() {
    toast({
        title: "error",
        message: "This is a error toast",
        type: "error",
        duration: 5000,
    });
}
