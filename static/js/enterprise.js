document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  if (slides.length > 1) {
    var activeIndex = 0;
    var setActive = function (index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-selected', String(i === index));
      });
      activeIndex = index;
    };

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        setActive(index);
      });
    });

    setInterval(function () {
      var next = activeIndex + 1;
      if (next >= slides.length) {
        next = 0;
      }
      setActive(next);
    }, 4200);
  }

  var inquiryForm = document.getElementById('inquiryForm');
  var formMessage = document.getElementById('formMessage');
  if (inquiryForm && formMessage) {
    inquiryForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var nameInput = inquiryForm.querySelector('input[name="name"]');
      var phoneInput = inquiryForm.querySelector('input[name="phone"]');
      var demandInput = inquiryForm.querySelector('textarea[name="demand"]');
      if (!nameInput.value.trim() || !phoneInput.value.trim() || !demandInput.value.trim()) {
        formMessage.textContent = '请完整填写姓名、电话与需求描述。';
        formMessage.className = 'form-message error';
        return;
      }
      formMessage.textContent = '提交成功，我们会在一个工作日内联系您。';
      formMessage.className = 'form-message success';
      inquiryForm.reset();
    });
  }

  var toTopButton = document.getElementById('toTop');
  if (toTopButton) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        toTopButton.classList.add('show');
      } else {
        toTopButton.classList.remove('show');
      }
    });
    toTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
