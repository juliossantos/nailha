// Verificar se é um dispositivo móvel
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Função para adicionar a classe no hover apenas em dispositivos móveis
function enableHoverOnMobile() {
  if (isMobileDevice()) {
    const ancoras = document.querySelectorAll('.ancoras a');
    ancoras.forEach((ancora) => {
      ancora.addEventListener('touchstart', function() {
        this.classList.add('hover');
      });

      ancora.addEventListener('touchend', function() {
        this.classList.remove('hover');
      });
    });
  }
}

// Chamar a função para ativar o hover no mobile
enableHoverOnMobile();