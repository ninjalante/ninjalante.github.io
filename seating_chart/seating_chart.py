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
      seats = {seat: None for seat in range(1, self.seats_per_table + 1)}
      table[1] = seats

  def get_info(self):
    print(f"Here is the data for the {self.wedding_name} wedding:")
    print(f"Total number of guests: {self.num_of_guests}")
    print(f"Total number of tables: {self.num_of_tables}")
    print(f"Guests per table: {self.seats_per_table}")
    return "^^^"

  def get_table(self, target_table):
    current_idx = target_table - 1
    current_table = self.tables[current_idx]
    return current_table

  def view_table(self, target_table):
    current_table = self.get_table(target_table)
    seats = current_table[1]
    print(f'\n{current_table[0]}')
    for key, value in seats.items():
      print(f'Seat{str(key)}: {value}')
    return '^^^'

  def print_chart(self):
    for each in range(1, len(self.tables) + 1):
      self.view_table(each)
    return '\nChart complete'

#^^ you fucked these right up AND THEN YOU FIXED THEM. well done
  
  def has_room(self, target_table):
    current_table = self.get_table(target_table)
    seats = current_table[1]
    available_seats = []
    for key, value in seats.items():
      print(f'Looking at seat{key} -- seated: {value}')
      if value is None:
        available_seats.append({key: value})
      elif value is not None:
        continue
    if len(available_seats) == 0:
      return False
    return True

#^^^^ well done, Winko

  def seat_guest(self, guest, target_table):
    current_table = self.get_table(target_table)
    current_seat = 1
    for seats in current_table:
      if seats[current_seat] is None:
        seats[current_seat] = guest.name
    print(self.view_table(target_table))
    #this should be simple; it will be used later for the BIG SHOW on the final page.
    


test = Tables("test", 60, 12)
#print(test.print_chart())
#print(test.get_table(1))