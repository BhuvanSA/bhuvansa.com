#!/usr/bin/env python
import sys
# Input format: employee_id, name, salary
for line in sys.stdin:
    # Split the input line into fields
    fields = line.strip().split(",")
# Check that the input line has the correct number of fields
    if len(fields) != 3:
        continue
# Extract the salary from the input line
    salary = int(fields[2])
# Emit the salary as the output key and a count of 1 as the output value
    print("{0}\t{1}".format(salary, 1))
