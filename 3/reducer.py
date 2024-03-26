#!/usr/bin/env python
import sys
# Initialize variables to hold the sum of salaries and the count of employees
total_salary = 0
employee_count = 0
# Process input from mapper
for line in sys.stdin:
    # Split the input line into key and value
    salary, count = line.strip().split("\t")
    # Update the sum of salaries and the count of employees

    # why is count multiplied by salary?
    total_salary += int(salary) * int(count)

    employee_count += int(count)

# Calculate the average salary
average_salary = total_salary / employee_count
# Output the result
print("Average salary: {0}".format(average_salary))
