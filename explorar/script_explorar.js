document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll("#categoryItem");

    categoryItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const selectedCategory = event.target.getAttribute("category");

            // Ocultar todos los productos
            const productItems = document.querySelectorAll(".product-item");
            productItems.forEach((product) => {
                product.style.display = "none";
            });

            // Mostrar solo los productos de la categoría seleccionada
            if (selectedCategory === "all") {
                productItems.forEach((product) => {
                    product.style.display = "block";
                });
            } else {
                const selectedProductItems = document.querySelectorAll(`.product-item[category="${selectedCategory}"]`);
                selectedProductItems.forEach((product) => {
                    product.style.display = "block";
                });
            }
        });
    });
});
