
document.getElementById("submit").addEventListener('click', function () {
    var inputAmount = document.getElementById("amount");
    var inputGold = document.getElementById("gold")
    var inputSilver = document.getElementById("silver");

    var amount = Number(inputAmount.value);
    var gold = Number(inputGold.value);
    var silver = Number(inputSilver.value);

    var goldConvert = gold * 204250;
    var silverConvert = silver * 2471;

    var total = (amount + goldConvert + silverConvert)
    var calculateZakat = Math.ceil((total / 100) * 2.5)

    if (total <= Math.floor(128244.9)) {
        Swal.fire({
            title: "your total amount Rs= "+total+'<br/> "Zakat is not obligatory on you."',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    } else {
        Swal.fire({
            title: "your total amount Rs= "+total+'<br/> &<br/>  "Zakat on these money"<br/> Rs= '+calculateZakat,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }


})