#include <stdio.h>
// Question - WAP to compute the sum of the first n terms of the following series S = 1+1/2+1/3+1/4+……

float series_sum(int n); // Fuction Declaration

int main(void)
{
    int n;
    // Taking Input
    printf("Enter the value of n : ");
    scanf("%d",&n);
    // <-- Return Results -->
    printf("Sum = %f",series_sum(n));
    return 0;
}
// Calculating the sum
float series_sum(int n)
{
    float sum;
    for (int i=1;i<=n;i++)
    {
        sum+=(float)1/i;
    }
    return sum;
}