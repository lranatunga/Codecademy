let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const runnersAge =  19;
if (runnersAge > 18 && registeredEarly){
     raceNumber += 1000 
}
if (runnersAge > 18 && registeredEarly){
  console.log (`your race will start at 9.30 am ${raceNumber}`)
} 
 else if (runnersAge > 18 && !registeredEarly)
  console.log (`your race will start at 11.00 am ${raceNumber}`)

 else if(runnersAge < 18 ){
     console.log (`your race will start at 12.30 pm ${raceNumber}`)
}
else if(runnersAge === 18) 
 { console.log('You should see the registration desk')
}

