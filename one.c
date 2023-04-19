#include <stdio.h>

#define MAX_SIZE 20

int ar[MAX_SIZE][MAX_SIZE];
int rows, cols;
int size;

void input();
void printMatrix();
void tripletRepresentation();

int main() {
  input();
  printMatrix();
  tripletRepresentation();
}

void input() {
  printf("Enter number of rows in the matrix : ");
  scanf("%d", &rows);
  printf("Enter number of columns in the matrix: ");
  scanf("%d", &cols);
  printf("\n Enter the elements in the matrix: \n");
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      scanf("%d", &ar[i][j]);
    }
  }
}

void printMatrix() {
  printf("The matrix you entered is :\n");
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      printf("%3d ", ar[i][j]);
      if (ar[i][j] != 0)
        size++;
    }
    printf("\n");
  }
  printf("\n");
}

void tripletRepresentation() {
  printf("The elements can be represented in triplets as followed: \n");
  printf("%3d %3d %3d \n", rows, cols, size);
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      if (ar[i][j] != 0) {
        printf("%3d %3d %3d \n", i, j, ar[i][j]);
      }
    }
  }
}
