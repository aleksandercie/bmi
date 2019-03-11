
document.getElementById('calculate').addEventListener('click', result);


 function result () {
    event.preventDefault();
    document.getElementById('description').innerHTML ='Your Body Mass Index';
   let weight = parseFloat(document.getElementById('weight-value').value);
   let height = parseFloat(document.getElementById('height-value').value);
   
   let calculation = weight/((height/100)*(height/100));
   let rounded = Math.round( calculation * 100 ) / 100
   document.getElementById('result').innerHTML = rounded;
    if (0< rounded  && rounded < 16.49){
       document.getElementById('info').innerHTML = 'seriously underweight'
    } else if (16.5<= rounded && rounded< 18.49){
       document.getElementById('info').innerHTML = 'underweight'
    } else if (18.5<= rounded && rounded < 24.99){
       document.getElementById('info').innerHTML = 'Normal weight'
    } else if (25<= rounded && rounded < 29.99){
       document.getElementById('info').innerHTML = 'overweight'
    } else if (30<= rounded && rounded < 50){
       document.getElementById('info').innerHTML = 'obese'
    } else {
        document.getElementById('result').innerHTML = ''
       document.getElementById('info').innerHTML = 'enter correct weight and height'
    }
  
}