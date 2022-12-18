//Methode eval interdite !!!
//Possibilité de le faire en python

class ScientificCalculus {
  constructor() { }
  isValueRight(value, pow){
      let result = false;
      if(isFinite(value) && isFinite(pow)) result = true;
      return result;
  }
  getPowValue(value, pow){
      let result = Math.pow(value, pow);
      return result;
  }
  getRootValue(value){
      let result;
      if(value < 0) result = false;
      else result = Math.sqrt(value);
      return result;
  }

}

class AritmeticCalculus{
  constructor(){}

  getAddition(value1, value2){
    return value1 + value2;
  }
  getSubstraction(value1, value2){
    return value1 - value2;
  }
  getDivision(value1, value2){
    return value1/value2;
  }
  getMultiplication(value1, value2){
    return value1*value2;
  }
}
module.exports = {
  ScientificCalculus:ScientificCalculus,
  AritmeticCalculus:AritmeticCalculus
}