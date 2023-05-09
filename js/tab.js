document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelectorAll(".tab-item-title");
    arrow.forEach(function (item) {
        item.classList.add("clickable");
        item.addEventListener("click", function () {
            const categoryItemTitle = this.closest(".tab-item").querySelector(".tab-item-title");
            categoryItemTitle.classList.toggle("active");

            const categoryItemContent = this.closest(".tab-item").querySelector(
                ".tab-item-content");
            categoryItemContent.classList.toggle("active");

            if (categoryItemContent.classList.contains("active")) {
                categoryItemContent.style.maxHeight = categoryItemContent.scrollHeight + "px";
            } else {
                categoryItemContent.style.maxHeight = null;
            }
        });

    });
});