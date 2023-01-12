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

  def get_table_idx(self, target_table):
    table_idx = target_table - 1
    return table_idx

  def view_table(self, target_table):
    current_idx = self.get_table_idx(target_table)
    current_table = self.tables[current_idx][1]
    print(f'\n{self.tables[current_idx][0]}')
    for key, value in current_table.items():
      print(f'Seat{str(key)}: {value}')
    return '^^^'

  def print_chart(self):
    for each in range(1, len(self.tables) + 1):
      self.view_table(each)
    return '\nChart complete'

#^^ you fucked these right up AND THEN YOU FIXED THEM. well done
  
  def has_room(self, target_table):
    current_idx = self.get_table_idx(target_table)
    print(current_idx)
    current_table = self.tables[current_idx]
    print(current_table)
    return self.view_table(table_number)
    #make a loop for the dictionary? there must be an easier way to do this

#^^^^ working on this one first

  def seat_guest(self, guest, target_table):
    current_idx = self.get_table_idx(target_table)
    current_table = self.tables[current_idx]
    current_seat = 1
    for seats in current_table:
      if seats[current_seat] is None:
        seats[current_seat] = guest.name
    print(self.view_table(target_table))
    #^^make this recursive?
    #remember you also have to take into account the table numbers of the people they do/do not want to sit with
    #AND then you need to assign table_numbers and is_seated
    #this one is definitely last
    


test = Tables("test", 60, 12)
#print(test.print_chart())
print(test.has_room(1))