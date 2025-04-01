const products = [
    {
        name: "Anillos de Compromiso",
        price: "$2,500",
        images: [
            "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1595781518629-47f646414cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "rings",
        trending: true,
        coupleItem: true,
        badge: "Nuevo"
    },
    {
        name: "Collares Gemelos",
        price: "$1,850",
        images: [
            "https://images.unsplash.com/photo-1611591437281-4608be122683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1611591437280-5de9c8c1db52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "necklaces",
        trending: true,
        coupleItem: true,
        badge: "Popular"
    },
    {
        name: "Aros de Perlas",
        price: "$650",
        images: [
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1561172316-76bbc3117055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1635767798638-3665e0989a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "earrings",
        trending: true,
        coupleItem: false,
        badge: "Oferta"
    },
    {
        name: "Pulseras Enlazadas",
        price: "$1,200",
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "bracelets",
        trending: true,
        coupleItem: true,
        badge: "Edición Limitada"
    }
];

function renderProducts(filterCategory = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = filterCategory === 'all' 
        ? products.filter(p => p.trending)
        : filterCategory === 'couple'
        ? products.filter(p => p.coupleItem)
        : products.filter(p => p.category === filterCategory);
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `product-card bg-white rounded-lg overflow-hidden shadow-sm relative transition-all duration-300 hover:shadow-md`;
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        // Badge destacado
        const badge = product.badge ? `
            <span class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-gentle-bounce z-10">
                ${product.badge}
            </span>
        ` : '';
        
        // Indicador para parejas
        const coupleIndicator = product.coupleItem ? `
            <span class="absolute top-2 left-2 bg-love text-white text-xs px-2 py-1 rounded-full flex items-center z-10">
                <i class="fas fa-heart mr-1"></i> Pareja
            </span>
        ` : '';
        
        // Crear carrusel de imágenes con flechas mejoradas
        const carouselDots = product.images.map((_, i) => 
            `<span class="carousel-dot" data-index="${i}"></span>`
        ).join('');
        
        productCard.innerHTML = `
            ${badge}
            ${coupleIndicator}
            <div class="carousel-container aspect-square overflow-hidden relative">
                <div class="carousel-inner flex transition-transform duration-300" style="width: ${product.images.length * 100}%;">
                    ${product.images.map(img => 
                        `<div class="carousel-item" style="width: ${100 / product.images.length}%;">
                            <img src="${img}" alt="${product.name}" class="w-full h-full object-cover">
                        </div>`
                    ).join('')}
                </div>
                
                <!-- Flechas de navegación mejoradas -->
                <button class="carousel-arrow carousel-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg">
                    <i class="fas fa-chevron-left text-xl"></i>
                </button>
                <button class="carousel-arrow carousel-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg">
                    <i class="fas fa-chevron-right text-xl"></i>
                </button>
                
                <!-- Indicador de navegación (puntos) -->
                <div class="carousel-nav absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    ${carouselDots}
                </div>
                
                <!-- Indicador de posición actual -->
                <div class="carousel-counter absolute top-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full z-10">
                    <span class="current-slide">1</span>/<span>${product.images.length}</span>
                </div>
            </div>
            <div class="p-3 text-center">
                <h4 class="font-medium text-secondary truncate">${product.name}</h4>
                <p class="text-primary font-bold mt-1">${product.price}</p>
                <button class="order-btn mt-2 text-xs bg-whatsapp text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors w-full flex items-center justify-center">
                    <i class="fab fa-whatsapp mr-1"></i> Pedir por WhatsApp
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
        
        // Configurar el carrusel después de añadir al DOM
        setupCarousel(productCard, product);
        
        // Configurar botón de WhatsApp
        const orderBtn = productCard.querySelector('.order-btn');
        orderBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            orderProductViaWhatsApp(product.name, product.price);
        });
    });
}

// Función para configurar el carrusel con flechas mejoradas
function setupCarousel(productCard, product) {
    const carousel = productCard.querySelector('.carousel-inner');
    const prevBtn = productCard.querySelector('.carousel-prev');
    const nextBtn = productCard.querySelector('.carousel-next');
    const dots = productCard.querySelectorAll('.carousel-dot');
    const currentSlideEl = productCard.querySelector('.current-slide');
    
    let currentIndex = 0;
    const totalSlides = product.images.length;
    
    // Activar el primer punto
    dots[0].classList.add('active');
    
    // Actualizar el carrusel
    function updateCarousel() {
        const offset = -(currentIndex * (100 / totalSlides));
        carousel.style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Actualizar contador
        currentSlideEl.textContent = currentIndex + 1;
    }
    
    // Navegación
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });
    
    // Animar flechas al hacer clic
    [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.classList.add('arrow-click');
        });
        
        btn.addEventListener('mouseup', () => {
            btn.classList.remove('arrow-click');
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('arrow-click');
        });
    });
    
    // Click en los puntos
    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = i;
            updateCarousel();
        });
    });
    
    // Deslizar en móvil
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carouselContainer = productCard.querySelector('.carousel-container');
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Deslizar a la izquierda (siguiente)
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Deslizar a la derecha (anterior)
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
    }
    
    // Mostrar flechas al pasar el cursor sobre el producto
    carouselContainer.addEventListener('mouseenter', () => {
        prevBtn.classList.add('arrow-visible');
        nextBtn.classList.add('arrow-visible');
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        prevBtn.classList.remove('arrow-visible');
        nextBtn.classList.remove('arrow-visible');
    });
}
