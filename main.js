// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// mycode

// pAequorFactory(), object constructor

function pAequorFactory(specimenNum,dna){
  return {
    specimenNum: specimenNum,
    dna: dna,

    //mutate() method
    mutate(){
      const mutatedDna = [...this.dna];
      // randomly select a base and change it randomly
      let x = Math.floor(Math.random()*mutatedDna.length); // select a random index
      let base = returnRandBase(); 
      while(base === mutatedDna[x]){
        base = returnRandBase();
      }
      mutatedDna[x] = base;
      return `the original dna is ${this.dna}, the mutated dna is ${mutatedDna}`;
    },// end mutate()

    // compareDNA()
    compareDNA(pAequor){
      let same = 0; // initial number of identical base
      for(let i=0; i<this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          same += 1;
        }
      }

      let percentageInCommon = ((same/this.dna.length)*100).toFixed(3) + '%';
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentageInCommon} DNA in common`);
    },// end compareDNA()

    // complementStrand()
    complementStrand(){
      const complementDna = [];
      for(let val of this.dna){
          switch(val){
              case 'A':
                  complementDna.push('T');
                  break;
              case 'T':
                  complementDna.push('A');
                  break;
              case 'C':
                  complementDna.push('G');
                  break;
              case 'G':
                  complementDna.push('C');
          }
      }
      return complementDna;
    },// end complementStrand()

    // willLikelySurvive(): returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. 
    willLikelySurvive(){
      //calculate total number of 'c g'
      let x = 0; 
      this.dna.forEach(val => {
        if(val === 'C' || val==='G'){
          x += 1;}
        })
      // return true if 'c g' percentage>=60%
      if(x/this.dna.length >= 0.6){
        return true;
      }else{
        return false;
      }
    } // end willLikelySurvive()

  } //end pAequorFactory() function return
} // end pAequorFactory()

//  create 30 instances of pAequor that can survive in their natural environment.
function survivor30(){
  const result = [];
  for(let i=1; i<=30; i++){
    let dnaY = mockUpStrand();
    const pAequorX = pAequorFactory(`#${i}`,dnaY);
    while(pAequorX.willLikelySurvive() ===false){
      pAequorX.dna = mockUpStrand();
    }
    result.push(pAequorX);
  }
  return result;
}

const pAequor30 = survivor30();


/*
//test
let x = "#1";
let y = mockUpStrand();
const obj = pAequorFactory(x,y);
console.log(obj);
console.log(obj.complementStrand());
//mutate()
console.log(obj.mutate())
// compare()
const pAequor2 = {specimenNum: '#2', dna: mockUpStrand()};
console.log(pAequor2);
obj.compareDNA(pAequor2);
// willLikelySurvive()
console.log(obj.willLikelySurvive());
//30
const pAx = pAequorFactory('N',mockUpStrand());
const arr9 = [];
//console.log(pAequor30)
//pAequor30.forEach(obj => arr9.push(obj.willLikelySurvive()));
//console.log(arr9)
pAequor30.forEach(val => val.compareDNA(pAx));
*/











