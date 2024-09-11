#include <stdio.h>
// Question - WAP to compute the sum of the first n terms of the following series S =1-2+3-4+5…………….
int series_sum(int n); // Function Declaration

int main(void)
{
    int n;
    // Taking input -->
    printf("Enter the value of n : ");
    scanf("%d",&n);

    // <-- Displaying Result -->
    printf("Sum = %d\n",series_sum(n));
   
    return 0;
}

// Function - series_sum
int series_sum(int n)
{
    int sum=0;
    for(int i=1;i<=n;i++)
    {
        if(i%2==0)
        {
            sum-=i;
        }
        else
        {
            sum+=i;
        }
    }
    return sum;
}