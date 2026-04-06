document.addEventListener('DOMContentLoaded', function() {
    // اللوجو يفتح صفحة extra-content.html
    const logoIcon = document.getElementById('logoIcon');
    if (logoIcon) {
        logoIcon.addEventListener('click', () => window.location.href = 'extra-content.html');
    }

    // البحث
    const searchInput = document.getElementById('searchInput');
    const resultsSpan = document.getElementById('resultsCount');

    function removeHighlights() {
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
    }

    function highlightText(text, term) {
        if (!term.trim()) return text;
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function performSearch() {
        const term = searchInput.value.trim();
        if (!term) {
            removeHighlights();
            if (resultsSpan) resultsSpan.textContent = '';
            return;
        }

        removeHighlights();
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, li, .service-card, .faq-item p, .testimonial, .stat, .blog-post p, .service-item p, .why-item');
        let total = 0;

        elements.forEach(el => {
            const original = el.innerHTML;
            const temp = document.createElement('div');
            temp.innerHTML = original;
            const plain = temp.textContent || temp.innerText;
            if (plain.toLowerCase().includes(term.toLowerCase())) {
                const newHtml = highlightText(plain, term);
                if (newHtml !== plain) {
                    el.innerHTML = newHtml;
                    total += (plain.match(new RegExp(term, 'gi')) || []).length;
                }
            }
        });

        if (resultsSpan) {
            resultsSpan.textContent = total ? `✅ ${total} نتيجة` : '❌ لا توجد نتائج';
        }
    }

    if (searchInput) searchInput.addEventListener('input', performSearch);

    // FAQ toggle
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.parentElement.querySelector('p');
            if (answer) answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});






document.addEventListener('DOMContentLoaded', function() {
    // ----- الهامبرغر -----
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    // إغلاق القائمة عند الضغط على رابط
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu();
        });
    });

    // ----- اللوجو يفتح extra-content.html -----
    const logoIcon = document.getElementById('logoIcon');
    if (logoIcon) {
        logoIcon.addEventListener('click', () => {
            window.location.href = 'extra-content.html';
        });
    }

    // ----- البحث -----
    const searchInput = document.getElementById('searchInput');
    const resultsSpan = document.getElementById('resultsCount');

    function removeHighlights() {
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
    }

    function highlightText(text, term) {
        if (!term.trim()) return text;
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function performSearch() {
        const term = searchInput.value.trim();
        if (!term) {
            removeHighlights();
            if (resultsSpan) resultsSpan.textContent = '';
            return;
        }

        removeHighlights();
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, li, .service-card, .faq-item p, .testimonial, .stat, .blog-post p, .service-item p, .why-item');
        let total = 0;

        elements.forEach(el => {
            const original = el.innerHTML;
            const temp = document.createElement('div');
            temp.innerHTML = original;
            const plain = temp.textContent || temp.innerText;
            if (plain.toLowerCase().includes(term.toLowerCase())) {
                const newHtml = highlightText(plain, term);
                if (newHtml !== plain) {
                    el.innerHTML = newHtml;
                    total += (plain.match(new RegExp(term, 'gi')) || []).length;
                }
            }
        });

        if (resultsSpan) {
            resultsSpan.textContent = total ? `✅ تم العثور على ${total} نتيجة` : '❌ لم يتم العثور على نتائج';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }

    // FAQ toggle
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.parentElement.querySelector('p');
            if (answer) answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});






// فتح وإغلاق القائمة الجانبية
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
    if (sideMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// إغلاق القائمة عند الضغط على أي رابط
const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    });
});

// اللوجو يفتح الرئيسية
const logoIcon = document.querySelector('.logo-icon');
if (logoIcon) {
    logoIcon.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}