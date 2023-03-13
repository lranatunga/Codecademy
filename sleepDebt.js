const getSleepHours = day =>{
    if (day === 'Monday'){
      return 8;
    } else if (day ==='Tuesday'){
      return 8;
    } else if (day === 'Wednesday'){
      return 8;
    } else if (day === 'Thursday'){
      return 8;
    } else if (day === 'Friday'){
      return 8;
    } else if (day === 'Saturday'){
      return 8;
    } else if (day === 'Sunday'){
      return 8;
    }
  
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours ('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours ('Friday') + getSleepHours('Saturday') + getSleepHours ('Sunday');
  ;
  
  const getIdealSleepHours = () =>{
    const idealHours = 7;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep.');
    }  if (actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed.');
    } if (actualSleepHours < idealSleepHours) {
      console.log('You should get some rest.'); 
    }
  
  if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
  };
  calculateSleepDebt();