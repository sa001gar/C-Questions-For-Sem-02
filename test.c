#include <stdio.h>
#include <string.h>
#include <stdlib.h> // Optional, for general use

#define MAX_LEN 100

int is_palindrome(char str[]);

int main(void) {
    char str[MAX_LEN];
    printf("Enter a string: ");
    scanf("%99[^\n]", str); // Correct format specifier
    
    if (is_palindrome(str)) {
        printf("%s is a palindrome.\n", str);
    } else {
        printf("%s is not a palindrome.\n", str);
    }
    
    return 0;
}

int is_palindrome(char str[]) {
    int length = strlen(str);
    for (int i = 0; i < length / 2; i++) {
        if (str[i] != str[length - i - 1]) {
            return 0;
        }
    }
    return 1;
}
