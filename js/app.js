const products = [
    {
        name: "Maquillaje",
        images: [
            'https://i.ibb.co/x0NhPnR/Rimel.jpg ',
            "https://i.ibb.co/XrdyxgCP/Imagen-de-Whats-App-2025-04-01-a-las-18-17-18-21498e97.jpg",
            "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19917565_1/w=800,h=800,fit=pad",
            "img\Rimel.jpg",
            "",
            ""
        ],
        category: "rings",
        trending: true,
        coupleItem: true,
        badge: "Nuevo"
    },
    {
        name: "Collares Gemelos",
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
        name: "Aros de Diamantes",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "earrings",
        trending: true,
        coupleItem: false,
        badge: "Nuevo"
    },
    {
        name: "Anillos de Plata",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "rings",
        trending: true,
        coupleItem: false,
        badge: "Oferta"
    },
    {
        name: "Collar de Corazón",
                images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        category: "necklaces",
        trending: true,
        coupleItem: true,
        badge: "Popular"
    },
    {
        name: "Pulseras Enlazadas",
      
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

let currentPage = 1;
const productsPerPage = 6;
let currentFilter = 'all';

function renderProducts(filterCategory = 'all') {
    currentFilter = filterCategory;
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = filterCategory === 'all' 
        ? products.filter(p => p.trending)
        : filterCategory === 'couple'
        ? products.filter(p => p.coupleItem)
        : products.filter(p => p.category === filterCategory);
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    paginatedProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `product-card bg-white rounded-lg overflow-hidden shadow-sm relative transition-all duration-300 hover:shadow-md`;
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        const badge = product.badge ? `
            <span class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-gentle-bounce">
                ${product.badge}
            </span>
        ` : '';
        
        const coupleIndicator = product.coupleItem ? `
            <span class="absolute top-2 left-2 bg-love text-white text-xs px-2 py-1 rounded-full flex items-center">
                <i class="fas fa-heart mr-1"></i> Pareja
            </span>
        ` : '';
        
    
        let imagesContent;
        if (product.images.length > 1) {
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
            
            setTimeout(() => setupSlider(sliderId, dotsId), 0);
        } else {
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
                <a href="https://wa.me/51928669585?text=¡Hola JoyShop! Estoy interesado en comprar: ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)})" 
                   target="_blank"
                   class="mt-2 inline-block text-xs bg-whatsapp text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors">
                    <i class="fab fa-whatsapp mr-1"></i> Hacer pedido
                </a>
                <a href="https://wa.me/51928669585?text=¡Hola JoyShop! Estoy interesado en comprar: ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)})" 
                   target="_blank"
                   class="mt-2 inline-block text-xs bg-whatsapp text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors">
                   Visulizar catalogo
                </a>
            </div>
             <div class="p-3 text-center">
            </div>
            
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    updatePaginationControls(filteredProducts.length);
    
    updateProductsCount(filteredProducts.length, startIndex, endIndex);
}

function updatePaginationControls(totalProducts) {
    const paginationControls = document.getElementById('paginationControls');
    if (!paginationControls) return;
    
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    paginationControls.innerHTML = `
        <button onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''} 
            class="px-3 py-1 bg-white rounded-md border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}">
            <i class="fas fa-chevron-left"></i>
        </button>
        
        <span class="text-sm">Página ${currentPage} de ${totalPages}</span>
        
        <button onclick="changePage(1)" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} 
            class="px-3 py-1 bg-white rounded-md border ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
}

function updateProductsCount(totalProducts, startIndex, endIndex) {
    const productsCountElement = document.getElementById('productsCount');
    if (!productsCountElement) return;
    
    if (totalProducts === 0) {
        productsCountElement.textContent = "No se encontraron productos";
        return;
    }
    
    
}

function changePage(step) {
    const filteredProducts = currentFilter === 'all' 
        ? products.filter(p => p.trending)
        : currentFilter === 'couple'
        ? products.filter(p => p.coupleItem)
        : products.filter(p => p.category === currentFilter);
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    const newPage = currentPage + step;
    if (newPage > 0 && newPage <= totalPages) {
        currentPage = newPage;
        renderProducts(currentFilter);
    }
}

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

function setupCategoryButtons() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
            this.classList.add('bg-primary', 'text-white');
            const category = this.getAttribute('data-category');
            currentPage = 1; 
            renderProducts(category);
        });
    });
}

function setupWhatsAppButton() {
    document.getElementById('whatsappButton').addEventListener('click', function(e) {
        e.preventDefault();
        const phone = "51928669585";
        const message = "¡Hola JoyShop! Estoy interesado/a en sus productos, ¿me podrían ayudar?";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

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

// Elimina la función setupSlider completa y reemplázala por esta versión simplificada:
function setupSlider(sliderId, dotsId) {
    const slider = document.getElementById(sliderId);
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer.querySelectorAll('.dot');
    
    // Configuración básica del slider
    slider.style.scrollSnapType = 'x mandatory';
    slider.querySelectorAll('div').forEach(slide => {
        slide.style.scrollSnapAlign = 'start';
    });

    // Actualizar puntos indicadores al hacer scroll
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft;
        const slideWidth = slider.clientWidth;
        const currentSlide = Math.round(scrollPosition / slideWidth);
        
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('bg-primary', 'bg-opacity-100');
                dot.classList.remove('bg-opacity-60');
            } else {
                dot.classList.remove('bg-primary', 'bg-opacity-100');
                dot.classList.add('bg-opacity-60');
            }
        });
    });

    // Configurar eventos para los puntos indicadores
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollTo({
                left: index * slider.clientWidth,
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    animateCounter();
    setupCategoryButtons();
    setupWhatsAppButton();
        document.querySelector('.category-btn[data-category="all"]').classList.add('bg-primary', 'text-white');
    
    setupImageSliders();
});
