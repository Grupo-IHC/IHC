let slideIndex = 0;

    // Función para mostrar un slide específico
    function showSlide(index) {
        let slides = document.querySelectorAll(".slide");
        
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex].style.display = "block";
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Asocia las funciones con los iconos de avanzar y retroceder
    document.getElementById("next-slide").addEventListener("click", nextSlide);
    document.getElementById("prev-slide").addEventListener("click", prevSlide);

    showSlide(slideIndex); 