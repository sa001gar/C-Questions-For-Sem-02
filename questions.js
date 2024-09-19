const questionData = {
  questions: [
    {
      question: "1. WAP to print the sum and product of digits of an integer.",
      solution: `
                    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                        <pre><code class="language-c">
#include &lt;stdio.h&gt;

int main(void) {
    int n, sum = 0, product = 1, digit;
    printf("Enter an integer: ");
    scanf("%d", &n);
    
    while (n != 0) {
        digit = n % 10;
        sum += digit;
        product *= digit;
        n /= 10;
    }
    
    printf("Sum of digits: %d\\n", sum);
    printf("Product of digits: %d\\n", product);
    
    return 0;
}
                        </code></pre>
                    </div>
                    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                        <h3 class="text-lg font-semibold">Expected Output:</h3>
                        <pre>Enter an integer: 1234<br>Sum of digits: 10<br>Product of digits: 24</pre>
                    </div>
                    `,
    },
    {
      question: "2. WAP to reverse a number.",
      solution: `
                    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                        <pre><code class="language-c">
#include &lt;stdio.h&gt;

int main(void) {
    int n, reversed = 0, digit;
    printf("Enter an integer: ");
    scanf("%d", &n);
    
    while (n != 0) {
        digit = n % 10;
        reversed = reversed * 10 + digit;
        n /= 10;
    }
    
    printf("Reversed Number: %d\\n", reversed);
    
    return 0;
}
                        </code></pre>
                    </div>
                    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                        <h3 class="text-lg font-semibold">Expected Output:</h3>
                        <pre>Enter an integer: 1234<br>Reversed Number: 4321</pre>
                    </div>
                    `,
    },
    {
      question:
        "3. WAP to compute the sum of the first n terms of the series S = 1 + 1/2 + 1/3 + ...",
      solution: `
                    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                        <pre><code class="language-c">
#include &lt;stdio.h&gt;

int main(void) {
    int n;
    float sum = 0.0;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    for (int i = 1; i <= n; i++) {
        sum += 1.0 / i;
    }
    
    printf("Sum of the series: %f\\n", sum);
    
    return 0;
}
                        </code></pre>
                    </div>
                    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                        <h3 class="text-lg font-semibold">Expected Output:</h3>
                        <pre>Enter the number of terms: 4<br>Sum of the series: 2.083333</pre>
                    </div>
                    `,
    },
    {
      question:
        "4. WAP to compute the sum of the first n terms of the series S = 1 - 2 + 3 - 4 + ...",
      solution: `
                    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                        <pre><code class="language-c">
#include &lt;stdio.h&gt;

int main(void) {
    int n, sum = 0;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    for (int i = 1; i <= n; i++) {
        sum += (i % 2 == 0) ? -i : i;
    }
    
    printf("Sum of the series: %d\\n", sum);
    
    return 0;
}
                        </code></pre>
                    </div>
                    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                        <h3 class="text-lg font-semibold">Expected Output:</h3>
                        <pre>Enter the number of terms: 5<br>Sum of the series: 3</pre>
                    </div>
                    `,
    },
    {
      question:
        "5. Write a function that checks whether a given string is Palindrome or not.",
      solution: `
                    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                        <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int isPalindrome(char str[]) {
    int left = 0;
    int right = strlen(str) - 1;
    
    while (left < right) {
        if (str[left] != str[right]) {
            return 0; // Not a palindrome
        }
        left++;
        right--;
    }
    return 1; // Is a palindrome
}

int main(void) {
    char str[100];
    printf("Enter a string: ");
    scanf("%s", str);
    
    if (isPalindrome(str)) {
        printf("The string is a palindrome.\\n");
    } else {
        printf("The string is not a palindrome.\\n");
    }
    
    return 0;
}
                        </code></pre>
                    </div>
                    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                        <h3 class="text-lg font-semibold">Expected Output:</h3>
                        <pre>Enter a string: radar<br>The string is a palindrome.</pre>
                    </div>
                    `,
    },
    {
      question:
        "6. Write a function to find whether a given number is prime or not. Use the same to generate the prime numbers less than 100. ",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main(void) {
    for (int i = 2; i < 100; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97</pre>
            </div>
            `,
    },
    {
      question: "7. WAP to compute the factors of a given number.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

int main(void) {
    int n;
    printf("Enter an integer: ");
    scanf("%d", &n);
    
    printf("Factors of %d are: ", n);
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>Enter an integer: 12<br>Factors of 12 are: 1 2 3 4 6 12</pre>
            </div>
            `,
    },
    {
      question: "8. Write a macro that swaps two numbers. WAP to use it.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

#define SWAP(x, y) { int temp = x; x = y; y = temp; }

int main(void) {
    int a = 5, b = 10;
    printf("Before swapping: a = %d, b = %d\\n", a, b);
    SWAP(a, b);
    printf("After swapping: a = %d, b = %d\\n", a, b);
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>Before swapping: a = 5, b = 10<br>After swapping: a = 10, b = 5</pre>
            </div>
            `,
    },
    {
        "question": "9. WAP to perform actions on an array: Print array, Find max, Find min.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    
    int main(void) {
        int n, choice;
        printf("Enter number of elements: ");
        scanf("%d", &n);
        int arr[n];
        
        printf("Enter elements: ");
        for (int i = 0; i < n; i++) {
            scanf("%d", &arr[i]);
        }
    
        do {
            printf("Menu:\\n");
            printf("1. Print array\\n");
            printf("2. Find max\\n");
            printf("3. Find min\\n");
            printf("4. Exit\\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);
            
            switch (choice) {
                case 1:
                    printf("Array: ");
                    for (int i = 0; i < n; i++) {
                        printf("%d ", arr[i]);
                    }
                    printf("\\n");
                    break;
                case 2:
                    {
                        int max = arr[0];
                        for (int i = 1; i < n; i++) {
                            if (arr[i] > max) {
                                max = arr[i];
                            }
                        }
                        printf("Max: %d\\n", max);
                    }
                    break;
                case 3:
                    {
                        int min = arr[0];
                        for (int i = 1; i < n; i++) {
                            if (arr[i] < min) {
                                min = arr[i];
                            }
                        }
                        printf("Min: %d\\n", min);
                    }
                    break;
                case 4:
                    printf("Exiting...\\n");
                    break;
                default:
                    printf("Invalid choice.\\n");
            }
        } while (choice != 4);
        
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Enter number of elements: 5
    Enter elements: 10 20 5 40 15
    Menu:
    1. Print array
    2. Find max
    3. Find min
    4. Exit
    Enter your choice: 1
    Array: 10 20 5 40 15 
    Menu:
    1. Print array
    2. Find max
    3. Find min
    4. Exit
    Enter your choice: 2
    Max: 40
    Menu:
    1. Print array
    2. Find max
    3. Find min
    4. Exit
    Enter your choice: 3
    Min: 5
    Menu:
    1. Print array
    2. Find max
    3. Find min
    4. Exit
    Enter your choice: 4
    Exiting...
            </pre>
        </div>
        `
    }
    ,
    {
        "question": "10. WAP that prints a table indicating the number of occurrences of each alphabet in the text entered as command line arguments.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    #include &lt;stdlib.h&gt;
    #include &lt;string.h&gt;
    
    int main(int argc, char *argv[]) {
        int count[26] = {0}; // Array to store occurrences of each alphabet
        char ch;
    
        // Iterate through each command line argument
        for (int i = 1; i &lt; argc; i++) {
            for (int j = 0; j &lt; strlen(argv[i]); j++) {
                ch = argv[i][j];
                // Check if character is an alphabet
                if (ch &gt;= 'a' &amp;&amp; ch &lt;= 'z') {
                    count[ch - 'a']++;
                } else if (ch &gt;= 'A' &amp;&amp; ch &lt;= 'Z') {
                    count[ch - 'A']++;
                }
            }
        }
    
        // Print the occurrences of present characters
        printf("Character Occurrences:\\n");
        printf("----------------------\\n");
        for (int i = 0; i &lt; 26; i++) {
            if (count[i] &gt; 0) {
                printf("%c: %d\\n", 'A' + i, count[i]);
            }
        }
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    $ ./count_occurrences Hello World
    Character Occurrences:
    ----------------------
    H: 1
    D: 1
    E: 1
    L: 3
    O: 2
    R: 1
    W: 1
            </pre>
        </div>
        `
    }
    ,
    {
      question: "11. Write a program that swaps two numbers using pointers.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main(void) {
    int a = 5, b = 10;
    printf("Before swapping: a = %d, b = %d\\n", a, b);
    swap(&a, &b);
    printf("After swapping: a = %d, b = %d\\n", a, b);
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>Before swapping: a = 5, b = 10<br>After swapping: a = 10, b = 5</pre>
            </div>
            `,
    },
    {
      question:
        "12. Write a program in which a function is passed the address of two variables and then alters their contents.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

void modify(int *x, int *y) {
    *x += 10;
    *y += 20;
}

int main(void) {
    int a = 5, b = 10;
    printf("Before modification: a = %d, b = %d\\n", a, b);
    modify(&a, &b);
    printf("After modification: a = %d, b = %d\\n", a, b);
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>Before modification: a = 5, b = 10<br>After modification: a = 15, b = 30</pre>
            </div>
            `,
    },
    {
      question:
        "13. Write a program which takes the radius of a circle as input from the user, passes it to another function that computes the area and circumference.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;
#define PI 3.14

void compute(float radius, float *area, float *circumference) {
    *area = PI * radius * radius;
    *circumference = 2 * PI * radius;
}

int main(void) {
    float radius, area, circumference;
    printf("Enter the radius of the circle: ");
    scanf("%f", &radius);
    compute(radius, &area, &circumference);
    printf("Area: %f, Circumference: %f\\n", area, circumference);
    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>Enter the radius of the circle: 5<br>Area: 78.500000, Circumference: 31.400000</pre>
            </div>
            `,
    },
    {
        "question": "14. Write a program to find sum of n elements entered by the user. To write this program, allocate memory dynamically using malloc() / calloc() functions.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    #include &lt;stdlib.h&gt;
    
    int main() {
        int n, *arr, sum = 0;
    
        printf("Enter the number of elements: ");
        scanf("%d", &n);
    
        // Allocate memory dynamically using malloc
        arr = (int *)malloc(n * sizeof(int));
    
        if (arr == NULL) {
            printf("Memory allocation failed!\\n");
            return 1;
        }
    
        // Input elements
        printf("Enter %d elements:\\n", n);
        for (int i = 0; i &lt; n; i++) {
            printf("Element %d: ", i + 1);
            scanf("%d", &arr[i]);
            sum += arr[i]; // Calculate sum
        }
    
        // Output the sum
        printf("Sum of the elements: %d\\n", sum);
    
        // Free allocated memory
        free(arr);
        
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Enter the number of elements: 5
    Enter 5 elements:
    Element 1: 10
    Element 2: 20
    Element 3: 30
    Element 4: 40
    Element 5: 50
    Sum of the elements: 150
            </pre>
        </div>
        `
    }
    ,
    {
        "question": "15. Write a menu-driven program to perform following operations on strings: <br><br> a) Show address of each character in string <br> b) Concatenate two strings without using strcat function. <br> c) Concatenate two strings using strcat function. <br> d) Compare two strings <br> e) Calculate length of the string (use pointers) <br> f) Convert all lowercase characters to uppercase <br> g) Convert all uppercase characters to lowercase <br> h) Calculate number of vowels <br> i) Reverse the string.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    #include &lt;string.h&gt;
    #include &lt;ctype.h&gt;
    
    void showAddresses(char *str) {
        printf("Addresses of each character:\\n");
        for (int i = 0; str[i] != '\\0'; i++) {
            printf("Character '%c' is at address %p\\n", str[i], (void*)&str[i]);
        }
    }
    
    void concatenateWithoutStrcat(char *dest, char *src) {
        while (*dest) dest++;
        while ((*dest++ = *src++));
    }
    
    void concatenateWithStrcat(char *dest, char *src) {
        strcat(dest, src);
    }
    
    int compareStrings(char *str1, char *str2) {
        return strcmp(str1, str2);
    }
    
    int stringLength(char *str) {
        int length = 0;
        while (*str++) length++;
        return length;
    }
    
    void toUppercase(char *str) {
        while (*str) {
            *str = toupper(*str);
            str++;
        }
    }
    
    void toLowercase(char *str) {
        while (*str) {
            *str = tolower(*str);
            str++;
        }
    }
    
    int countVowels(char *str) {
        int count = 0;
        while (*str) {
            if (strchr("AEIOUaeiou", *str)) count++;
            str++;
        }
        return count;
    }
    
    void reverseString(char *str) {
        int len = stringLength(str);
        for (int i = 0; i &lt; len / 2; i++) {
            char temp = str[i];
            str[i] = str[len - 1 - i];
            str[len - 1 - i] = temp;
        }
    }
    
    int main() {
        int choice;
        char str1[100], str2[100], result[200];
    
        do {
            printf("\\nMenu:\\n");
            printf("1. Show address of each character in string\\n");
            printf("2. Concatenate two strings without using strcat\\n");
            printf("3. Concatenate two strings using strcat\\n");
            printf("4. Compare two strings\\n");
            printf("5. Calculate length of the string\\n");
            printf("6. Convert all lowercase characters to uppercase\\n");
            printf("7. Convert all uppercase characters to lowercase\\n");
            printf("8. Calculate number of vowels\\n");
            printf("9. Reverse the string\\n");
            printf("10. Exit\\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);
            getchar(); // Consume newline
    
            switch (choice) {
                case 1:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    showAddresses(str1);
                    break;
                case 2:
                    printf("Enter first string: ");
                    fgets(str1, sizeof(str1), stdin);
                    printf("Enter second string: ");
                    fgets(str2, sizeof(str2), stdin);
                    strcpy(result, str1);
                    concatenateWithoutStrcat(result, str2);
                    printf("Concatenated string: %s\\n", result);
                    break;
                case 3:
                    printf("Enter first string: ");
                    fgets(str1, sizeof(str1), stdin);
                    printf("Enter second string: ");
                    fgets(str2, sizeof(str2), stdin);
                    strcpy(result, str1);
                    concatenateWithStrcat(result, str2);
                    printf("Concatenated string: %s\\n", result);
                    break;
                case 4:
                    printf("Enter first string: ");
                    fgets(str1, sizeof(str1), stdin);
                    printf("Enter second string: ");
                    fgets(str2, sizeof(str2), stdin);
                    int cmp = compareStrings(str1, str2);
                    if (cmp == 0) printf("Strings are equal.\\n");
                    else printf("Strings are not equal.\\n");
                    break;
                case 5:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    printf("Length of the string: %d\\n", stringLength(str1));
                    break;
                case 6:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    toUppercase(str1);
                    printf("Uppercase string: %s\\n", str1);
                    break;
                case 7:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    toLowercase(str1);
                    printf("Lowercase string: %s\\n", str1);
                    break;
                case 8:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    printf("Number of vowels: %d\\n", countVowels(str1));
                    break;
                case 9:
                    printf("Enter a string: ");
                    fgets(str1, sizeof(str1), stdin);
                    reverseString(str1);
                    printf("Reversed string: %s\\n", str1);
                    break;
                case 10:
                    printf("Exiting...\n");
                    break;
                default:
                    printf("Invalid choice. Please try again.\\n");
            }
        } while (choice != 10);
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Menu:
    1. Show address of each character in string
    2. Concatenate two strings without using strcat
    3. Concatenate two strings using strcat
    4. Compare two strings
    5. Calculate length of the string
    6. Convert all lowercase characters to uppercase
    7. Convert all uppercase characters to lowercase
    8. Calculate number of vowels
    9. Reverse the string
    10. Exit
    Enter your choice: 1
    Enter a string: Hello
    Addresses of each character:
    Character 'H' is at address 0x7ffd8c1c9cd0
    Character 'e' is at address 0x7ffd8c1c9cd1
    Character 'l' is at address 0x7ffd8c1c9cd2
    Character 'l' is at address 0x7ffd8c1c9cd3
    Character 'o' is at address 0x7ffd8c1c9cd4
    Character ' ' is at address 0x7ffd8c1c9cd5
    Character '\\n' is at address 0x7ffd8c1c9cd6
            </pre>
        </div>
        `
    }
    ,
    {
        "question": "16. Given two ordered arrays of integers, write a program to merge the two arrays to get an ordered array.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    
    void mergeArrays(int arr1[], int size1, int arr2[], int size2, int merged[]) {
        int i = 0, j = 0, k = 0;
    
        // Merging two arrays
        while (i < size1 && j < size2) {
            if (arr1[i] < arr2[j]) {
                merged[k++] = arr1[i++];
            } else {
                merged[k++] = arr2[j++];
            }
        }
    
        // Copy remaining elements of arr1, if any
        while (i < size1) {
            merged[k++] = arr1[i++];
        }
    
        // Copy remaining elements of arr2, if any
        while (j < size2) {
            merged[k++] = arr2[j++];
        }
    }
    
    int main() {
        int arr1[100], arr2[100], merged[200];
        int size1, size2;
    
        // Input first ordered array
        printf("Enter the number of elements in the first array: ");
        scanf("%d", &size1);
        printf("Enter the elements of the first array in sorted order:\\n");
        for (int i = 0; i < size1; i++) {
            scanf("%d", &arr1[i]);
        }
    
        // Input second ordered array
        printf("Enter the number of elements in the second array: ");
        scanf("%d", &size2);
        printf("Enter the elements of the second array in sorted order:\\n");
        for (int i = 0; i < size2; i++) {
            scanf("%d", &arr2[i]);
        }
    
        // Merging arrays
        mergeArrays(arr1, size1, arr2, size2, merged);
    
        // Displaying the merged array
        printf("Merged ordered array:\\n");
        for (int i = 0; i < size1 + size2; i++) {
            printf("%d ", merged[i]);
        }
        printf("\\n");
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Enter the number of elements in the first array: 3
    Enter the elements of the first array in sorted order:
    1 3 5
    Enter the number of elements in the second array: 4
    Enter the elements of the second array in sorted order:
    2 4 6 8
    Merged ordered array:
    1 2 3 4 5 6 8 
            </pre>
        </div>
        `
    }
    ,
    {
        "question": "17. WAP to display Fibonacci series (i) using recursion, (ii) using iteration.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    
    // Function to display Fibonacci series using recursion
    void fibonacciRecursion(int n, int a, int b) {
        if (n > 0) {
            printf("%d ", a);
            fibonacciRecursion(n - 1, b, a + b);
        }
    }
    
    // Function to display Fibonacci series using iteration
    void fibonacciIteration(int n) {
        int a = 0, b = 1, next;
        for (int i = 0; i < n; i++) {
            printf("%d ", a);
            next = a + b;
            a = b;
            b = next;
        }
    }
    
    int main() {
        int n;
    
        printf("Enter the number of terms: ");
        scanf("%d", &n);
    
        printf("Fibonacci series using recursion: ");
        fibonacciRecursion(n, 0, 1);
        printf("\\n");
    
        printf("Fibonacci series using iteration: ");
        fibonacciIteration(n);
        printf("\\n");
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Enter the number of terms: 5
    Fibonacci series using recursion: 0 1 1 2 3 
    Fibonacci series using iteration: 0 1 1 2 3 
            </pre>
        </div>
        `
    },
    {
        "question": "18. WAP to calculate Factorial of a number (i) using recursion, (ii) using iteration.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    
    // Function to calculate factorial using recursion
    long long factorialRecursion(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorialRecursion(n - 1);
    }
    
    // Function to calculate factorial using iteration
    long long factorialIteration(int n) {
        long long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    int main() {
        int num;
    
        printf("Enter a number: ");
        scanf("%d", &num);
    
        // Calculate factorial using recursion
        long long factRec = factorialRecursion(num);
        printf("Factorial using recursion: %lld\\n", factRec);
    
        // Calculate factorial using iteration
        long long factIter = factorialIteration(num);
        printf("Factorial using iteration: %lld\\n", factIter);
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Enter a number: 5
    Factorial using recursion: 120
    Factorial using iteration: 120
            </pre>
        </div>
        `
    },
    
    {
      question: "19. WAP to calculate GCD of two numbers (i) with recursion (ii) without recursion.",
      solution: `
            <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                <pre><code class="language-c">
#include &lt;stdio.h&gt;

// Function to calculate GCD without recursion
int gcdWithoutRecursion(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate GCD with recursion
int gcdWithRecursion(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcdWithRecursion(b, a % b);
}

int main() {
    int num1, num2;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    // Calculate GCD without recursion
    int gcd1 = gcdWithoutRecursion(num1, num2);
    printf("GCD without recursion: %d\\n", gcd1);

    // Calculate GCD with recursion
    int gcd2 = gcdWithRecursion(num1, num2);
    printf("GCD with recursion: %d\\n", gcd2);

    return 0;
}
                </code></pre>
            </div>
            <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
                <h3 class="text-lg font-semibold">Expected Output:</h3>
                <pre>
Enter two numbers: 48 18
GCD without recursion: 6
GCD with recursion: 6
        </pre>
            </div>
            `,
    },

    {
      question: "20. Create a Matrix class using templates.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX_SIZE 100 // Maximum size for the matrix

typedef struct {
    int rows;
    int cols;
    int data[MAX_SIZE][MAX_SIZE];
} Matrix;

// Function to create a matrix
void createMatrix(Matrix *m) {
    printf("Enter the number of rows: ");
    scanf("%d", &m->rows);
    printf("Enter the number of columns: ");
    scanf("%d", &m->cols);
}

// Function to set values in the matrix
void setMatrixValues(Matrix *m) {
    printf("Enter the elements of the matrix:\\n");
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &m->data[i][j]);
        }
    }
}

// Function to display the matrix
void displayMatrix(const Matrix *m) {
    printf("Matrix:\\n");
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            printf("%d ", m->data[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    Matrix mat;
    
    // Create and set values for the matrix
    createMatrix(&mat);
    setMatrixValues(&mat);
    
    // Display the matrix
    displayMatrix(&mat);

    return 0;
}

        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>Enter the number of rows: 3<br>Enter the number of columns: 3<br>Element [0][0]: 1<br>Element [0][1]: 2<br>Element [0][2]: 3<br>Element [1][0]: 4<br>Element [1][1]: 5<br>Element [1][2]: 6<br>Element [2][0]: 7<br>Element [2][1]: 8<br>Element [2][2]: 9<br>Matrix:<br>1 2 3 <br>4 5 6 <br>7 8 9</pre>
    </div>
    `,
    },
    {
      question:
        "21. Write a menu-driven program to perform following Matrix <br><br> i) Print the even-valued elements <br> ii) Print the odd-valued elements <br> iii) Calculate and print the sum and average of the elements of array <br> iv) Print the maximum and minimum element of array <br> v) Remove the duplicates from the array <br> vi) Print the array in reverse order <br><br>The program should present a menu to the user and ask for one of the options. The menu should also include options to re-enter array and to quit the program.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX_SIZE 100 // Maximum size for the matrix

typedef struct {
    int rows;
    int cols;
    int data[MAX_SIZE][MAX_SIZE];
} Matrix;

// Function to create a matrix
void createMatrix(Matrix *m) {
    printf("Enter the number of rows: ");
    scanf("%d", &m->rows);
    printf("Enter the number of columns: ");
    scanf("%d", &m->cols);
}

// Function to set values in the matrix
void setMatrixValues(Matrix *m) {
    printf("Enter the elements of the matrix:\\n");
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &m->data[i][j]);
        }
    }
}

// Function to print even-valued elements
void printEven(const Matrix *m) {
    printf("Even-valued elements:\\n");
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            if (m->data[i][j] % 2 == 0) {
                printf("%d ", m->data[i][j]);
            }
        }
    }
    printf("\\n");
}

// Function to print odd-valued elements
void printOdd(const Matrix *m) {
    printf("Odd-valued elements:\\n");
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            if (m->data[i][j] % 2 != 0) {
                printf("%d ", m->data[i][j]);
            }
        }
    }
    printf("\\n");
}

// Function to calculate sum and average
void calculateSumAndAverage(const Matrix *m) {
    int sum = 0;
    int count = m->rows * m->cols;
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            sum += m->data[i][j];
        }
    }
    printf("Sum: %d, Average: %.2f\\n", sum, (float)sum / count);
}

// Function to find max and min
void findMaxAndMin(const Matrix *m) {
    int max = m->data[0][0], min = m->data[0][0];
    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            if (m->data[i][j] &gt; max) max = m->data[i][j];
            if (m->data[i][j] &lt; min) min = m->data[i][j];
        }
    }
    printf("Max: %d, Min: %d\\n", max, min);
}

// Function to remove duplicates
void removeDuplicates(const Matrix *m) {
    int temp[MAX_SIZE * MAX_SIZE];
    int k = 0;

    for (int i = 0; i &lt; m->rows; i++) {
        for (int j = 0; j &lt; m->cols; j++) {
            int isDuplicate = 0;
            for (int l = 0; l &lt; k; l++) {
                if (temp[l] == m->data[i][j]) {
                    isDuplicate = 1;
                    break;
                }
            }
            if (!isDuplicate) {
                temp[k++] = m->data[i][j];
            }
        }
    }

    printf("Elements after removing duplicates:\\n");
    for (int i = 0; i &lt; k; i++) {
        printf("%d ", temp[i]);
    }
    printf("\\n");
}

// Function to print in reverse order
void printReverse(const Matrix *m) {
    printf("Elements in reverse order:\\n");
    for (int i = m->rows - 1; i &gt;= 0; i--) {
        for (int j = m->cols - 1; j &gt;= 0; j--) {
            printf("%d ", m->data[i][j]);
        }
    }
    printf("\\n");
}

int main() {
    Matrix mat;
    createMatrix(&mat);
    setMatrixValues(&mat);
    
    int choice;
    do {
        printf("\\nMenu:\\n");
        printf("1. Print even-valued elements\\n");
        printf("2. Print odd-valued elements\\n");
        printf("3. Calculate sum and average\\n");
        printf("4. Find max and min\\n");
        printf("5. Remove duplicates\\n");
        printf("6. Print array in reverse order\\n");
        printf("7. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                printEven(&mat);
                break;
            case 2:
                printOdd(&mat);
                break;
            case 3:
                calculateSumAndAverage(&mat);
                break;
            case 4:
                findMaxAndMin(&mat);
                break;
            case 5:
                removeDuplicates(&mat);
                break;
            case 6:
                printReverse(&mat);
                break;
            case 7:
                printf("Exiting...\\n");
                break;
            default:
                printf("Invalid choice! Please try again.\\n");
        }
    } while (choice != 7);

    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>
Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 1
Even-valued elements:
2 4 6 

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 2
Odd-valued elements:
1 3 5 

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 3
Sum: 21, Average: 3.50

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 4
Max: 6, Min: 1

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 5
Elements after removing duplicates:
1 2 3 4 5 6 

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 6
Elements in reverse order:
6 5 4 3 2 1 

Menu:
1. Print even-valued elements
2. Print odd-valued elements
3. Calculate sum and average
4. Find max and min
5. Remove duplicates
6. Print array in reverse order
7. Exit
Enter your choice: 7
Exiting...
    </pre>
    </div>
    `,
    },
    {
        "question": "22. Write a menu-driven program to perform following operations on a matrix: <br><br> i) Print the even-valued elements <br> ii) Print the odd-valued elements <br> iii) Calculate and print the sum and average of the elements <br> iv) Print the maximum and minimum element <br> v) Remove the duplicates from the array <br> vi) Print the array in reverse order.",
        "solution": `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
    #include &lt;stdio.h&gt;
    
    void printEven(int arr[], int size) {
        printf("Even-valued elements: ");
        for (int i = 0; i &lt; size; i++) {
            if (arr[i] % 2 == 0) {
                printf("%d ", arr[i]);
            }
        }
        printf("\\n");
    }
    
    void printOdd(int arr[], int size) {
        printf("Odd-valued elements: ");
        for (int i = 0; i &lt; size; i++) {
            if (arr[i] % 2 != 0) {
                printf("%d ", arr[i]);
            }
        }
        printf("\\n");
    }
    
    void calculateSumAndAverage(int arr[], int size) {
        int sum = 0;
        for (int i = 0; i &lt; size; i++) {
            sum += arr[i];
        }
        float average = (float)sum / size;
        printf("Sum: %d, Average: %.2f\\n", sum, average);
    }
    
    void findMaxAndMin(int arr[], int size) {
        int max = arr[0], min = arr[0];
        for (int i = 1; i &lt; size; i++) {
            if (arr[i] &gt; max) max = arr[i];
            if (arr[i] &lt; min) min = arr[i];
        }
        printf("Maximum: %d, Minimum: %d\\n", max, min);
    }
    
    void removeDuplicates(int arr[], int *size) {
        int temp[*size];
        int index = 0;
    
        for (int i = 0; i &lt; *size; i++) {
            int j;
            for (j = 0; j &lt; index; j++) {
                if (arr[i] == temp[j]) break;
            }
            if (j == index) {
                temp[index++] = arr[i];
            }
        }
        for (int i = 0; i &lt; index; i++) {
            arr[i] = temp[i];
        }
        *size = index;
    }
    
    void printReverse(int arr[], int size) {
        printf("Array in reverse order: ");
        for (int i = size - 1; i &gt;= 0; i--) {
            printf("%d ", arr[i]);
        }
        printf("\\n");
    }
    
    int main() {
        int arr[100], size, choice;
    
        printf("Enter number of elements in the array: ");
        scanf("%d", &size);
        for (int i = 0; i &lt; size; i++) {
            printf("Enter element %d: ", i + 1);
            scanf("%d", &arr[i]);
        }
    
        do {
            printf("\\nMenu:\\n");
            printf("1. Print even-valued elements\\n");
            printf("2. Print odd-valued elements\\n");
            printf("3. Calculate sum and average\\n");
            printf("4. Print maximum and minimum\\n");
            printf("5. Remove duplicates\\n");
            printf("6. Print array in reverse order\\n");
            printf("7. Re-enter array\\n");
            printf("8. Exit\\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);
    
            switch (choice) {
                case 1:
                    printEven(arr, size);
                    break;
                case 2:
                    printOdd(arr, size);
                    break;
                case 3:
                    calculateSumAndAverage(arr, size);
                    break;
                case 4:
                    findMaxAndMin(arr, size);
                    break;
                case 5:
                    removeDuplicates(arr, &size);
                    printf("Duplicates removed. New size: %d\\n", size);
                    break;
                case 6:
                    printReverse(arr, size);
                    break;
                case 7:
                    printf("Enter number of elements in the new array: ");
                    scanf("%d", &size);
                    for (int i = 0; i &lt; size; i++) {
                        printf("Enter element %d: ", i + 1);
                        scanf("%d", &arr[i]);
                    }
                    break;
                case 8:
                    printf("Exiting...\n");
                    break;
                default:
                    printf("Invalid choice. Please try again.\\n");
            }
        } while (choice != 8);
    
        return 0;
    }
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
    Menu:
    1. Print even-valued elements
    2. Print odd-valued elements
    3. Calculate sum and average
    4. Print maximum and minimum
    5. Remove duplicates
    6. Print array in reverse order
    7. Re-enter array
    8. Exit
    Enter your choice: 1
    Even-valued elements: 2 4 6 8 
            </pre>
        </div>
        `
    }
,    
    {
      question:
        "23. Write a program to calculate the sum, difference, product, and transpose of two matrices.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX_SIZE 100

typedef struct {
    int rows;
    int cols;
    int data[MAX_SIZE][MAX_SIZE];
} Matrix;

// Function to input matrix values
void inputMatrix(Matrix *m) {
    printf("Enter number of rows: ");
    scanf("%d", &m->rows);
    printf("Enter number of columns: ");
    scanf("%d", &m->cols);
    printf("Enter matrix elements:\\n");
    for (int i = 0; i < m->rows; i++) {
        for (int j = 0; j < m->cols; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &m->data[i][j]);
        }
    }
}

// Function to display a matrix
void displayMatrix(const Matrix *m) {
    for (int i = 0; i < m->rows; i++) {
        for (int j = 0; j < m->cols; j++) {
            printf("%d ", m->data[i][j]);
        }
        printf("\\n");
    }
}

// Function to add two matrices
void addMatrices(const Matrix *a, const Matrix *b, Matrix *result) {
    for (int i = 0; i < a->rows; i++) {
        for (int j = 0; j < a->cols; j++) {
            result->data[i][j] = a->data[i][j] + b->data[i][j];
        }
    }
}

// Function to subtract two matrices
void subtractMatrices(const Matrix *a, const Matrix *b, Matrix *result) {
    for (int i = 0; i < a->rows; i++) {
        for (int j = 0; j < a->cols; j++) {
            result->data[i][j] = a->data[i][j] - b->data[i][j];
        }
    }
}

// Function to multiply two matrices
void multiplyMatrices(const Matrix *a, const Matrix *b, Matrix *result) {
    for (int i = 0; i < a->rows; i++) {
        for (int j = 0; j < b->cols; j++) {
            result->data[i][j] = 0;
            for (int k = 0; k < a->cols; k++) {
                result->data[i][j] += a->data[i][k] * b->data[k][j];
            }
        }
    }
}

// Function to transpose a matrix
void transposeMatrix(const Matrix *m, Matrix *result) {
    for (int i = 0; i < m->rows; i++) {
        for (int j = 0; j < m->cols; j++) {
            result->data[j][i] = m->data[i][j];
        }
    }
}

int main() {
    Matrix a, b, sum, diff, product, transpose;

    // Input matrices
    printf("Matrix A:\\n");
    inputMatrix(&a);
    printf("Matrix B:\\n");
    inputMatrix(&b);
    
    // Perform operations
    addMatrices(&a, &b, &sum);
    subtractMatrices(&a, &b, &diff);
    multiplyMatrices(&a, &b, &product);
    transposeMatrix(&a, &transpose);

    // Display results
    printf("\\nMatrix A:\\n");
    displayMatrix(&a);
    printf("\\nMatrix B:\\n");
    displayMatrix(&b);
    
    printf("\\nSum:\\n");
    displayMatrix(&sum);
    
    printf("\\nDifference:\\n");
    displayMatrix(&diff);
    
    printf("\\nProduct:\\n");
    displayMatrix(&product);
    
    printf("\\nTranspose of Matrix A:\\n");
    displayMatrix(&transpose);

    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>
Matrix A:
Enter number of rows: 2
Enter number of columns: 2
Enter matrix elements:
Element [0][0]: 1
Element [0][1]: 2
Element [1][0]: 3
Element [1][1]: 4

Matrix B:
Enter number of rows: 2
Enter number of columns: 2
Enter matrix elements:
Element [0][0]: 5
Element [0][1]: 6
Element [1][0]: 7
Element [1][1]: 8

Matrix A:
1 2 
3 4 
Matrix B:
5 6 
7 8 
Sum:
6 8 
10 12 
Difference:
-4 -4 
-4 -4 
Product:
19 22 
43 50 
Transpose of Matrix A:
1 3 
2 4 
        </pre>
    </div>
    `,
    },
    {
      question:
        "24. Write a program to calculate the area of a rectangle, square, circle, and triangle.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;

float calculateRectangleArea(float length, float width) {
    return length * width;
}

float calculateCircleArea(float radius) {
    return 3.14 * radius * radius;
}

float calculateTriangleArea(float base, float height) {
    return 0.5 * base * height;
}

int main() {
    int choice;
    printf("Choose a shape to calculate area:\\n");
    printf("1. Rectangle\\n2. Circle\\n3. Triangle\\n");
    scanf("%d", &choice);

    switch (choice) {
        case 1: {
            float length, width;
            printf("Enter length and width: ");
            scanf("%f %f", &length, &width);
            printf("Area of Rectangle: %.2f\\n", calculateRectangleArea(length, width));
            break;
        }
        case 2: {
            float radius;
            printf("Enter radius: ");
            scanf("%f", &radius);
            printf("Area of Circle: %.2f\\n", calculateCircleArea(radius));
            break;
        }
        case 3: {
            float base, height;
            printf("Enter base and height: ");
            scanf("%f %f", &base, &height);
            printf("Area of Triangle: %.2f\\n", calculateTriangleArea(base, height));
            break;
        }
        default:
            printf("Invalid choice!\\n");
    }

    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>Choose a shape to calculate area:<br>1. Rectangle<br>2. Circle<br>3. Triangle<br>1<br>Enter length and width: 5 10<br>Area of Rectangle: 50.00</pre>
    </div>
    `,
    },
    {
      question:
        "25. Write a program to display the first n terms of the Fibonacci series.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;

void fibonacci(int n) {
    int a = 0, b = 1, next;
    printf("Fibonacci Series: ");
    for (int i = 1; i &lt;= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    fibonacci(n);
    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>Enter the number of terms: 5<br>Fibonacci Series: 0 1 1 2 3</pre>
    </div>
    `,
    },
    {
      question: "26. Write a program to find the factorial of a given number.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;

unsigned long long factorial(int n) {
    if (n &lt;= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Factorial of %d = %llu\\n", n, factorial(n));
    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>Enter a number: 5<br>Factorial of 5 = 120</pre>
    </div>
    `,
    },
    {
      question:
        "27. Write a program to calculate the sum and product of two compatible matrices.",
      solution: `
    <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre><code class="language-c">
#include &lt;stdio.h&gt;

void addMatrices(int a[10][10], int b[10][10], int res[10][10], int r, int c) {
    for (int i = 0; i &lt; r; i++) {
        for (int j = 0; j &lt; c; j++) {
            res[i][j] = a[i][j] + b[i][j];
        }
    }
}

void multiplyMatrices(int a[10][10], int b[10][10], int res[10][10], int r1, int c1, int c2) {
    for (int i = 0; i &lt; r1; i++) {
        for (int j = 0; j &lt; c2; j++) {
            res[i][j] = 0;
            for (int k = 0; k &lt; c1; k++) {
                res[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

void printMatrix(int mat[10][10], int r, int c) {
    for (int i = 0; i &lt; r; i++) {
        for (int j = 0; j &lt; c; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int a[10][10], b[10][10], sum[10][10], product[10][10], r1, c1, r2, c2;

    printf("Enter dimensions of first matrix (rows cols): ");
    scanf("%d %d", &r1, &c1);
    printf("Enter elements of first matrix:\\n");
    for (int i = 0; i &lt; r1; i++) {
        for (int j = 0; j &lt; c1; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter dimensions of second matrix (rows cols): ");
    scanf("%d %d", &r2, &c2);
    printf("Enter elements of second matrix:\\n");
    for (int i = 0; i &lt; r2; i++) {
        for (int j = 0; j &lt; c2; j++) {
            scanf("%d", &b[i][j]);
        }
    }

    addMatrices(a, b, sum, r1, c1);
    printf("Sum of matrices:\\n");
    printMatrix(sum, r1, c1);

    if (c1 == r2) {
        multiplyMatrices(a, b, product, r1, c1, c2);
        printf("Product of matrices:\\n");
        printMatrix(product, r1, c2);
    } else {
        printf("Matrices cannot be multiplied due to incompatible dimensions.\\n");
    }

    return 0;
}
        </code></pre>
    </div>
    <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
        <h3 class="text-lg font-semibold">Expected Output:</h3>
        <pre>Enter dimensions of first matrix (rows cols): 2 2<br>Enter elements of first matrix:<br>1 2<br>3 4<br>Enter dimensions of second matrix (rows cols): 2 2<br>Enter elements of second matrix:<br>5 6<br>7 8<br>Sum of matrices:<br>6 8<br>10 12<br>Product of matrices:<br>19 22<br>43 50</pre>
    </div>
    `,
    },

    // Add additional questions and solutions here
  ],
};

function renderQuestions() {
  const container = document.getElementById("questions-container");
  if (!container) {
    console.error('Element with ID "questions-container" not found.');
    return;
  }

  questionData.questions.forEach((q) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("mb-6");
    questionElement.innerHTML = `
                    <h2 class="text-lg font-semibold mb-2">${q.question}</h2>
                    ${q.solution}
                `;
    container.appendChild(questionElement);
    Prism.highlightAll(); // Ensure syntax highlighting is applied
  });
}

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      button.innerText = "Copied!"; // Change button text
      setTimeout(() => {
        button.innerText = "Copy Code"; // Reset after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
    });
}

document.addEventListener("DOMContentLoaded", renderQuestions);
