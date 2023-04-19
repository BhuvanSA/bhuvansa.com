#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct tree {
  int item;
  struct tree *left;
  struct tree *right;
} node;

node *root = NULL;

// PreOrder traversal
void preorder(node *root) {
  if (root != NULL) {
    printf("%d -> ", root->item);
    preorder(root->left);
    preorder(root->right);
  }
}

// Inorder traversal
void inorder(node *root) {
  if (root != NULL) {
    inorder(root->left);
    printf("%d -> ", root->item);
    inorder(root->right);
  }
}

// PostOrder traversal
void postorder(node *root) {
  if (root != NULL) {
    postorder(root->left);
    postorder(root->right);
    printf("%d -> ", root->item);
  }
}

// Free all nodes
void freer(node *root) {
  if (root != NULL) {
    freer(root->left);
    freer(root->right);
    free(root);
  }
}

// Create a new node
node *createNode(int value) {
  node *newNode = malloc(sizeof(node));
  newNode->item = value;
  newNode->left = NULL;
  newNode->right = NULL;

  return newNode;
}

// Insert the node
node *insert(node *temp, int value) {
  if (temp == NULL) {
    return createNode(value);
  }

  if (value < temp->item) {
    temp->left = insert(temp->left, value);
  } else {
    temp->right = insert(temp->right, value);
  }
  return temp;
}

int main() {
  printf("Enter the elements of the tree, Enter -1 to stop \n");
  while (1) {
    int no;
    scanf("%i", &no);
    if (no == -1) {
      break;
    } else {
      // If it is the first node create it
      if (root == NULL) {
        root = createNode(no);
      } else {
        insert(root, no);
      }
    }
  }

  printf("\n Inorder  :  ");
  inorder(root);
  printf("\n Preorder :  ");
  preorder(root);
  printf("\n Postorder:  ");
  postorder(root);
  freer(root);
  printf("\n\nFreed all nodes Quitting....\n");
}
