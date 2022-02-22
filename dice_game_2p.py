import random

class Player:
  def __init__(self):
    self.points = 23
    self.wins = 0
    self.chosen_dice = []

player_1 = Player()
player_2 = Player()

player_made_rules = []

input('Hello! Welcome to Dice Game. Are you ready to begin? ')

player_1.name = input('Great! Please enter Player One\'s name. ')

player_2.name = input(f'Nice to meet you, {player_1.name}. Please enter Player Two\'s name. ')

rules = input(f'All right! We have {player_1.name} and {player_2.name}. Would you like to hear the rules? ')

if rules == 'yes' or rules == 'y':
  input(f'Each player begins the game with 23 points. {player_1.name} will go first. [Press enter to continue]') 
  input('Press enter to roll 5 dice. You will see the number results of those 5 dice. For example, [1, 4, 5, 3, 2]. Enter the VALUES of the dice you want to keep - you can keep as many dice as you want, but you MUST keep at least one die. [Press enter to continue]')
  input('Then you will ROLL AGAIN. Your turn ends when you have 5 dice in your POCKET. [Press enter to continue]')
  input(f'If the TOTAL of {player_1.name}\'s dice is MORE than 23, the difference will be subtracted from {player_2.name}\'s total. If the TOTAL of {player_1.name}\'s dice is LESS than 23, the difference will be subtracted from {player_1.name}\'s total. [Press enter to continue]') 
  input('After one of the players\' totals is reduced to 0, the game continues with a new round. But the next round cannot begin until the winning player makes a new rule that will apply for the rest of the game. [Press enter to continue]')
  input(f'For example, if {player_2.name} wins, then {player_2.name} might say that from now on, you have to keep the first 3 that you roll on a die. The rules will be recorded and printed at the end of every round. \n Ready to play? Let\'s get started! [Press enter to start the game!]')

while player_1.wins < 5 and player_2.wins < 5:
  while player_1.points > 0 and player_2.points > 0:
    input(f'It\'s {player_1.name}\'s turn! Press enter to roll')
    while len(player_1.chosen_dice) < 5:
      rolled_dice = []
      num_of_dice = 5
      num_of_dice = num_of_dice - len(player_1.chosen_dice)
      for each in range(num_of_dice):
        die = random.randint(1, 6)
        rolled_dice.append(die)
      print(rolled_dice)
      chosen = input('Okay! What dice would you like to keep? Type the numbers with no spaces or commas: ')
      for d in chosen:
        player_1.chosen_dice.append(d)
      print(player_1.chosen_dice)
      if len(player_1.chosen_dice) < 5:
        input(f'These are the dice in {player_1.name}\'s pocket. Press enter to roll again')
      else:
        input(f'These are the dice in {player_1.name}\'s pocket. Press enter to get the results')
    total = int(player_1.chosen_dice[0]) + int(player_1.chosen_dice[1]) + int(player_1.chosen_dice[2]) + int(player_1.chosen_dice[3]) + int(player_1.chosen_dice[4])
    if total < 23:
      diff = 23 - total
      player_1.points = player_1.points - diff
    elif total > 23:
      diff = total - 23
      player_2.points = player_2.points - diff
    else:
      pass
    input(f'{player_1.name}\'s pocket total is {total}.\nCurrent points:\n {player_1.name}: {player_1.points}\n {player_2.name}: {player_2.points}\nPress enter to continue')
    if player_1.points <= 0:
      break
    input(f'It\'s {player_2.name}\'s turn! Press enter to roll')
    while len(player_2.chosen_dice) < 5:
      rolled_dice = []
      num_of_dice = 5
      num_of_dice = num_of_dice - len(player_2.chosen_dice)
      for each in range(num_of_dice):
        die = random.randint(1, 6)
        rolled_dice.append(die)
      print(rolled_dice)
      chosen = input('Okay! What dice would you like to keep? Type the numbers with no spaces or commas: ')
      for d in chosen:
        player_2.chosen_dice.append(d)
      print(player_2.chosen_dice)
      if len(player_2.chosen_dice) < 5:
        input(f'These are the dice in {player_2.name}\'s pocket. Press enter to roll again')
      else:
        input(f'These are the dice in {player_2.name}\'s pocket. Press enter to get the results')
    total = int(player_2.chosen_dice[0]) + int(player_2.chosen_dice[1]) + int(player_2.chosen_dice[2]) + int(player_2.chosen_dice[3]) + int(player_2.chosen_dice[4])
    if total < 23:
      diff = 23 - total
      player_2.points = player_2.points - diff
    elif total > 23:
      diff = total - 23
      player_1.points = player_1.points - diff
    else:
      pass
    input(f'{player_2.name}\'s pocket total is {total}.\nCurrent points:\n {player_1.name}: {player_1.points}\n {player_2.name}: {player_2.points}\nPress enter to continue')
    for i in range(len(player_1.chosen_dice)):
      player_1.chosen_dice.pop()
    for i in range(len(player_2.chosen_dice)):
      player_2.chosen_dice.pop()
    if player_2.points <= 0:
      break
    
    
  if player_1.points > player_2.points:
    player_1.wins += 1
    winner = player_1.name
  else:
    player_2.wins += 1
    winner = player_2.name

  if player_1.wins == 5 or player_2.wins == 5:
    break

  else:
    player_rule = input(f'{winner} is the winner! The score is now\n{player_1.name}: {player_1.wins}\n{player_2.name}: {player_2.wins}\n{winner}, please enter your rule. ')
    player_made_rules.append(player_rule)
    for each in player_made_rules:
      print(each)
    player_1.points = 23
    player_2.points = 23
    for i in range(len(player_1.chosen_dice)):
      player_1.chosen_dice.pop()
    for i in range(len(player_2.chosen_dice)):
      player_2.chosen_dice.pop()
    input('Play another round? Type yes to continue ')

if player_1.wins == 5:
  big_winner = player_1.name
if player_2.wins == 5:
  big_winner = player_2.name

print('CONGRATULATIONS ' + big_winner.upper() + '! YOU ARE THE WINNER!')   