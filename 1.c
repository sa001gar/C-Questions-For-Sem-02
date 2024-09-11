#include <stdio.h>
// Question - WAP to print the sum and product of digits of an integer.

int cal_sum(int num); // Function Declaration for Sum of Digits.
int cal_prod(int num); // Function Declaration for Product of Digits.

int main(void)
{
  int num;
  // Taking Input
  printf("Enter an integer number : ");
  scanf("%d",&num);
  // <-- Printing Results -->
  printf("Sum of digits are = %d\n",cal_sum(num));
  printf("Product of digits are = %d\n",cal_prod(num));
  return 0;  
}

// Program for Sum of Digits
int cal_sum(int num)
{
    int remainder,sum=0;
    while(num!=0)
    {
    remainder=num%10;
    sum+=remainder;
    num/=10;
    }
    return sum;
}

// Program for Product of Digits
int cal_prod(int num)
{
    int remainder,product=1;
    while(num!=0)
    {
    remainder=num%10;
    product*=remainder;
    num/=10;
    }
    return product;
}