const ages=[10,12,14,16];
const ages2=[9,7,5];
const ages3=[9,7,5,89];
const allAges=ages.concat(ages2).concat(ages3);
const allAges2=[...ages,...ages2,5,...ages3]
//console.log(allAges2);
const takaPoisa=[650,780,400];
const maximum=Math.max(...takaPoisa);
console.log(maximum);