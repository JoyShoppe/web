// Datos de productos mejorados con múltiples imágenes
const products = [
    {
        name: "Anillos de Compromiso",
        price: "$2,500",
        images: [
            "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://i.blogs.es/f72c9a/multas-fabricantes-coches-portada/200_200.jpeg",
            "https://images.unsplash.com/photo-1595781518629-47f646414cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            // Añade más imágenes aquí
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1561172316-76bbc3117055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "rings",
        trending: true,
        coupleItem: true,
        badge: "Nuevo"
    },
    // ... otros productos

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
            <span class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-gentle-bounce">
                ${product.badge}
            </span>
        ` : '';
        
        // Indicador para parejas
        const coupleIndicator = product.coupleItem ? `
            <span class="absolute top-2 left-2 bg-love text-white text-xs px-2 py-1 rounded-full flex items-center">
                <i class="fas fa-heart mr-1"></i> Pareja
            </span>
        ` : '';
        
        // Contenido de imágenes (diferente según cantidad)
        let imagesContent;
        if (product.images.length > 1) {
            // Slider para múltiples imágenes
            const sliderId = `slider-${index}`;
            const dotsId = `dots-${index}`;
            
            imagesContent = `
                <div class="aspect-square overflow-hidden relative">
                    <div id="${sliderId}" class="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide" style="scroll-behavior: smooth;">
                        ${product.images.map((img, imgIndex) => `
                            <div class="flex-shrink-0 w-full h-full snap-start">
                                <img src="${img}" alt="${product.name}" 
                                     class="w-full h-full object-cover">
                            </div>
                        `).join('')}
                    </div>
                    <div id="${dotsId}" class="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        ${product.images.map((_, i) => `
                            <span data-index="${i}" class="dot w-2 h-2 rounded-full ${i === 0 ? 'bg-primary bg-opacity-100' : 'bg-white bg-opacity-60'} cursor-pointer"></span>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Configurar el slider después de añadir al DOM
            setTimeout(() => setupSlider(sliderId, dotsId), 0);
        } else {
            // Imagen única (sin slider)
            imagesContent = `
                <div class="aspect-square overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" 
                         class="w-full h-full object-cover">
                </div>
            `;
        }
        
        productCard.innerHTML = `
            ${badge}
            ${coupleIndicator}
            ${imagesContent}
            <div class="p-3 text-center">
                <h4 class="font-medium text-secondary truncate">${product.name}</h4>
                <p class="text-primary font-bold mt-1">${product.price}</p>
                <a href="https://wa.me/51928669585?text=¡Hola JoyShop! Estoy interesado en comprar: ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)})" 
                   target="_blank"
                   class="mt-2 inline-block text-xs bg-whatsapp text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors">
                    <i class="fab fa-whatsapp mr-1"></i> Pedir por WhatsApp
                </a>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}
// Función para animar contador
function animateCounter() {
    const counter = document.querySelector('.counter');
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const current = Math.floor(progress * target);
        
        counter.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };
    
    requestAnimationFrame(updateCounter);
}

// Configurar botones de categorías
function setupCategoryButtons() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
            this.classList.add('bg-primary', 'text-white');
            const category = this.getAttribute('data-category');
            renderProducts(category);
        });
    });
}

// Configurar botón de WhatsApp
function setupWhatsAppButton() {
    document.getElementById('whatsappButton').addEventListener('click', function(e) {
        e.preventDefault();
        const phone = "51928669585";
        const message = "¡Hola JoyShop! Estoy interesado/a en sus productos, ¿me podrían ayudar?";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    animateCounter();
    setupCategoryButtons();
    
    // Activar primera categoría por defecto
    document.querySelector('.category-btn[data-category="all"]').classList.add('bg-primary', 'text-white');
    
    // Observar cambios en los sliders de imágenes
    setupImageSliders();
});

function setupImageSliders() {
    const sliders = document.querySelectorAll('.product-card .flex.overflow-x-auto');
    
    sliders.forEach(slider => {
        const indicators = slider.nextElementSibling.querySelectorAll('span');
        
        slider.addEventListener('scroll', () => {
            const scrollPosition = slider.scrollLeft;
            const slideWidth = slider.clientWidth;
            const currentSlide = Math.round(scrollPosition / slideWidth);
            
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('bg-primary', 'bg-opacity-100');
                    indicator.classList.remove('bg-opacity-60');
                } else {
                    indicator.classList.remove('bg-primary', 'bg-opacity-100');
                    indicator.classList.add('bg-opacity-60');
                }
            });
        });
    });
}
function setupSlider(sliderId, dotsId) {
    const slider = document.getElementById(sliderId);
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer.querySelectorAll('.dot');
    const slides = slider.querySelectorAll('div');
    const slideWidth = slider.clientWidth;
    
    let currentSlide = 0;
    
    // Configurar eventos para los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Configurar eventos de deslizamiento táctil
    let startX, moveX;
    let isDragging = false;
    
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        slider.style.scrollBehavior = 'auto';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        moveX = e.pageX - slider.offsetLeft;
        const walk = (moveX - startX) * 1.5;
        slider.scrollLeft = slider.scrollLeft - walk;
    });
    
    slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.scrollBehavior = 'smooth';
        updateCurrentSlide();
    });
    
    slider.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    
    // Para dispositivos táctiles
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        slider.style.scrollBehavior = 'auto';
    });
    
    slider.addEventListener('touchmove', (e) => {
        e.preventDefault();
        moveX = e.touches[0].pageX - slider.offsetLeft;
        const walk = (moveX - startX) * 1.5;
        slider.scrollLeft = slider.scrollLeft - walk;
    });
    
    slider.addEventListener('touchend', () => {
        slider.style.scrollBehavior = 'smooth';
        updateCurrentSlide();
    });
    
    function updateCurrentSlide() {
        const scrollPosition = slider.scrollLeft;
        currentSlide = Math.round(scrollPosition / slideWidth);
        updateSlider();
    }
    
    function updateSlider() {
        slider.scrollTo({
            left: currentSlide * slideWidth,
            behavior: 'smooth'
        });
        
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('bg-primary', 'bg-opacity-100');
                dot.classList.remove('bg-opacity-60');
            } else {
                dot.classList.remove('bg-primary', 'bg-opacity-100');
                dot.classList.add('bg-white', 'bg-opacity-60');
            }
        });
    }
    
    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', () => {
        updateSlider();
    });
}
