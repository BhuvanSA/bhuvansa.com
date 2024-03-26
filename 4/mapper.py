#!/usr/bin/env python
import sys
for line in sys.stdin:
    # Remove leading and trailing whitespace
    line = line.strip()
    # Split the line into columns
    columns = line.split('\t')
    # Extract the salary column
    salary = columns[2]
    # Output the salary with a null key
    print("%s\t%s" % (None, salary))
