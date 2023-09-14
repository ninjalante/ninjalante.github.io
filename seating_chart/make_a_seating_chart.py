import seating_chart as sc
import wedding_guests as wg

lorelai = wg.Guest('Lorelai', 1)
luke = wg.Guest('Luke', 1)
rory = wg.Guest('Rory', 1)
jess = wg.Guest('Jess', 3)
liz = wg.Guest('Liz', 3)
tj = wg.Guest('TJ', 4)
maury = wg.Guest('Maury', 5)
bootsy = wg.Guest('Bootsy', 7)
mrs_kim = wg.Guest('Mrs. Kim', 6)
sookie = wg.Guest('Sookie', 1)
dean = wg.Guest('Dean', 5)
paris = wg.Guest('Paris', 4)
lane = wg.Guest('Lane', 6)
richard = wg.Guest('Richard', 4)
christopher = wg.Guest('Christopher', 7)
andrew = wg.Guest('Andrew', 7)
taylor = wg.Guest('Taylor', 7)
dave = wg.Guest('Dave Rygalski', 6)
emily = wg.Guest('Emily', 3)
brian = wg.Guest('Brian', 5)
babette = wg.Guest('Babette', 3)
miss_patty = wg.Guest('Miss Patty', 3)
kirk = wg.Guest('Kirk', 4)
jackson = wg.Guest('Jackson', 1)
april = wg.Guest('April', 4)
sherry = wg.Guest('Sherry', 8)
zach = wg.Guest('Zach', 5)
logan = wg.Guest('Logan', 7)
tristan = wg.Guest('Tristan', 8)
lulu = wg.Guest('Lulu', 4)
roon = wg.Guest('Roon', 10)
crazy_carrie = wg.Guest('Crazy Carrie', 10)
lindsay = wg.Guest('Lindsay', 8)
gypsy = wg.Guest('Gypsy', 5)
marty = wg.Guest('Marty', 5)
young_choo = wg.Guest('Young Choo', 8)
jason = wg.Guest('Jason', 9)
kyon = wg.Guest('Kyon', 5)
beau = wg.Guest('Beau', 10)
doyle = wg.Guest('Doyle', 5)

lorelai.set_hearts_and_hates([luke, rory], [beau, roon, christopher])
rory.set_hearts_and_hates([lorelai, logan], [tristan])
luke.set_hearts_and_hates([lorelai, rory, april, liz, jess], [christopher, taylor, kirk, jason, bootsy, crazy_carrie])
jess.set_hearts_and_hates([rory, luke], [dean, logan])
liz.set_hearts_and_hates([jess, tj, luke, crazy_carrie])
tj.set_hearts_and_hates([liz, luke])
maury.set_hearts_and_hates([babette])
bootsy.set_hearts_and_hates([jackson], [luke])
mrs_kim.set_hearts_and_hates([lane])
sookie.set_hearts_and_hates([jackson, lorelai, rory], [taylor])
dean.set_hearts_and_hates([lindsay, rory], [jess, luke])
paris.set_hearts_and_hates([rory, doyle], [tristan])
lane.set_hearts_and_hates([mrs_kim, rory, dave, zach])
richard.set_hearts_and_hates([emily, lorelai, rory], [jason])
christopher.set_hearts_and_hates([lorelai, sherry, rory], [luke]) #why do lorelai's deets go all the way down here?
andrew.set_hearts_and_hates([None], [gypsy])
taylor.set_hearts_and_hates([luke], [jess])
dave.set_hearts_and_hates([lane], [young_choo])
emily.set_hearts_and_hates([richard, lorelai, rory])
brian.set_hearts_and_hates([zach, kyon])
babette.set_hearts_and_hates([maury, miss_patty])
miss_patty.set_hearts_and_hates([babette])
kirk.set_hearts_and_hates([luke, taylor, lulu])
jackson.set_hearts_and_hates([sookie])
april.set_hearts_and_hates([luke])
sherry.set_hearts_and_hates([christopher, rory], [lorelai])
logan.set_hearts_and_hates([rory])
tristan.set_hearts_and_hates([rory], [dean, paris])
lulu.set_hearts_and_hates([kirk])
roon.set_hearts_and_hates([jackson], [lorelai])
crazy_carrie.set_hearts_and_hates([luke, liz], [lorelai])
lindsay.set_hearts_and_hates([dean], [rory])
gypsy.set_hearts_and_hates([None], [andrew])
marty.set_hearts_and_hates([rory], [logan])
young_choo.set_hearts_and_hates([lane], [dave])
jason.set_hearts_and_hates([lorelai], [richard, emily, luke])
kyon.set_hearts_and_hates([brian, lane])
beau.set_hearts_and_hates([lorelai, jackson])
doyle.set_hearts_and_hates([paris])


hayden_forrester_wedding_guest_list = [lorelai, luke, rory, jess, liz, tj, maury, bootsy]
hayden_forrester_wedding_guest_list += [mrs_kim, sookie, dean, paris, lane, richard, christopher]
hayden_forrester_wedding_guest_list += [andrew, taylor, dave, emily, brian, babette, miss_patty]
hayden_forrester_wedding_guest_list += [kirk, jackson, april, sherry, zach, logan, tristan, lulu, roon]
hayden_forrester_wedding_guest_list += [crazy_carrie, lindsay, gypsy, marty, young_choo, jason, kyon, beau, doyle]

class Wedding():
    def __init__(self, table_list, guest_list):
        self.wedding_name = table_list.wedding_name
        self.table_list = table_list
        self.guest_list = guest_list

    def count_guests(self):
        return len(self.guest_list)

    def is_empty(self):
        if self.count_guests() == 0:
            return True

    def conflict(self, guest1, guest2):
        for each in guest1.hates:
            if each == guest2.name:
                return f'{guest1.name} does not want to sit with {guest2.name}.'
        for each in guest1.hearts:
            if each == guest2.name: 
                return f'{guest1.name} would like to sit with {guest2.name}.'
        #this thing
        for each in guest1.hates and guest2.hates:
            print(each)
            if each != guest2.name and each != guest1.name:
                return 'There is no conflict.'
                

    def look_for_seats(self, guest1, guest2):
        if guest1.vip_level <= guest2.vip_level:
            print(f'{guest1.name} is seated first.')
            print(guest1.get_hearts())
            print(guest1.get_hates())
            print(f'{guest2.name} is seated next.')
            print(guest2.get_hearts())
            print(guest2.get_hates())
            self.conflict(guest1, guest2)
        elif guest2.vip_level < guest1.vip_level:
            print(f'{guest2.name} is seated first.')
            print(guest2.get_hearts())
            print(guest2.get_hates())
            print(f'{guest1.name} is seated next.')
            print(guest1.get_hearts())
            print(guest1.get_hates())
            self.conflict(guest2, guest1)

    def logic_gate_test(self, guest_list):
        pass

    def view_guest_list(self):
        for each in self.guest_list:
            print(each.name)
        return 'Guest List complete^^^'

    def make_a_seating_chart(self, num_of_guests, seated_guests=[], sorted_guest_list=[]):
        #^^^this needs to go somewhere else
        #if all guests are seated
        if len(seated_guests) == num_of_guests:
            #return seating chart
            return self.table_list.print_chart()
        #look at the first guest - guest_list[0]
        for guest in self.guest_list:
            #look at guest name
            print(f"Seating {guest.name}")
        return self.table_list.print_chart()
                #look at people they want to sit with
                #check people they want to sit with for conflicts
                ##add a while loop
                
                                #if person is already seated:
                                    #compare that guest's dislike list to guests already at table
                                        #if there's no conflict
                                            #if two people both want to sit together but one of them is already seated:
                                                #move them both to another table
                                            #seat guest at that table
                                        #if there is a conflict:
                                            #NO beats YES
                                            #vip level breaks a tie
                            

                    #if guest.name in heart.hates:
                        #continue
                
            
            
            
            
            #if there is no conflict:
                #check if person is seated already
                
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
            #add to seated_guests
            
            #call MAKE_A_SEATING_CHART on remaining guest_list_dict

    #but if they both want to sit together and there's a conflict, they need to move to another table together

num_of_guests = 40
num_of_tables = 6

Hayden_Forrester = sc.Tables('Gigi Hayden-Clara Forrester', num_of_guests, num_of_tables)
print(Hayden_Forrester.get_info())
#HF_Wedding = Wedding(Hayden_Forrester, hayden_forrester_wedding_guest_list)
HF_Wedding = Wedding(Hayden_Forrester, [lorelai, luke, rory, jess])

test = wg.Guest('Fart Butt', 5, [lorelai], [luke])

print(Hayden_Forrester.print_chart())
print(lorelai.get_vip_level())
print(jess.vip_level)


