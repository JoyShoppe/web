// Datos de productos mejorados
const products = [
    {
        name: "Anillos de Compromiso",
        price: "$2,500",
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "rings",
        trending: true,
        coupleItem: true,
        badge: "Nuevo"
    },
    {
        name: "Collares Gemelos",
        price: "$1,850",
        image: "https://images.unsplash.com/photo-1611591437281-4608be122683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "necklaces",
        trending: true,
        coupleItem: true,
        badge: "Popular"
    },
    {
        name: "Aros de Perlas",
        price: "$650",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "earrings",
        trending: true,
        coupleItem: false,
        badge: "Oferta"
    },
    {
        name: "Pulseras Enlazadas",
        price: "$1,200",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "bracelets",
        trending: true,
        coupleItem: true,
        badge: "Edición Limitada"
    }
];

// Función para renderizar productos
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
        
        productCard.innerHTML = `
            ${badge}
            ${coupleIndicator}
            <div class="aspect-square overflow-hidden">
                <img src="${product.image}" alt="${product.name}" 
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-3 text-center">
                <h4 class="font-medium text-secondary truncate">${product.name}</h4>
                <p class="text-primary font-bold mt-1">${product.price}</p>
                <button class="mt-2 text-xs bg-accent text-secondary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i class="fas fa-info-circle mr-1"></i> Detalles
                </button>
            </div>
        `;
        
        productCard.addEventListener('click', () => {
            orderProduct(product.name, product.price);
        });
        
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
        const phone = "5192866585";
        const message = "¡Hola JoyShop! Estoy interesado/a en sus productos, ¿me podrían ayudar?";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    animateCounter();
    setupCategoryButtons();
    setupWhatsAppButton();
    
    // Activar primera categoría por defecto
    document.querySelector('.category-btn[data-category="all"]').classList.add('bg-primary', 'text-white');
});
