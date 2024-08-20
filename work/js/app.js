document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let currentInput = ''; //現在の入力を保存する
  let operator = ''; //選択された演算子を保存する
  let firstOperand = ''; //最初の数字を保存する

  //ディスプレイを更新する関数
  function updataDisplay(value) {
    display.value = value;
  }

  //数字のボタンが押された時の処理
  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentInput += button.getAttribute('data-number');
      updataDisplay(currentInput);
    });
  });

  //演算子ボタンが押された時の処理
  const operatorButtons = document.querySelectorAll('.operator');
  operatorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (currentInput !== '') {
        firstOperand = currentInput;
        operator = button.getAttribute('data-operator');
        currentInput = '';
      }
    });
  });

  //イコールボタンが押された時の処理
  const equalsButton = document.querySelector('.equals');
  equalsButton.addEventListener('click', function () {
    if (currentInput !== '' && firstOperand !== '') {
      let result = eval(firstOperand + operator + currentInput);
      updataDisplay(result);
      currentInput = result;
      firstOperand = '';
      operator = '';
    }
  });

  //クリアボタンが押された時の処理
  const clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', function () {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updataDisplay('');
  });
});