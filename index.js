// Functionality for Health Twin India

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const targetId = href.substring(1);
            if (!targetId) return;

            event.preventDefault();
            scrollToSection(targetId);
        });
    });

    const modal = document.getElementById('uploadModal');
    const openBtns = document.querySelectorAll('.open-upload');
    const closeBtn = document.querySelector('.close-modal');

    if (modal) {
        openBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    const prescriptionForm = document.getElementById('prescriptionForm');
    if (prescriptionForm && modal) {
        prescriptionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you! Your prescription request has been submitted. Our team will contact you shortly.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            prescriptionForm.reset();
        });
    }

    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('real-file');

    if (dropzone) {
        const preventDefaults = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
            dropzone.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach((eventName) => {
            dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach((eventName) => {
            dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
        });

        dropzone.addEventListener('drop', (event) => {
            const files = event.dataTransfer ? event.dataTransfer.files : [];
            handleFiles(files);
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', (event) => {
            handleFiles(event.target.files);
        });
    }

    const menuOpen = document.getElementById('mobile-menu-open');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileNav = document.querySelector('.nav-links');
    const mobileNavItems = document.querySelectorAll('.nav-links li a');

    if (menuOpen && mobileNav) {
        menuOpen.addEventListener('click', () => mobileNav.classList.add('active'));
    }

    if (menuClose && mobileNav) {
        menuClose.addEventListener('click', () => mobileNav.classList.remove('active'));
    }

    mobileNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (mobileNav) {
                mobileNav.classList.remove('active');
            }
        });
    });

    const employee = document.querySelector('#Employee-v');
    if (employee) {
        employee.addEventListener('click', function () {
            window.open('https://hti-verifyhub-2026.vercel.app', '_blank');
        });
    }

    const registerInterestBtn = document.querySelector('#ryi');
    if (registerInterestBtn) {
        registerInterestBtn.addEventListener('click', function () {
            window.open('https://form.svhrt.com/6aa6c828bef3d743c10a816d', '_blank');
        });
    }

    const latestUpdatesBtn = document.getElementById('latest-updates');
    if (latestUpdatesBtn) {
        latestUpdatesBtn.addEventListener('click', () => {
            window.location.assign('https://drive.google.com/drive/folders/1iQJdO6oUZsE5lXGCHlM8Z_KhCntlyNgU');
        });
    }

    const chooseServiceBtn = document.getElementById('choose-service');
    if (chooseServiceBtn) {
        chooseServiceBtn.addEventListener('click', () => {
            window.location.assign('https://surveyheart.com/form/6aa3a12a788fe1a732c7cb47');
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

});

function triggerFileInput() {
    const input = document.getElementById('real-file');
    if (input) {
        input.click();
    }
}

function handleFiles(files) {
    if (files && files.length > 0) {
        alert(`File selected: ${files[0].name}. Ready to upload!`);
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}
