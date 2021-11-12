import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import $ from 'jquery';
import AgeCalculator from "./ageCalculator";

$('#age-entry').on('submit', (event) => {
  event.preventDefault();
  const calc = new AgeCalculator(parseInt($('#age').val()), parseInt($('#life-ex').val()));
  const lifeExpectancyArray = calc.yearsToLive();

  $('#age-mercury').text(calc.mercuryAge.toString());
  $('#age-venus').text(calc.venusAge.toString());
  $('#age-earth').text(calc.age.toString());
  $('#age-mars').text(calc.marsAge.toString());
  $('#age-jupiter').text(calc.jupiterAge.toString());

  $('#life-ex-dif-mercury').text(lifeExpectancyArray[1].toString());
  $('#life-ex-dif-venus').text(lifeExpectancyArray[2].toString());
  $('#life-ex-dif-earth').text(lifeExpectancyArray[3].toString());
  $('#life-ex-dif-mars').text(lifeExpectancyArray[4].toString());
  $('#life-ex-dif-jupiter').text(lifeExpectancyArray[5].toString());

  switch (lifeExpectancyArray[0]) {
    case ('remain'):
      $('.life-ex-rp').text("remain until");
      break;
    case ('passed'):
      $('.life-ex-rp').text("past");
      break;
  }

  $('#calculated-ages').show();
});