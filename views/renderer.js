// BuscaGeo - Interações do frontend
// Por enquanto este arquivo apenas gerencia a navegação entre as telas e
// simula ações que, no futuro, serão ligadas ao backend/Electron.

document.addEventListener('DOMContentLoaded', () => {
  const telas = {
    inicial: document.getElementById('tela-inicial'),
    principal: document.getElementById('tela-principal')
  };

  function mostrarTela(nome) {
    Object.values(telas).forEach((tela) => tela.classList.remove('ativa'));
    telas[nome].classList.add('ativa');
  }

  // Navegação: tela inicial -> principal
  const btnComecar = document.getElementById('btn-comecar');
  if (btnComecar) {
    btnComecar.addEventListener('click', () => mostrarTela('principal'));
  }

  // Botão "Adicionar pasta ou HD" na tela inicial leva à principal
  const btnAdicionarInicio = document.getElementById('btn-adicionar-inicio');
  if (btnAdicionarInicio) {
    btnAdicionarInicio.addEventListener('click', () => mostrarTela('principal'));
  }

  // Link "Início" volta para a tela inicial
  const linkInicio = document.getElementById('link-inicio');
  if (linkInicio) {
    linkInicio.addEventListener('click', (event) => {
      event.preventDefault();
      mostrarTela('inicial');
    });
  }

  // Botões "Adicionar pasta" na sidebar
  document.querySelectorAll('.btn-add-folder').forEach((botao) => {
    botao.addEventListener('click', () => {
      // No backend será usado dialog.showOpenDialog do Electron
      window.alert('Funcionalidade de seleção de pasta será integrada ao backend.');
    });
  });

  // Botão de busca (simulação)
  const btnBuscar = document.getElementById('btn-buscar');
  const campoBusca = document.getElementById('campo-busca');
  if (btnBuscar && campoBusca) {
    btnBuscar.addEventListener('click', () => {
      const termo = campoBusca.value.trim();
      if (!termo) {
        window.alert('Digite algo para buscar.');
        return;
      }
      window.alert(`Buscando por: "${termo}"\n\n(A busca real será implementada no backend.)`);
    });

    campoBusca.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        btnBuscar.click();
      }
    });
  }

  // Limpar campo de busca
  const btnLimpar = document.getElementById('limpar-busca');
  if (btnLimpar && campoBusca) {
    btnLimpar.addEventListener('click', () => {
      campoBusca.value = '';
      campoBusca.focus();
    });
  }
});
