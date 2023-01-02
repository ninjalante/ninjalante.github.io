import seating_chart as sc
import wedding_guests as wg

lorelai = wg.Guest('Lorelai', 1, ['Luke', 'Rory'], ['Christopher'])
luke = wg.Guest('Luke', 1, ['Lorelai', 'Rory', 'April', 'Liz', 'Jess'], ['Jason', 'Christopher', 'Taylor', 'Bootsy'])
rory = wg.Guest('Rory', 1, ['Lorelai', 'Logan'], ['Tristan'])
jess = wg.Guest('Jess', 3, ['Rory'], ['Dean', 'Logan'])
liz = wg.Guest('Liz', 3, ['Luke', 'TJ', 'Jess'])
tj = wg.Guest('TJ', 4, ['Liz' 'Luke'])
maury = wg.Guest('Maury', 5, ['Babette'])
bootsy = wg.Guest('Bootsy', 7, [None], ['Luke'])
mrs_kim = wg.Guest('Mrs. Kim', 6, ['Lane'])
sookie = wg.Guest('Sookie', 1, ['Jackson', 'Lorelai', 'Rory'], ['Taylor'])
dean = wg.Guest('Dean', 5, ['Lindsay', 'Rory'], ['Jess', 'Luke'])
paris = wg.Guest('Paris', 4, ['Doyle', 'Rory'], ['Tristan'])
lane = wg.Guest('Lane', 6, ['Zach', 'Mrs. Kim', 'Dave'])
richard = wg.Guest('Richard', 4, ['Emily', 'Rory', 'Lorelai'], ['Jason'])
christopher = wg.Guest('Christopher', 7, ['Sherry', 'Lorelai', 'Rory'], ['Luke'])
andrew = wg.Guest('Andrew', 7, [None], ['Gypsy'])
taylor = wg.Guest('Taylor', 7, [None], ['Jess'])
dave = wg.Guest('Dave Rygalski', 6, ['Lane'], ['Young Choo'])
emily = wg.Guest('Emily', 10, ['Richard', 'Lorelai', 'Rory'])
brian = wg.Guest('Brian', 5, ['Kyon', 'Zach'], ['Tristan'])
babette = wg.Guest('Babette', 3, ['Maury', 'Miss Patty'])
miss_patty = wg.Guest('Miss Patty', 3, ['Babette'])
kirk = wg.Guest('Kirk', 4, ['Lulu', 'Taylor', 'Luke'])
jackson = wg.Guest('Jackson', 1, ['Sookie'], [None])
april = wg.Guest('April', 4, ['Luke'])
sherry = wg.Guest('Sherry', 10, ['Christopher', 'Rory'], ['Lorelai'])
zach = wg.Guest('Zach', 5, ['Lane', 'Brian'])
logan = wg.Guest('Logan', 7, ['Rory'])
tristan = wg.Guest('Tristan', 8, ['Rory'], ['Dean'])
lulu = wg.Guest('Lulu', 4, ['Kirk'])
roon = wg.Guest('Roon', 10, ['Jackson'], ['Lorelai'])
crazy_carrie = wg.Guest('Crazy Carrie', 10, ['Luke', 'Liz'], ['Lorelai'])
lindsay = wg.Guest('Lindsay', 8, ['Dean'], ['Lorelai', 'Rory'])
gypsy = wg.Guest('Gypsy', 5, [None], ['Andrew'])
marty = wg.Guest('Marty', 5, ['Rory'], ['Logan'])
young_choo = wg.Guest('Young Choo', 8, ['Lane'])
jason = wg.Guest('Jason', 9, ['Lorelai'], ['Luke', 'Richard'])
kyon = wg.Guest('Kyon', 5, ['Brian'], ['Mrs. Kim'])
beau = wg.Guest('Beau', 10, ['Jackson', 'Lorelai'])
doyle = wg.Guest('Doyle', 5, ['Paris'], [None])

hayden_forrester_wedding_guest_list = [lorelai, luke, rory, jess, liz, tj, maury, bootsy]
hayden_forrester_wedding_guest_list += [mrs_kim, sookie, dean, paris, lane, richard, christopher]
hayden_forrester_wedding_guest_list += [andrew, taylor, dave, emily, brian, babette, miss_patty]
hayden_forrester_wedding_guest_list += [kirk, jackson, april, sherry, zach, logan, tristan, lulu, roon]
hayden_forrester_wedding_guest_list += [crazy_carrie, lindsay, gypsy, marty, young_choo, jason, kyon, beau, doyle]

def count_guests(guest_list):
    return len(guest_list)

num_of_guests = count_guests(hayden_forrester_wedding_guest_list)

test = sc.Tables('Gigi Hayden-Clara Forrester', num_of_guests, 6)
print(test.get_info())