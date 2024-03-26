import sys
current_year = None
total_sales = 0
for line in sys.stdin:
    year, sales = line.strip().split('\t')
    if current_year is None:
        current_year = year
    if year == current_year:
        total_sales += int(sales)
    else:
        print(f"{current_year}\t{total_sales}")
        current_year = year
        total_sales = int(sales)

    if current_year is not None:
        print(f"{current_year}\t{total_sales}")
