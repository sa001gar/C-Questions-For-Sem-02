CC = gcc
CFLAGS = -Wall -Wextra -pedantic -std=c99

run: $(file)
	@$(CC) $(CFLAGS) $(file).c -o $(file)  # Compile without showing the command
	@./$(file)                             # Run the file and display only its output

clean:
	rm -f $(file)
