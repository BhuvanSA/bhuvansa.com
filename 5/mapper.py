import sys
import csv
for line in csv.reader(iter(sys.stdin.readline, '')):
    year = line[0]
    sales = line[2]
    print(f"{year}\t{sales}")
