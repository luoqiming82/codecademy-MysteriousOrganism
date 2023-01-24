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

// 




//test
let x = "#1";
let y = mockUpStrand();
const obj = pAequorFactory(x,y);
console.log(obj);
//mutate()
console.log(obj.mutate())
// compare()
const pAequor2 = {specimenNum: '#2', dna: mockUpStrand()};
console.log(pAequor2);
obj.compareDNA(pAequor2);
// willLikelySurvive()
console.log(obj.willLikelySurvive());










