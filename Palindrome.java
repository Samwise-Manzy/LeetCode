import java.util.*;


class Palindrome {

    class Solution {
        public boolean isPalindrome(int x) {
            int temp = x;
            int reversed = 0;
    
            if (x < 0) {
                return false;
            }
            
            
            while (temp != 0) {
                int digit = temp % 10;  // stores last digit in temp
                reversed = reversed * 10 + digit;   // appends digit to reversed
                temp /= 10; // removes last digit in temp
            }
            
            // checks if palindrone 
            if (reversed == x) {
                return true;
            } else {
                return false;
            }
     
            
        }
    }

    public static void main(String[] args) {
        
        
    }

}