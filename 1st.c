#include <stdio.h>
// WAP to print the sum and product of digits of an integer.
int sum(int num);
int prod(int num);

int main(void)
{
    int num;
    printf("Enter the Number : "); 
    scanf("%d",&num);
    printf("%d",sum(num));

    return 0;
}

int sum(int num){
  int total=0;
  while(num!=0){
	total+=num%10;
	num/=10;
	}
	return total;

}
