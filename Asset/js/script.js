// pegar valores do usuario
var text = document.getElementById("text");

//  GET https://haveibeenpwned.com/api/v2/{service}/{parameter} 
// função API
async function getDataFromAPI(service) {
    const apiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${service}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); // pode fazer algo com os dados da API
    } catch (error) {
      console.error("Deu ruim " + error);
    };
  };
  
  // Cria um evento de click no botão
  const button = document.querySelector('#callApiButton');
  button.addEventListener('click', () => {
    getDataFromAPI(text.value);
  });

// Verifica se há texto no input
