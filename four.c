#include <stdio.h>
#include <stdlib.h>

typedef struct tree {
  int item;
  struct tree *left;
  struct tree *right;
} node;

node *root = NULL;

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

// Inorder traversal
void inorder(node *root) {
  if (root != NULL) {
    inorder(root->left);
    printf("%d -> ", root->item);
    inorder(root->right);
  }
}

node *minValueNode(node *temp) {
  node *current = temp;
  while (current && current->left != NULL)
    current = current->left;

  return current;
}

node *deleteNode(node *root, int value) {
  if (root == NULL)
    return root;

  if (value < root->item) {
    root->left = deleteNode(root->left, value);
  } else if (value > root->item) {
    root->right = deleteNode(root->right, value);
  }

  else {
    if (root->left == NULL) {
      node *temp = root->right;
      free(root);
      return temp;
    } else if (root->right == NULL) {
      node *temp = root->left;
      free(root);
      return temp;
    }

    node *temp = minValueNode(root->right);
    root->item = temp->item;
    root->right = deleteNode(root->right, temp->item);
  }
  return root;
}

// Free all nodes
void freer(node *root) {
  if (root != NULL) {
    freer(root->left);
    freer(root->right);
    free(root);
  }
}

int main() {
  while (1) {
    int var;
    printf("\n Enter 1 to continue or -1 to exit : ");
    scanf("%d", &var);
    if (var == -1) {
      break;
    }
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
    printf("\n Inorder traversal of the tree: \n");
    inorder(root);
    printf("\n");
    int search_no;
    while (1) {
      printf("Enter the element to be deleted, Enter -1 to stop \n");
      scanf("%i", &search_no);
      if (search_no == -1)
        break;
      deleteNode(root, search_no);
      inorder(root);
      printf("\n");
    }
  }
  freer(root);
}
