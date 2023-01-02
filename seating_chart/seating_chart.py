class Tables():
  def __init__(self, wedding_name, num_of_guests, num_of_tables):
    self.wedding_name = wedding_name
    self.num_of_guests = num_of_guests
    self.num_of_tables = num_of_tables
    self.seats_per_table = round(self.num_of_guests / self.num_of_tables)
    self.table_nums = [num for num in range(1, num_of_tables + 1)]
    self.tables = []
    for num in self.table_nums:
      self.tables += [['Table' + str(num), [None]]]
    for table in self.tables:
      seats = [{'seat': seat, 'guest': None} for seat in range(1, self.seats_per_table + 1)]
      table[1] = seats

  def get_info(self):
    print(f"Here is the data for the {self.wedding_name} wedding:")
    print(f"Total number of guests: {self.num_of_guests}")
    print(f"Total number of tables: {self.num_of_tables}")
    print(f"Guests per table: {self.seats_per_table}")
    return "^^^"

  def view_table(self, list_of_tables, target_table):
    for table in list_of_tables:
      if table[0] == target_table:
        print(table[0])
        for seats in table[1]:
          print(seats["guest"])
    return '^^^'

  def print_chart(self, list_of_tables):
    for each in list_of_tables:
      print(self.view_table(list_of_tables, each[0]))
    return 'Chart complete'
