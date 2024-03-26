import sys
# Initialize the maximum salary to 0
max_salary = 0
# Iterate over each line in the input
for line in sys.stdin:
    # Split the line into key and value
    key, value = line.strip().split('\t', 1)

    # Convert the value to an integer
    try:
        salary = int(value)
    except ValueError:
        continue
    # Update the maximum salary if this salary is higher
    if salary > max_salary:
        max_salary = salary
    # Output the final maximum salary
print("Max Salary: %s" % max_salary)
