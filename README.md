# GS-webdev-frontend
Global Solution desenvolvida por Cainã Sandes Batista, RM: 568571. <br>
Apresentado ao curso de Engenharia de Software. <hr>

<h3>Nome do Projeto:</h3> 
<p>O FUTURO DO TRABALHO</p>

<h3>Descrição do Caso:</h3> 
<p>
  O projeto foi desenvolvido para a Global Solution FIAP 2025 com o tema <b>"O Futuro do Trabalho – Conectando pessoas, competências e propósito por meio da tecnologia"</b>. O objetivo é propor uma solução que use inovação e tecnologia para tornar o futuro do trabalho mais justo, inclusivo e sustentável.

O desafio está alinhado com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, especialmente: ODS 4 (educação de qualidade), ODS 8 (trabalho decente e crescimento econômico), ODS 9 (indústria, inovação e infraestrutura) e ODS 10 (redução das desigualdades).
</p>

<h3>Estrutura do projeto:</h3> <p>
<ul>
  <li>GS-webdev-frontend (folder)</li>
  <ul>
    <b><li>index.html</b> - Arquivo principal com a estrutura da página (landing page), incluindo o cabeçalho, a seção de cards de profissionais, o quiz e o rodapé. Contém também a estrutura do modal/slideshow.</li>
    <li>README.md</li>
    <li>src</li>
    <ul>
      <li>assets</li>
      <ul>
        <li>imgs</li>
        <ul>
          <li>p1.png à p10.png – Imagens de perfil dos profissionais simulados.</li>
          <li>p1.png à p10.png – Ícone da página.</li>
        </ul>
      </ul>
      <li>css</li>
      <ul>
        <b><li>style.css</b> - Estilização da aplicação, utilizando flexbox para o layout principal e responsividade, além de transições e transformações para o efeito hover nos cards.</li>
      </ul>
      <li>js</li>
      <ul>
        <b><li>dados.js</b> - Contém a array "perfis" com os dados de 10 profissionais e a array "perguntas" para o quiz.</li>
        <b><li>main.js</b> - Lógica JavaScript que controla: a abertura/fechamento e navegação do modal/slideshow (mostrando dados detalhados); as funções de simulação para os botões "Recomendar profissional" e "Enviar mensagem"; e o funcionamento interativo do quiz.</li>
      </ul>
    </ul>
  </ul>
</ul>

<h3>Objetivo:</h3> <p>
Desenvolver uma aplicação web interativa utilizando HTML, CSS e JavaScript, que simule uma rede profissional semelhante ao LinkedIn, focada em conectar talentos e incentivar o desenvolvimento de competências.  
A aplicação exibe uma listagem de 10 perfis de profissionais (cards) e permite visualizar informações completas (pessoais, acadêmicas, habilidades, soft skills e hobbies) em um slideshow modal interativo.
<p>

<h3>Desenvolvimento:</h3> 
<p>
A aplicação foi desenvolvida seguindo os requisitos das disciplinas de Front-End Design e Web Development, utilizando HTML, CSS e JavaScript para composição estrutural, estilização, interatividade e exibição dinâmica dos dados dos profissionais.  
Foram aplicados:
</p>

<ul>

  <li><b>HTML</b></li>
  <ul>
    <li><code>index.html</code> – Estruturação da landing page utilizando elementos semânticos como <code>header</code>, <code>main</code>, <code>section</code> e <code>footer</code>.</li>
    <li><code>article.card</code> – Cards utilizados para apresentação dos dados básicos dos profissionais.</li>
    <li><code>div.modal</code> – Estrutura utilizada para exibir o SlideShow com informações detalhadas de cada perfil.</li>
  </ul>

  <li><b>CSS</b></li>
  <ul>
    <li><code>display: flex</code> – Utilizado na área de cards para garantir organização responsiva.</li>
    <li><code>:hover</code> e <code>transition</code> – Aplicados aos cards, criando efeitos de interação como <code>transform: translateY(-6px)</code> e ajuste de <code>box-shadow</code>.</li>
    <li><code>@media</code> – Responsividade aplicada para adaptar o layout a diferentes tamanhos de tela.</li>
  </ul>

  <li><b>JavaScript</b></li>
  <ul>
    <li><code>var perfis = [...]</code> – Array contendo 10 objetos simulando informações completas dos profissionais.</li>
    <li><code>abrirModal(i)</code> e <code>mostrarPerfil(i)</code> – Funções responsáveis pela exibição do slideshow e carregamento dos dados do perfil selecionado.</li>
    <li><code>anterior()</code> e <code>proximo()</code> – Navegação entre os perfis dentro do slideshow.</li>
    <li><code>avaliarQuiz()</code> – Lógica de validação das respostas e cálculo da pontuação final no Quiz.</li>
  </ul>

  <li><b>Conteúdo e Propósito</b></li>
  <ul>
    <li>Referência aos ODS 4, 8, 9 e 10, reforçando alinhamento com temas de educação, trabalho digno, inovação e inclusão.</li>
  </ul>

</ul>

<p>
O código também inclui a simulação dos botões “Recomendar profissional” e “Enviar mensagem”, implementados com alertas, conforme o requisito de não haver envio real.
</p>


<h3>Publicação:</h3> <p>
O projeto foi publicado no GitHub Pages para visualização online. <br>
🔗 Link: ...
</p>



