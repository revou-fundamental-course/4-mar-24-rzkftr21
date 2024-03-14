function calculate() {
    try {
    let weightInput = document.getElementById('weight-input').value;
    console.log(weightInput);

    if (weightInput == '') {
        alert('Harap isi berat badan anda');
    console.log('Empty');
    } else {
        console.log('Not Empty');
    }
    if (parseInt(weightInput) > 0 && parseInt(weightInput) < 20) {
        alert('Harap isi berat badan anda dengan benar');
    } else {
        document.getElementById('result-bmi').innerHTML = weightInput;
    }
} catch (error) {
    console.log(error);
}
}