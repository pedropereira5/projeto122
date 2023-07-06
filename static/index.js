$(document).ready(function() {
    console.log('O Documento está Pronto');
  
    // Obtendo a data usando o objeto Date() e convertendo-a em uma string
    let date = new Date();
    let current_date = date.toDateString();
  
    // Exiba a data na página HTML usando jQuery e JS
    $('#date').text('Date: ' + current_date);
  
    let review = '';
    let input_data = '';
    let product = '';
    let emotion = '';
    let emoji_url = '';
  
    // Criando uma função para a requisição AJAX
    function ajax_request(api_url, input_data) {
      // Restante do código da função ajax_request
      // ...
    }
  
    // Verifique se o botão Enviar em 'smartphone' foi clicado e obtenha a avaliação apropriada
    $('#m_button').click(function() {
      // Restante do código do botão 'smartphone'
      // ...
    });
  
    // Verifique se o botão Enviar em 'camera' foi clicado e obtenha a avaliação apropriada
    $('#c_button').click(function() {
      // Restante do código do botão 'camera'
      // ...
    });
  
    // Verifique se o botão Enviar em 'headphones' foi clicado e obtenha a avaliação apropriada
    $('#h_button').click(function() {
      // Restante do código do botão 'headphones'
      // ...
    });
  
    // Verifique se o botão Enviar em 'videogame' foi clicado e obtenha a avaliação apropriada
    $('#v_button').click(function() {
      // Restante do código do botão 'videogame'
      // ...
    });
  
    // Se o botão SALVAR for clicado, dispare uma requisição POST na API
    $('#save_button').click(function() {
      // Restante do código do botão 'save'
      // ...
    });
  
    // Função para anexar a mensagem do usuário à janela de conversas
    function appendUserMessage(message) {
      $('#chat_messages').append('<div class="user__messages">' + message + '</div>');
    }
  
    // Inicie a conversa com o robô
    askBot();
  });
  
  // Função askBot
  // Restante do código da função askBot
  // ...
  
  // URL correta para enviar as requisições POST
  const apiURL = '/'; // Adicione a URL correta aqui
  
  // Quando o botão enviar for clicado
  $('#send_button').click(function() {
    // Obtenha o texto da caixa de texto no chatbot
    var user_bot_input_text = $('#bot_input_text').val();
  
    if (user_bot_input_text != '') {
      // Anexe a mensagem do usuário à janela de conversas
      appendUserMessage(user_bot_input_text);
  
      // Limpe a caixa de entrada de texto após enviar a mensagem
      $('#bot_input_text').val('');
  
      let chat_input_data = {
        user_bot_input_text: user_bot_input_text
      };
  
      $.ajax({
        type: 'POST',
        url: apiURL,
        data: JSON.stringify(chat_input_data),
        dataType: 'json',
        contentType: 'application/json',
        success: function(result) {
          $('#chat_messages').append('<div class="bot__messages">' + result.bot_response + '</div>');
  // Restante do código de sucesso da requisição AJAX
  // ...
        },
        error: function(result) {
          alert(result.responseJSON.message);
        }
      });
    }
  });
  
  // Se a tecla Enter (código de tecla 13) for pressionada na caixa de texto
  $('#bot_input_text').keypress(function(e) {
    if (e.which == 13) {
      $('#send_button').click(); // Dispare o evento de clique do botão Enviar
    }
  });
  