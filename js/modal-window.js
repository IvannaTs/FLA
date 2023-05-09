function showModal(btns, modal, closeBtn) {
    btns.forEach(function (button) {
      button.addEventListener('click', function () {
        modal.classList.add('show');
      });
    });
  
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('show');
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.classList.remove('show');
      }
    });
  }
  
  var btnGetConsultation = document.querySelectorAll('.btn_GetConsultation');
  var modalGetConsultation = document.querySelector('#modalGetConsultation');
  var closeBtnGetConsultation = document.querySelector('.modalGetConsultation .close');
  
  showModal(btnGetConsultation, modalGetConsultation, closeBtnGetConsultation);
  
  var btnPrimaryLegalAid = document.querySelectorAll('.btn_PrimaryLegalAid');
  var modalPrimaryLegalAid = document.querySelector('#modalPrimaryLegalAid');
  var closeBtnPrimaryLegalAid = document.querySelector('#modalPrimaryLegalAid .close');
  
  showModal(btnPrimaryLegalAid, modalPrimaryLegalAid, closeBtnPrimaryLegalAid);
  
  var btnAllTypesAid = document.querySelectorAll('.btn_AllTypesAid');
  var modalAllTypesAid = document.querySelector('#modalAllTypesAid');
  var closeBtnAllTypesAid = document.querySelector('#modalAllTypesAid .close');
  
  showModal(btnAllTypesAid, modalAllTypesAid, closeBtnAllTypesAid);
  