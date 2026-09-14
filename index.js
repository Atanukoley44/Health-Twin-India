// Functionality for Health Twin India

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // 2. Modal Logic
    const modal = document.getElementById('uploadModal');
    const openBtns = document.querySelectorAll('.open-upload');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Stop scroll
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 3. Form Submission
    const prescriptionForm = document.getElementById('prescriptionForm');
    prescriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your prescription request has been submitted. Our team will contact you shortly.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        prescriptionForm.reset();
    });

    // 4. Drag and Drop for Upload Zone
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('real-file');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
    });

    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

});

function triggerFileInput() {
    document.getElementById('real-file').click();
}

function handleFiles(files) {
    if (files.length > 0) {
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

// Functionality for Health Twin India

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll Navigation
    document.querySelectorAll('nav a, .btn-blue').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || this.getAttribute('onclick');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });

    // 2. Modal Logic
    const modal = document.getElementById('uploadModal');
    const openBtns = document.querySelectorAll('.open-upload');
    const closeBtn = document.querySelector('.close-modal');

    if (openBtns && modal) {
        openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 3. Form Submission
    const prescriptionForm = document.getElementById('prescriptionForm');
    if (prescriptionForm) {
        prescriptionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your prescription request has been submitted. Our team will contact you shortly.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            prescriptionForm.reset();
        });
    }

    // 4. Drag and Drop for Upload Zone
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('real-file');

    if (dropzone) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
        });

        dropzone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
    }

});

function triggerFileInput() {
    const input = document.getElementById('real-file');
    if (input) input.click();
}

function handleFiles(files) {
    if (files.length > 0) {
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


document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById('mobile-menu-open');
    const menuClose = document.getElementById('mobile-menu-close');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Open Menu
    menuOpen.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    // Close Menu
    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Close menu when a link is clicked (optional but recommended)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});



//Employee Verification button click event

const employee = document.querySelector("#Employee-v");

employee.addEventListener("click", function () {
    window.open("https://drive.google.com/drive/folders/14wT3fn8WuzFEYkNzovEofnGG3PVTJFaf", "_blank");
});

//Partner Section Register your interest button click event

const ryi = document.querySelector("#ryi");

ryi.addEventListener("click", function () {
    window.open("https://form.svhrt.com/6aa6c828bef3d743c10a816d", "_blank");
});
