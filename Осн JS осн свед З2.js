function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
    if (isNaN(+percent)) {
     console.log("Введите процентную ставку")
    }; 
    
    if (isNaN(+contribution)) {
     console.log("Введите сумму первоначального взноса")
    };
    
    if (isNaN(+amount)) {
     console.log("Введите сумму кредита")
    };
    
    if (isNaN(+countMonths)) {
     console.log("Введите срок кредита")
    };
  
    percent = (percent / 100 / 12);
    
    let creditBody = amount - contribution;
    
    let contributionMonth = creditBody * (percent + (percent / (((1 + percent) ^ countMonths) - 1)));
  
    console.log(contributionMonth);
    
    let generalSum = contributionMonth * countMonths;
    
    generalSum = generalSum.toFixed(0);
    
    console.log(generalSum);
     
    };
   
  
  calculateTotalMortgage(100, 5000, 10000, 10);