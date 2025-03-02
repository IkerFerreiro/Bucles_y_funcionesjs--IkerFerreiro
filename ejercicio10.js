const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    let capital = capitals[country];
    if (capital) {
        return capital;
    } else {
        return "Country not found";
    }
  }
  
  console.log (getCapital("Spain"));