let titles = ['The Philosopher\'s Stone', 'The Chamber of Secrets', 'The Prisoner of Azkaban', 'The Goblet of Fire', 'The Order of the Phoenix', 'The Half-Blood Prince', 'The Deathly Hallows'];
for (let i = 0; i < titles.length; i++) {
    console.log(`${i + 1}. ${titles[i]}`);
  }

  let sum = 0;
for (let counter = 0; counter < 5; counter++) {
  sum += counter;
  if (counter == 3) {
     break;
  }
}
 
console.log(sum);