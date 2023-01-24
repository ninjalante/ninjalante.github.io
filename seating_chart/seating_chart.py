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
    print(f"\nHere is the data for the {self.wedding_name} wedding:")
    print(f"Total number of guests: {self.num_of_guests}")
    print(f"Total number of tables: {self.num_of_tables}")
    print(f"Guests per table: {self.seats_per_table}")
    return "^^^\n"

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
    self.available_seats = []
    #hey! you can declare a class variable within a method! and then you can use that in another method. isn't that cool? i think so
    for key, value in seats.items():
      print(f'Looking at seat{key} -- seated: {value}')
      if value is None:
        self.available_seats.append({key: value})
      elif value is not None:
        continue
    if len(self.available_seats) == 0:
      return False
    return True

#^^^^ well done, Winko

  def seat_guest(self, guest, target_table=1):
    if target_table > self.num_of_tables:
      return "There is no room left at the wedding. You done fucked up."
    if self.has_room(target_table):
      print(f"\nThere is room for {guest.name} at Table {target_table}.")
      current_table = self.get_table(target_table)
      for key, value in self.available_seats[1].items():
        if value is None:
          current_table[1][key - 1] = guest.name
          guest.seated = True
          guest.table_number = target_table
          print(self.view_table(target_table))
          return f"{guest.name} has been seated at Table {target_table}.\n"
    

    

 #hot damn! you fixed that all by yourself. there was some Googling but everyone Googles. and there was no crying.  
    


#test = Tables("test", 60, 12)
#print(test.has_room(4))
#print(test.seat_guest({'name': 'Lorelai', 'seated': False}, 4))
#print(test.seat_guest({'name': 'Luke', 'seated': False}, 4))
