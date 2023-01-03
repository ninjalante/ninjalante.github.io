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
emily = wg.Guest('Emily', 3, ['Richard', 'Lorelai', 'Rory'])
brian = wg.Guest('Brian', 5, ['Kyon', 'Zach'], ['Tristan'])
babette = wg.Guest('Babette', 3, ['Maury', 'Miss Patty'])
miss_patty = wg.Guest('Miss Patty', 3, ['Babette'])
kirk = wg.Guest('Kirk', 4, ['Lulu', 'Taylor', 'Luke'])
jackson = wg.Guest('Jackson', 1, ['Sookie'], [None])
april = wg.Guest('April', 4, ['Luke'])
sherry = wg.Guest('Sherry', 8, ['Christopher', 'Rory'], ['Lorelai'])
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

def is_empty(guest_list):
    if count_guests(guest_list) == 0:
        return True

def conflict(guest1, guest2):
    pass
    #check guest's hates and hearts

def make_a_seating_chart(tables_list_dict, guest_list_dict, seated_guests_dict=[]):
    #if guest_list_dict is empty
    if is_empty(guest_list_dict):
        #return seating chart
        return tables_list_dict.print_chart()
    #look at the first guest - guest_list[0]
        #look at guest name
        #look at people they want to sit with
        #check people they want to sit with for conflicts
        #if there is a conflict:
            #NO beats YES
            #if two people both want to sit together but one of them is already seated:
                #move them both to another table
                #call MAKE_A_SEATED_CHART
        #if there is no conflict:
            #check if person is seated already
            #if person is already seated:
                #compare that guest's dislike list to guests already at table
                #if there's no conflict
                    #seat guest at that table
                #if there is a conflict
                    #compare VIP levels
                    #if one VIP level is higher
                        #that person gets the table
                        #if winning person is not seated yet
                            #add that person to seated list
                            #return unseated person to guest list
            #else:
                #seat guest
                #call MAKE_A_SEATING_CHART on desired guests
        #pop guest off guest_list and add to seated_guests
        #call MAKE_A_SEATING_CHART on remaining guest_list_dict

#but if they both want to sit together and there's a conflict, they need to move to another table together. shit

num_of_guests = count_guests(hayden_forrester_wedding_guest_list)
num_of_tables = 6

Hayden_Forrester = sc.Tables('Gigi Hayden-Clara Forrester', num_of_guests, num_of_tables)
print(Hayden_Forrester.get_info())
print(Hayden_Forrester.print_chart())

Hayden_Forrester.seat_guest(lorelai, 3)
