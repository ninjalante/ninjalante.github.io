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

  def get_table_number(self):
    if self.table_number:
      return self.table_number

  def get_hearts(self, shared_hearts=[]):
    if self.hearts:
      print(f'{self.name} wants to sit with')
      for heart in self.hearts:
        print(f'--{heart}')
        shared_hearts.append(heart)
    return "^^^"

  def get_hates(self, shared_hates=[]):
    if self.hates:
      print(f'{self.name} does not want to sit with')
      for hate in self.hates:
          print(f'--{hate}')
          shared_hates.append(hate)
    return "^^^"

  def is_seated(self):
    if self.seated:
      return True
    return False

  def get_vip_level(self):
    return self.vip_level

  def get_deets(self):
    print('Guest name: ' + self.get_name())
    print('VIP level: ' + str(self.get_vip_level()))
    print(self.hearts())
    print(self.hates())
    print(f'{self.get_name()} is sitting at Table{self.get_table_number()}.')
    return '^^^'