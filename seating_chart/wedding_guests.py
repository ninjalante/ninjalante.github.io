class Guest():
  def __init__(self, name, vip_level, hearts=[], hates=[]):
    self.name = name
    self.vip_level = vip_level
    self.hearts = hearts
    self.hates = hates
    self.table_number = None
    self.seated = False
  
  def get_deets(self):
    print('Guest name: ' + self.name)
    print('VIP level: ' + str(self.vip_level))
    if self.hearts:
      print(f'{self.name} wants to sit with:')
      for each in self.hearts:
        print(f'--{each}')
    if self.hates:
      print(f'and does not want to sit with:')
      for each in self.hates:
        print(f'--{each}')
    if self.table_number:
      print(f'{self.name} is sitting at Table{self.table_number}.')
    return '^^^'

  def get_name(self):
    return self.name

  def get_table_number(self):
    return self.table_number

  def is_seated(self):
    if self.seated:
      return True
    return False

  def get_vip_level(self):
    return self.vip_level