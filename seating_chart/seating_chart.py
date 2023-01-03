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
      seats = [{seat: None} for seat in range(1, self.seats_per_table + 1)]
      table[1] = seats

  def get_info(self):
    print(f"Here is the data for the {self.wedding_name} wedding:")
    print(f"Total number of guests: {self.num_of_guests}")
    print(f"Total number of tables: {self.num_of_tables}")
    print(f"Guests per table: {self.seats_per_table}")
    return "^^^"

  def view_table(self, target_table):
    for table in self.tables:
      if table[0] == target_table:
        print(table[0])
        n = 1
        for seats in table[1]:
          print(seats[n])
          n += 1
    return '^^^'
#^^ you fucked this right up. fix it!

  def print_chart(self):
    for each in self.tables:
      print(self.view_table(each[0]))
    return 'Chart complete'
  
  def has_room(self, guests_per_table):
    for table in self.tables:
      if len(self.tables) == guests_per_table:
        return False
      return True

  def seat_guest(self, guest, table_number):
    table_number_idx = table_number - 1
    current_table = self.tables[table_number_idx]
    current_seat = 1
    for seats in current_table:
      if seats[current_seat] is None:
        seats[current_seat] = guest.name
    print(current_table)