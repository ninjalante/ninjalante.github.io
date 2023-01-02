class Guest():
  def __init__(self, name, vip_level, hearts=[], hates=[]):
    self.name = name
    self.vip_level = vip_level
    self.hearts = hearts
    self.hates = hates
  
  def get_guest_deets(self):
    print('Guest name:' + self.name)
    print('VIP level: ' + self.vip_level)
    if self.hearts:
      print(f'{self.name} wants to sit with:')
      for each in self.hearts:
        print(f'--{each}')
    if self.hates:
      print(f'and does not want to sit with:')
      for each in self.hates:
        print(f'--{each}')
    return '^^^'