#include <stdio.h>
#include <stdlib.h>

typedef struct LL {
  int exp;
  int coef;
  struct LL *next;
} node;

node *insert(node *root, int coef, int exp) {
  node *temp;
  node *new = malloc(sizeof(node));
  new->exp = exp;
  new->coef = coef;
  new->next = NULL;

  // If it is the first element or having power greater than
  // already existing elements
  if (root == NULL || exp > root->exp) {
    new->next = root;
    root = new;
  } else {
    temp = root;

    // Traverse till suitable is exp is found
    // and haven't reached end of the list
    while (temp->next != NULL && temp->next->exp > exp) {
      temp = temp->next;
    }

    // Once you reach end of the list
    new->next = temp->next;
    temp->next = new;
  }
  return root;
}

node *create(node *root) {
  int n, coef, exp;
  printf("Enter the number of variables in the expression\n");
  scanf("%d", &n);

  for (int i = 0; i < n; i++) {
    printf("Enter the %d co-efficient: \n", (i + 1));
    scanf("%d", &coef);
    printf("Enter the %d exponent: \n", (i + 1));
    scanf("%d", &exp);
    root = insert(root, coef, exp);
  }
  return root;
}

void print(node *head) {
  if (head == NULL) {
    printf("Empty !");
  } else {
    node *temp = head;
    while (temp != NULL) {
      printf("(%d ^ %d)", temp->coef, temp->exp);
      temp = temp->next;
      if (temp != NULL)
        printf(" + ");
      else
        printf(" \n ");
    }
  }
}

node *poly(node *head1, node *head2) {
  node *ptr1 = head1;
  node *ptr2 = head2;
  node *head3 = NULL;

  while (ptr1 != NULL && ptr2 != NULL) {
    if (ptr1->exp == ptr2->exp) {
      head3 = insert(head3, ptr1->coef + ptr2->coef, ptr1->exp);
      ptr1 = ptr1->next;
      ptr2 = ptr2->next;
    } else if (ptr1->exp > ptr2->exp) {
      head3 = insert(head3, ptr1->coef, ptr1->exp);
      ptr1 = ptr1->next;
    } else if (ptr2->exp > ptr1->exp) {
      head3 = insert(head3, ptr2->coef, ptr2->exp);
      ptr2 = ptr2->next;
    }
  }
  printf("Added polynomial is: \t");
  print(head3);
  return head3;
}
void freeer(node *head) {
  if (head == NULL) {
    return;
  }
  node *temp = head;
  free(head);
  freeer(temp);
}

int main() {
  node *head1 = NULL;
  node *head2 = NULL;
  node *head3 = NULL;
  printf("polynomial 1: \n");
  head1 = create(head1);
  printf("polynomial 2: \n");
  head2 = create(head2);
  head3 = poly(head1, head2);
  printf("\n");
  return 0;
}
