// complete the given function

function palindrome(str){
	let rev = "";
	for(let i=str.length;i>=0;i--){
		rev += str.charAt(i);
	}
	if(rev.equals(str))return true;
	return false;
}
module.exports = palindrome
