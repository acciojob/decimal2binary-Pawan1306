function decimalToBinary(num) {
  if(num==0){
	  return 0;
  }
  let binaryNumber= " ";
	while(num>0){
		binaryNumber = (num % 2) + binaryNumber;
		num = Math.floor(num/2)
	}
	return binaryNumber;
}

window.decimalToBinary = decimalToBinary;
