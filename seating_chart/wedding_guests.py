class Guest():
  def __init__(self, name, vip_level, hearts=[], hates=[]):
    self.name = name
    self.vip_level = vip_level
    self.hearts = hearts
    self.hates = hates
    self.table_number = None
    self.seated = False

  def get_name(self):
    return self.name
  
  def set_name(self, name):
    self.name = name
    return f"Name has been changed to {self.name}"

  def get_table_number(self):
    if self.table_number:
      return self.table_number
  
  def set_table_number(self, table_number):
    self.table_number = table_number
    return f"Table number is now {self.table_number}."

  def set_hearts_and_hates(self, heart_list=[None], hate_list=[None]):
    self.hearts += heart_list
    self.hates += hate_list

  #these getters are printing objects instead of attributes
  #why is every damn list a full damn list?

  def get_hearts(self):
    if self.hearts is not None:
      print(f'{self.name} wants to sit with')
      
     
      return "^^^"

  def get_hates(self):
    if self.hates is not None:
      print(f'{self.name} does not want to sit with')
      print("--you")
      
      return "^^^"

  def is_seated(self):
    if self.seated:
      return True
    return False

  def get_vip_level(self):
    return self.vip_level

  def set_vip_level(self, vip_level):
    self.vip_level = vip_level
    return f"New VIP level is {self.vip_level}"

  def get_deets(self):
    print('Guest name: ' + self.get_name())
    print('VIP level: ' + str(self.get_vip_level()))
    self.get_hearts()
    self.get_hates()
    if self.table_number is not None:
      print(f'{self.get_name()} is sitting at Table {self.get_table_number()}.')
    return '^^^'
  