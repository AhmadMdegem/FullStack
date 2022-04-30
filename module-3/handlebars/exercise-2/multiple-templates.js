const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderFirst = function(data){
    const source = $('#animals-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ name: data });
    $('body').append(newHTML);  
  }
  
  const renderSecond = function(data){
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ name: data });
    $('#special').append(newHTML);  
  }
  
  renderFirst(animals)
  renderSecond(languages)