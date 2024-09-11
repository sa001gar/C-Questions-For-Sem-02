#include <stdio.h>

/*Question : Write a function to check whether a given string is a palindrome. 
Use this function to verify if the user input is a palindrome.*/

// Function Declaration
int is_palindrome(char str[]);

int main(void) {
    char str[100];  // Declaring string 'str' with increased size for larger inputs

    // Taking Input
    printf("Enter the String: ");
    scanf("%99[^\n]", str);  

    // Checking if the string is palindrome
    if(is_palindrome(str)) {
        printf("%s is a palindrome.\n", str);
    } else {
        printf("%s is not a palindrome.\n", str);
    }

    return 0;
}

// Function Definition
int is_palindrome(char str[]) {
    int length;
    for(length=0;str[length]!='\0';length++);

    for(int i = 0; i < length / 2; i++) {
        if(str[i] != str[length - i - 1]) {
            return 0;  // Return 0 (false) if any characters don't match
        }
    }
    return 1;  // Return 1 (true) if the entire string is a palindrome
}