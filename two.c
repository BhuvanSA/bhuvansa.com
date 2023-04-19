#include <stdio.h>

enum State {
  NEW,
  READY,
  RUNNING,
  WAITING,
  TERMINATED,
};

typedef struct {
  int pid;
  enum State state;
} Process;

void ttr(Process *process) {
  printf("Process %d transitioned from NEW to READY \n", process->pid);
  process->state = READY;
}

void ttrn(Process *process) {
  printf("Process %d transitioned from READY to RUNNING \n", process->pid);
  process->state = RUNNING;
}

void ttw(Process *process) {
  printf("Process %d transitioned from RUNNING to WAITING \n", process->pid);
  process->state = WAITING;
}

void ttt(Process *process) {
  printf("Process %d transitioned from WAITING to TERMINATED \n", process->pid);
  process->state = TERMINATED;
}

int main() {
  Process p1 = {1, NEW};
  Process p2 = {2, NEW};
  Process p3 = {3, NEW};

  ttr(&p1);
  ttr(&p2);
  ttr(&p3);

  ttrn(&p1);
  ttw(&p1);
  ttrn(&p2);
  ttt(&p2);
  ttrn(&p3);

  return 0;
}
