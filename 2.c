#include <stdio.h>

// Question - WAP to reverse a number.
int rev_num(int num); // Function Declaration for reversing.

int main(void)
{
    int num;
   
    // Taking Input
    printf("Enter the number : ");
    scanf("%d",&num);
    
    // <-- Printing the Results -->
    printf("Original = %d\n",num);
    printf("Reversed = %d\n",rev_num(num));
    return 0;
}

// Function to reverse a number -->
int rev_num(int num)
{
    int ones,rev=0;
    while(num!=0)
    {
        // let 123
        ones=num%10;
        rev=rev*10+ones;
        num/=10;
    }
    return rev;
}