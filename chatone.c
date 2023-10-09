#include <string.h>
#include <stdlib.h>
#include <stdio.h>

#define MAX_NAME_LENGTH 20

void swap(char **a, char **b)
{
  char *temp = *a;
  *a = *b;
  *b = temp;
}

int partition(char **arr, int start, int end)
{
  char *pivot = strdup(arr[end]);

  int i = (start - 1);

  for (int j = start; j <= end - 1; j++)
  {
    if (strcmp(arr[j], pivot) < 0)
    {
      i++;
      swap(&arr[i], &arr[j]);
    }
  }
  swap(&arr[i + 1], &arr[end]);
  free(pivot);
  return (i + 1);
}

void quickSort(char **arr, int start, int end)
{
  if (start < end)
  {
    int pi = partition(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
}

int main(int argc, char *argv[])
{
  int totalstrings;
  char **array;

  if (argc == 2)
  {
    FILE *file = fopen(argv[1], "r");
    if (file == NULL)
    {
      fprintf(stderr, "ERROR: Unable to open file %s\n", argv[1]);
      return 1;
    }

    if (fscanf(file, "%d", &totalstrings) != 1)
    {
      fprintf(stderr, "Error: Failed to read the number of names from the file.\n");
      fclose(file);
      return 1;
    }

    array = malloc(totalstrings * sizeof(char *));

    for (int i = 0; i < totalstrings; ++i)
    {
      array[i] = malloc((MAX_NAME_LENGTH + 1) * sizeof(char)); // Dynamic size based on MAX_NAME_LENGTH
      if (fscanf(file, " %20[^\n]", array[i]) != 1)
      { // Use MAX_NAME_LENGTH constant
        fprintf(stderr, "Error: Failed to read a name from the file.\n");
        fclose(file);
        return 1;
      }
    }

    fclose(file);
  }
  else if (argc == 1)
  {
    printf("Enter the number of names: ");
    scanf("%d", &totalstrings);

    array = malloc(totalstrings * sizeof(char *));

    for (int i = 0; i < totalstrings; ++i)
    {
      array[i] = malloc((MAX_NAME_LENGTH + 1) * sizeof(char));                 // Dynamic size based on MAX_NAME_LENGTH
      printf("Enter name %d (up to %d characters): ", i + 1, MAX_NAME_LENGTH); // Use MAX_NAME_LENGTH constant
      scanf(" %20[^\n]", array[i]);                                            // Use MAX_NAME_LENGTH constant
    }
  }
  else
  {
    fprintf(stderr, "Usage: %s [filename]\n", argv[0]);
    return 1;
  }

  quickSort(array, 0, totalstrings - 1);

  for (int i = 0; i < totalstrings; ++i)
  {
    printf("%s\n", array[i]);
    free(array[i]);
  }

  free(array);

  return 0;
}
