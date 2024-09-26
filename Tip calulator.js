const amount=document.getElementbyId("amount");
const guests=document.getElementbyId("guests");
const quality=document.getElementbyId("quality");
const tipAmount = document.getElementbyId
("tip-amount");

calculate = () =>{
    const tip= ((amount.value * quality.value) /
        (guests.value)).toFixed(2);
        amount.value = '';
        guests.value ='';
        quality.value ='';
        if (tip === ('NaN'){
            tipAmount.innerHtml = 'Tip each';
        }
        
}