// variable for currency conversion
var currencyFactor = 1;

// Lists values
var motorPowerValues = "0.12,0.18,0.25,0.37,0.55,0.75,1.1,1.5,2.2,3,4,5.5,7.5,11,15,18.5,22,30,37,45,55,75,90,110,132,160,200,225,250,275,315,355,400".split(",");
var motorSpeedValues = "1450,960".split(",");
var daysPerWeekValues = "1,2,3,4,5,6,7".split(",");
var weeksPerYearValues = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52".split(",");
var hoursPerDayValues = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24".split(",");
var electricityCostsValues = "0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.10,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.20,0.21,0.22,0.23,0.24,0.25".split(",");
var currencyValues = "GBP,SEK,EUR,USD".split(",");
var typeValues = "worm".split(",");
var centresValues = "28 mm,41 mm,51 mm,61 mm,73 mm,86 mm,100 mm,125 mm,160 mm,200 mm,4\",5\",6\",7\",8\",10\",12\",14\",17\",20\",24\",28\"".split(",");
var ratiosValues = "5/1,10/1,15/1,20/1,25/1,30/1,40/1,50/1,60/1,70/1,75/1,100/1,125/1,150/1,200/1,225/1,250/1,300/1,350/1,375/1,400/1,450/1,500/1,600/1,625/1,700/1,750/1,800/1,900/1,1000/1,1200/1,1250/1,1400/1,1500/1,1600/1,1750/1,1800/1,2000/1,2100/1,2400/1,2500/1,2800/1,3000/1,3500/1,3600/1,4200/1,4900/1".split(",");
// End of lists values

// Efficiency data
var motor_1450_efficiency = [
								 [87,80,77,67,64,61,53,49,43,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
								,[88,83,79,77,69,67,62,58,51,48,63,61,53,56,51,52,46,43,42,30,38,39,34,31,31,24,29,27,27,24,22,22,19,20,17,17,17,16,16,13,12,12,10,9,7,6,0]
								,[91,85,82,74,71,7,66,61,57,53,67,59,55,60,51,56,48,47,44,36,40,42,37,35,34,24,33,29,31,27,25,25,19,24,22,18,20,20,18,17,15,16,13,12,10,9,0]
								,[91,88,83,77,74,71,67,63,59,55,67,61,57,60,54,56,50,54,46,34,47,43,43,41,37,35,34,34,32,31,29,29,27,37,24,24,23,22,22,19,17,18,15,14,11,11,0]
								,[93,90,88,85,80,78,74,71,67,62,73,70,63,66,63,61,56,59,51,42,55,48,48,46,41,36,39,41,37,35,33,32,32,30,29,27,26,27,25,23,23,22,20,19,16,15,0]
								,[94,91,89,86,81,80,76,72,69,65,76,73,66,68,65,65,58,57,46,54,53,52,47,45,44,42,42,45,40,39,37,35,36,33,33,31,31,29,29,27,25,25,24,22,19,18,0]
								,[96,93,91,89,87,85,81,78,75,70,77,76,72,72,70,67,93,61,52,58,58,58,54,51,51,45,48,48,45,45,42,41,38,39,38,36,37,35,34,33,31,30,29,26,25,22,0]
								,[96,94,91,90,88,86,83,80,77,75,81,78,75,76,74,73,69,70,58,64,67,64,63,58,57,53,55,56,52,52,49,49,46,46,45,43,44,42,41,39,38,36,35,32,31,29,0]
								,[97,94,92,90,89,86,83,82,79,75,84,80,78,79,75,76,71,73,59,68,69,65,66,63,61,55,60,58,57,56,51,53,49,50,47,47,46,44,43,42,42,39,39,37,35,32,0]
								,[96,95,93,92,91,88,86,84,81,79,86,83,81,82,79,79,77,77,67,74,74,69,72,68,68,62,66,65,63,63,58,60,56,58,55,54,53,52,50,50,50,47,47,44,44,41,0]
								,[94,91,87,85,80,78,74,69,66,63,73,70,65,62,58,61,53,58,48,53,48,50,48,45,45,44,41,42,39,38,35,34,33,32,32,30,30,28,28,27,25,24,24,23,22,20,0]
								,[94,92,89,87,84,80,75,72,69,66,75,73,70,66,59,64,56,61,51,58,51,53,48,47,46,45,44,45,42,43,38,37,36,37,33,33,33,31,31,29,28,27,27,26,25,23,0]
								,[95,93,90,88,85,82,78,75,71,68,79,77,73,69,65,70,61,67,54,63,59,59,57,56,55,53,51,53,47,49,45,43,42,43,41,39,39,37,37,36,33,31,33,31,30,27,0]
								,[95,93,91,88,87,83,80,77,73,70,81,78,76,71,68,72,65,68,57,66,60,61,59,58,56,54,53,54,50,52,47,45,44,46,43,41,41,40,39,38,34,33,35,33,32,29,0]
								,[95,93,91,88,88,85,81,77,74,71,83,81,78,76,70,74,66,70,59,68,63,65,62,60,58,55,54,57,51,55,51,49,48,48,45,45,45,41,42,39,37,35,36,34,33,30,0]
								,[95,94,93,91,89,87,84,80,78,76,84,82,79,76,77,74,74,72,63,70,71,67,68,59,64,57,62,90,54,59,52,59,50,53,51,51,51,48,45,44,44,42,41,39,39,37,0]
								,[96,94,93,92,90,88,85,82,79,78,85,83,80,78,79,76,76,74,94,72,72,71,69,61,67,59,65,62,57,60,54,58,52,56,53,52,53,50,47,45,46,44,43,41,41,39,0]
								,[96,94,94,92,90,88,84,82,80,77,85,84,82,80,80,77,77,75,65,74,74,72,70,64,69,60,67,63,60,62,57,60,52,57,54,54,55,52,48,49,48,45,46,43,44,40,0]
								,[95,94,93,91,89,88,86,82,80,77,87,85,82,81,81,78,78,76,68,75,75,73,72,65,71,63,68,67,62,65,59,62,56,60,59,58,58,57,52,51,52,49,49,46,47,44,0]
								,[95,95,94,93,91,90,88,87,80,78,88,86,84,82,83,80,80,79,68,77,79,76,75,65,73,63,71,70,62,68,59,65,57,63,62,60,60,59,52,51,57,49,49,46,46,44,0]
								,[96,95,94,93,91,90,89,87,81,81,88,87,85,84,84,82,81,80,73,79,80,78,77,68,74,67,72,73,65,69,63,66,62,65,65,62,62,62,58,55,59,54,52,51,49,49,0]
								,[96,95,94,93,91,90,89,87,81,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
							];

var motor_960_efficiency = [
								 [87,79,76,65,62,59,51,47,42,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
								,[87,82,78,76,68,65,60,56,49,47,62,59,52,54,50,50,44,42,41,30,37,38,33,30,31,24,28,26,26,23,21,22,19,20,17,17,17,16,16,13,12,12,10,9,7,6,0]
								,[89,84,82,73,69,68,64,59,55,52,66,57,54,58,49,54,46,45,43,35,38,41,36,34,33,24,31,28,30,26,24,24,19,23,21,18,20,20,17,17,15,16,13,12,11,10,0]
								,[90,86,82,75,72,69,65,61,57,53,66,59,56,59,52,55,49,52,44,33,45,41,42,39,36,34,33,33,31,30,28,28,26,26,24,24,22,22,22,19,17,18,15,14,12,11,0]
								,[93,90,87,84,79,77,73,70,65,61,72,68,61,64,61,59,54,57,49,41,54,47,47,45,40,36,38,39,35,34,32,31,31,29,28,26,26,26,25,23,23,22,20,19,16,15,0]
								,[93,91,88,85,80,78,74,70,67,63,74,71,64,66,63,63,56,55,45,53,52,51,45,43,42,40,40,43,38,37,35,34,35,32,32,29,30,28,28,26,25,25,23,22,19,18,0]
								,[95,93,90,88,85,84,80,76,73,68,75,74,69,70,68,65,60,58,50,56,56,56,52,49,49,43,45,46,43,43,40,40,37,37,36,34,35,34,32,31,30,29,28,25,24,22,0]
								,[95,94,91,89,86,84,81,78,76,73,79,77,73,75,72,71,67,68,56,62,65,62,61,56,55,51,53,54,50,50,48,47,44,44,43,41,42,41,39,37,37,35,34,31,31,28,0]
								,[96,94,92,8,88,85,82,80,77,73,82,78,76,78,73,74,69,71,57,66,66,62,65,60,59,53,57,56,54,54,49,50,47,48,45,45,44,42,41,40,40,37,37,35,33,31,0]
								,[96,95,93,91,90,87,85,83,80,78,84,81,79,80,77,77,75,75,64,71,72,67,70,66,66,59,63,62,60,61,56,58,47,55,53,52,51,50,48,48,47,45,45,42,42,39,0]
								,[93,90,86,84,79,76,72,67,64,62,68,66,60,57,53,57,48,54,43,48,44,46,44,41,41,38,38,38,32,34,32,32,30,29,29,28,27,25,25,24,23,23,21,20,20,18,0]
								,[94,91,88,86,83,79,73,70,67,64,71,69,65,60,54,59,51,57,46,54,46,49,44,43,41,40,40,41,38,38,34,34,32,33,30,30,30,28,28,25,24,24,24,23,22,20,0]
								,[94,92,90,87,84,81,77,74,70,66,76,73,69,65,60,66,56,63,49,59,54,55,53,51,49,47,47,48,43,44,41,41,39,39,37,36,36,34,33,32,31,31,29,28,27,24,0]
								,[94,92,90,88,86,82,79,76,72,69,77,74,71,66,63,68,60,64,52,62,56,56,54,53,49,50,50,49,46,47,42,42,40,41,39,38,37,37,35,34,33,32,32,30,29,26,0]
								,[95,93,91,89,87,85,80,76,73,70,80,77,74,71,65,70,61,67,54,64,59,61,58,56,51,50,50,53,48,51,48,48,45,45,41,41,42,38,39,36,34,33,33,32,31,28,0]
								,[95,94,92,91,88,86,83,79,76,75,82,80,77,74,75,71,72,69,60,68,69,65,65,56,62,54,59,57,52,56,49,53,48,51,49,48,48,45,43,41,42,40,39,37,36,35,0]
								,[95,94,93,91,89,88,84,81,78,76,83,81,78,77,77,74,74,72,62,71,70,69,67,59,65,57,63,59,55,58,51,55,50,53,50,49,51,48,45,43,44,42,41,39,38,37,0]
								,[96,94,93,92,90,88,85,81,80,76,84,82,80,77,78,75,75,73,62,72,71,70,68,62,66,57,64,60,58,60,65,57,50,55,52,51,52,49,45,46,46,42,44,40,42,38,0]
								,[95,94,93,91,89,88,86,82,80,77,85,83,81,79,79,76,76,74,66,73,73,71,70,63,68,60,66,65,59,62,56,60,54,57,57,55,55,54,49,49,49,46,46,44,44,42,0]
								,[95,95,94,93,91,90,88,87,80,78,86,85,82,81,81,78,78,77,65,75,77,74,73,63,71,60,69,68,60,65,57,62,54,60,60,58,58,57,50,49,54,46,46,44,44,42,0]
								,[96,95,94,93,91,91,89,87,82,81,87,86,83,82,82,80,79,78,70,77,78,76,74,66,72,65,71,71,63,67,60,64,59,63,63,60,60,60,55,52,57,52,50,49,47,47,0]
								,[96,95,94,93,91,91,89,87,82,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
							];
// End of efficiency data

// New drives data
var newDrives_1450 = 	[
							["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0432","K0432","K0432","K0432","K0432","K0432","K0432","K0432","K0432","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0532","K0532","K0532","K0532","K0532","K0532","K0532","K0532","K0532","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0832","K0852","K0852","K0852","K0852","K0852","K0852","K0852","K0852","K0852","K0952","K0951","K0951","K0852","K0852","K0852","K0951","K0951","K0951","K0951","K0951","K1051","K0951","K1051","K0951","K0951","K0951","K1051","K1051","K1051","K1051","K1051","K1051","K1051","CR"]
							,["CR","K0832","K0832","K0832","K0832","K0732","K0732","K0732","K0732","K0732","K0832","K0832","K0932","K0932","K0951","K0951","K0951","K0951","K0951","K0951","K0951","K1051","K1051","K1051","K1051","K0951","K0951","K1051","K0951","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","K1051","CR"]
							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K1031","K1031","K1031","K1031","K1051","K1251","K1051","K1251","K1051","K1251","K1251","K1251","K1251","K1251","K1251","K1051","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1231","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","K1251","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0832","K0832","K0832","K0832","K0832","K0832","K0832","K0832","K0832","K0832","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]

							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K1031","K1031","K1031","K1031","K1031","K1251","K1251","K1251","K1251","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K1031","K1031","K1031","K1031","K1031","K1231","K1231","K1231","K1231","K1231","K1231","K1231","K1231","G1640","G1640","G1640","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1430B","K1031","K1231","K1231","K1231","K1231","G1430","G1430","G1430","G1640","G1640","G1640","G1640","G1640","G1640","G1640","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1430B","G1530","G1530","G1630","G1630","G1630","G1630","G1630","G1640","G1640","G1640","G1740","G1740","G1740","G1740","G1740","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1630","G1630","G1630","G1630","G1630","G1630","G1730","G1730","G1730","G1730","G1840","G1840","G1840","G1840","G1840","G1840","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1830","G1730","G1730","G1730","G1830","G1730","G1730","G1830","G1840","G1840","G1840","G1940","G1940","G1940","G1940","G1940","G1940","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1830","G1830","G1830","G1830","G1830","G1830","G1830","G1830","G1840","G1930","G1930","G2140","G2140","G2140","G2140","G2140","G2140","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
						];
						
var newDrives_960 = 	[
							["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"]
							,["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","K0332","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0432","K0432","K0432","K0432","K0432","K0432","K0432","K0432","K0432","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0532","K0532","K0532","K0532","K0532","K0532","K0532","K0532","K0532","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0832","K0832","K0832","K0832","K0732","K0732","K0732","K0732","K0732","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","K1031","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","K0632","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","K0732","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0832","K0832","K0832","K0832","K0832","K0832","K0832","K0832","K0832","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K0931","K1031","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","K1031","K1031","K1031","K1031","K1031","K1231","K1231","K1231","K1231","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1430B","K1031","K1231","K1231","K1231","K1231","G1430","G1430","G1430","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1430B","G1530","G1530","G1630","G1630","G1630","G1630","G1630","G1640","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1630","G1630","G1630","G1630","G1630","G1630","G1730","G1730","G1730","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1830","G1730","G1730","G1730","G1830","G1730","G1730","G1830","G1840","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["CR","G1830","G1830","G1830","G1830","G1830","G1830","G1830","G1830","G1840","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR","CR"]
							,["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
						];
// End new drives data	


// Cost of new gearbox data	
var costOfNewGearBox = {}; 
costOfNewGearBox["K03"] = 862.00;
costOfNewGearBox["K04"] = 890;
costOfNewGearBox["K05"] = 950;
costOfNewGearBox["K06"] = 1100;
costOfNewGearBox["K07"] = 1360;
costOfNewGearBox["K08"] = 2165;
costOfNewGearBox["K09"] = 3080;
costOfNewGearBox["K10"] = 4880;
costOfNewGearBox["K12"] = 8200;
costOfNewGearBox["G14"] = 9779;
costOfNewGearBox["G15"] = 10665;
costOfNewGearBox["G16"] = 16834;
costOfNewGearBox["G17"] = 17629;
costOfNewGearBox["G18"] = 28206;
costOfNewGearBox["G19"] = 34089;
costOfNewGearBox["G21"] = 60436;
costOfNewGearBox["G22"] = 67534;
// End of cost of new gearbox data	

// Service costs data
var serviceCostsSingle = [389,470,491,665,917,1074,1756,2390,3442,4876,1263,1696,2132,2722,3235,6813,10564,16417,29121,0,0,0];
var serviceCostsDouble = [0,951,990,1232,1488,1707,2420,3310,4538,6790,0,0,0,0,0,0,0,0,0,0,0,0]; 
// End of Service costs data
				
$(document).ready(function(){
	// populate all drop down lists with values
	populateLists();
        setlistdefaults();
	
	$("#type").change(function(){
		updateEffeciency();
	});
	$("#centres").change(function(){
		updateEffeciency();
	});
	$("#ratios").change(function(){
		updateEffeciency();
	});
	$("#motorSpeed").change(function(){
		updateEffeciency();
	});
	$("#hoursPerDay").change(function(){
		updateEffeciency();
	});
	$("#daysPerWeek").change(function(){
		updateEffeciency();
	});
	$("#weeksPerYear").change(function(){
		updateEffeciency();
	});
	$("#electricityCosts").change(function(){
		updateEffeciency();
	});

	$("#absorbedPower").keyup(function(){
		updateEffeciency();
	});

	/*
	Added by Lee Watson
	Updates values in the Electricity KW/h select box based on currency selection
	*/

	$("#currency").change(function(){

		if($("#currency").prop("selectedIndex") == 1) {
			$("#electricityCosts").html('');
			for (i=0;i<electricityCostsValues.length;i++) {

				var num = electricityCostsValues[i];
				num = num * 10;
				num = num.toFixed(2);

				$('<option/>').val(num).html(num).appendTo('#electricityCosts');
				}
				$('#electricityCosts :nth-child(15)').prop('selected', true); //selects index

		} else {
			$("#electricityCosts").html('');
			for (i=0;i<electricityCostsValues.length;i++){
				$('<option/>').val(electricityCostsValues[i]).html(electricityCostsValues[i]).appendTo('#electricityCosts');
				}
				$('#electricityCosts :nth-child(15)').prop('selected', true); //selects index
		}
	
	});

	$("#slider").slider({ max: 25 ,min: 1, value: 5,slide: function( event, ui ) {
			unformatMoney($("#yearlyPowerSaving"));
			unformatMoney($("#yearlyPowerCost"));
			unformatMoney($("#newYearlyPowerCost"));
			unformatMoney($("#costSaving"));
			unformatMoney($("#costOfNewGearbox"));
			unformatMoney($("#costOfRepair"));
			
			if(ui.value == 1){
				$( "#years" ).text( ui.value+" year " );
			}
			else{
				$( "#years" ).text( ui.value+" years " );
			}
			
			if($("#yearlyPowerSaving").text() !="" && $("#costOfNewGearbox").text() != "" ){
				var yearlyPowerSaving = $("#yearlyPowerSaving").text();
				var costOfNewGearbox = $("#costOfNewGearbox").text();
				var years = ui.value;
				var saving = (years * yearlyPowerSaving) - costOfNewGearbox;
				var num = saving;
				num = isNaN(num) || num === '' || num === null ? 0.00 : num;
                                formattedNum = commaSeparateNumber(parseFloat(num).toFixed(2));
                                if($("#currency").prop("selectedIndex") == 0){
					num = "\u00A3 "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 1){
					num = "kr "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 2){
					num = "\u20AC "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 3){
					num = "$ "+formattedNum;
				}
				$( "#saving" ).text( " saving " + num) ;
			}
			formatMoney($("#yearlyPowerSaving"));
			formatMoney($("#yearlyPowerCost"));
			formatMoney($("#newYearlyPowerCost"));
			formatMoney($("#costSaving"));
			formatMoney($("#costOfNewGearbox"));
			formatMoney($("#costOfRepair"));
    }});
	$('#costOfRepairCheck').click(function() {
		unformatMoney($("#costOfRepair"));
		var $this = $(this);
		if ($this.is(':checked')) {
			if($("#type").prop("selectedIndex") != 0 && $("#centres").prop("selectedIndex") != 0 && $("#ratios").prop("selectedIndex") != 0){
			var selectedRatio = $("#ratios").prop("selectedIndex")-1;
			var selectedCentre = $("#centres").prop("selectedIndex")-1;
			if(selectedRatio <= 9){
				var costOfRepair = serviceCostsSingle[selectedCentre];
				var actualCostOfRepair = costOfRepair - (costOfRepair * 0.55);
				$("#costOfRepair").text(Math.round( actualCostOfRepair * currencyFactor * 100) / 100);
			}
			else if(selectedRatio > 9){
				var costOfRepair = serviceCostsDouble[selectedCentre];
				var actualCostOfRepair = costOfRepair - (costOfRepair * 0.55);
				$("#costOfRepair").text(Math.round( actualCostOfRepair * currencyFactor * 100) / 100);
			}
		}
		} else {
			$("#costOfRepair").text("");
		}
		formatMoney($("#costOfRepair"));
	});
	$("#currency").change(function(){
		updateCurrency();
	});
	$(document).tooltip();
}); 

function setlistdefaults() {
    $('#hoursPerDay').val(16);
    $('#daysPerWeek').val(5);
    $('#weeksPerYear').val(48);
    $('#electricityCosts').val(0.15);
}

function populateLists(){
	// populate motorPower dropdownlist
	for (i=0;i<motorPowerValues.length;i++){
	   $('<option/>').val(motorPowerValues[i]).html(motorPowerValues[i]).appendTo('#motorPower');
	}
	// populate motorSpeed dropdownlist
	for (i=0;i<motorSpeedValues.length;i++){
	   $('<option/>').val(motorSpeedValues[i]).html(motorSpeedValues[i]).appendTo('#motorSpeed');
	}
	// populate daysPerWeek dropdownlist
	for (i=0;i<daysPerWeekValues.length;i++){
	   $('<option/>').val(daysPerWeekValues[i]).html(daysPerWeekValues[i]).appendTo('#daysPerWeek');
	}
	// populate weeksPerYear dropdownlist
	for (i=0;i<weeksPerYearValues.length;i++){
	   $('<option/>').val(weeksPerYearValues[i]).html(weeksPerYearValues[i]).appendTo('#weeksPerYear');
	}
	// populate hoursPerDay dropdownlist
	for (i=0;i<hoursPerDayValues.length;i++){
	   $('<option/>').val(hoursPerDayValues[i]).html(hoursPerDayValues[i]).appendTo('#hoursPerDay');
	}
	// populate electricityCosts dropdownlist
	for (i=0;i<electricityCostsValues.length;i++){
	   $('<option/>').val(electricityCostsValues[i]).html(electricityCostsValues[i]).appendTo('#electricityCosts');
	}
	// populate currency dropdownlist
	for (i=0;i<currencyValues.length;i++){
	   $('<option/>').val(currencyValues[i]).html(currencyValues[i]).appendTo('#currency');
	}
	// populate type dropdownlist
	for (i=0;i<typeValues.length;i++){
	   $('<option/>').val(typeValues[i]).html(typeValues[i]).appendTo('#type');
	}
	// populate centers dropdownlist
	for (i=0;i<centresValues.length;i++){
	   $('<option/>').val(centresValues[i]).html(centresValues[i]).appendTo('#centres');
	}
	// populate ratios dropdownlist
	for (i=0;i<ratiosValues.length;i++){
	   $('<option/>').val(ratiosValues[i]).html(ratiosValues[i]).appendTo('#ratios');
	}
}

function updateEffeciency(){
        // clear down the Absorbed Power is blank warning
        $('#apWarning').empty();
        $('#absorbedPower').removeClass("requiredinput");
	unformatMoney($("#yearlyPowerSaving"));
	unformatMoney($("#yearlyPowerCost"));
	unformatMoney($("#newYearlyPowerCost"));
	unformatMoney($("#costSaving"));
	unformatMoney($("#costOfNewGearbox"));
	unformatMoney($("#costOfRepair"));
	
	if($("#type").prop("selectedIndex") != 0 && $("#centres").prop("selectedIndex") != 0 && $("#ratios").prop("selectedIndex") != 0){
		$("#newEffeciency").text("96%"); 
		var selectedRatio = $("#ratios").prop("selectedIndex")-1;
		var selectedCentre = $("#centres").prop("selectedIndex")-1;
		
		var currentDrive = $("#type option:selected").text() +","+ $("#centres option:selected").text() +","+ $("#ratios option:selected").text();
		$("#currentDrive").text(currentDrive);
		
		if($("#motorSpeed").val() == 1450){
			var efficiency = motor_1450_efficiency[selectedCentre][selectedRatio];
			var newProposedDrive = newDrives_1450[selectedCentre][selectedRatio];
			$("#efficiency").text(efficiency+"%");
			$("#proposedNewDrive").text(newProposedDrive);
			var motorModel = newProposedDrive.substring(0,3);
			var newMotorCost = costOfNewGearBox[motorModel];
			var actualCost = newMotorCost - (newMotorCost * 0.55);
			if($("#currency").prop("selectedIndex") == 1){
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100 * 1.2) / 100);
			} else if($("#currency").prop("selectedIndex") == 2) {
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100 * 1.26) / 100);
			} else {
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100) / 100);
			}
			
		}
		else if($("#motorSpeed").val() == 960){
			var efficiency = motor_960_efficiency[selectedCentre][selectedRatio];
			var newProposedDrive = newDrives_960[selectedCentre][selectedRatio];
			$("#efficiency").text(efficiency+"%");
			$("#proposedNewDrive").text(newProposedDrive);
			var motorModel = newProposedDrive.substring(0,3);
			var newMotorCost = costOfNewGearBox[motorModel];
			var actualCost = newMotorCost - (newMotorCost * 0.55);
			if($("#currency").prop("selectedIndex") == 1){
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100 * 1.2) / 100);
			} else if($("#currency").prop("selectedIndex") == 2) {
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100 * 1.26) / 100);
			} else {
				$("#costOfNewGearbox").text(Math.round( actualCost * currencyFactor *100) / 100);
			}
		}
		if($("#costOfRepairCheck").prop("checked")==true){
			if(selectedRatio <= 9){
				var costOfRepair = serviceCostsSingle[selectedCentre];
				var actualCostOfRepair = costOfRepair - (costOfRepair * 0.55);
				$("#costOfRepair").text(Math.round( actualCostOfRepair * currencyFactor *100) / 100);
			}
			else if(selectedRatio > 9){
				var costOfRepair = serviceCostsDouble[selectedCentre];
				var actualCostOfRepair = costOfRepair - (costOfRepair * 0.55);
				$("#costOfRepair").text(Math.round( actualCostOfRepair * currencyFactor * 100) / 100);
			}
		}
		
		
		if($("#motorSpeed").val() == 1450 || $("#motorSpeed").val() == 960){
			if($("#absorbedPower").val() != ""){
				if($("#efficiency").text() != "0%"){
					var powerRequired = $("#absorbedPower").val()*100/efficiency;
					var electricityCost = $("#electricityCosts").val();
					var hoursPerDay = $("#hoursPerDay").val();
					var daysPerWeek = $("#daysPerWeek").val();
					var weeksPerYear = $("#weeksPerYear").val();
					var daysPerYear = daysPerWeek * weeksPerYear;
					var yearlyPowerCost = powerRequired * hoursPerDay * daysPerYear * electricityCost * currencyFactor;
					$("#powerRequired").text(Math.round( powerRequired * 10 ) / 10);
					$("#yearlyPowerCost").text(Math.round(yearlyPowerCost));
				}
				var absorbedPower = $("#absorbedPower").val();
				var newEffeciency = $("#newEffeciency").text().replace("%","");
				var newPowerRequired = absorbedPower / (newEffeciency / 100);
				var electricityCost = $("#electricityCosts").val();
				var hoursPerDay = $("#hoursPerDay").val();
				var daysPerWeek = $("#daysPerWeek").val();
				var weeksPerYear = $("#weeksPerYear").val();
				var daysPerYear = daysPerWeek * weeksPerYear;
				var newYearlyPowerCost = newPowerRequired * hoursPerDay * daysPerYear * electricityCost * currencyFactor;
				var yearlyPowerSaving = parseInt($("#yearlyPowerCost").text()) - newYearlyPowerCost;
				var costOfNewGearbox = $("#costOfNewGearbox").text();
				var paybackPeriod = costOfNewGearbox / yearlyPowerSaving;
				$("#newPowerRequired").text(Math.round( newPowerRequired * 10 ) / 10);
				$("#newYearlyPowerCost").text(Math.round(newYearlyPowerCost ));
				$("#yearlyPowerSaving").text(Math.round(yearlyPowerSaving));
				$("#paybackPeriod").text(Math.round( paybackPeriod * 10 ) / 10);
				var yearlyPowerSaving = $("#yearlyPowerSaving").text();
				var costOfNewGearbox = $("#costOfNewGearbox").text();
				var years = $("#slider").slider("value");
				var saving = (years * yearlyPowerSaving) - costOfNewGearbox;
				var num = saving;
				num = isNaN(num) || num === '' || num === null ? 0.00 : num;
				var formattedNum = commaSeparateNumber(parseFloat(num).toFixed(2));
				if($("#currency").prop("selectedIndex") == 0){
					num = "\u00A3 "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 1){
					num = "kr "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 2){
					num = "\u20AC "+formattedNum;
				}
				else if($("#currency").prop("selectedIndex") == 3){
					num = "$ "+formattedNum;
				}
				$("#saving").text( " saving " + num);
				var efficiencySaving = Math.round( (newEffeciency - efficiency) * 10 ) / 10;
				var powerSaving = $("#powerRequired").text() - $("#newPowerRequired").text();
				var costSaving = $("#yearlyPowerCost").text() - $("#newYearlyPowerCost").text();
				$("#efficiencySaving").text(efficiencySaving+"%");
				$("#powerSaving").text(Math.round(powerSaving*10)/10);
				$("#costSaving").text(costSaving);
			}
			else{
				$("#powerRequired").text("");
				$("#yearlyPowerCost").text("");
				$("#newPowerRequired").text("");
				$("#newYearlyPowerCost").text("");
				$("#yearlyPowerSaving").text("");
				$("#paybackPeriod").text("");
				$("#saving").text("");
				$("#efficiencySaving").text("");
				$("#powerSaving").text("");
				$("#costSaving").text("");
                            html ="Please enter a value for Absorbed Power";
                            $('#apWarning').empty().append(html);
                            $("#absorbedPower").focus().addClass("requiredinput");

			}
		}
	}
	else{
		$("#efficiency").text("");
		$("#newEffeciency").text("");
		$("#powerRequired").text("");
		$("#yearlyPowerCost").text("");
		$("#newPowerRequired").text("");
		$("#newYearlyPowerCost").text("");
		$("#proposedNewDrive").text("");
		$("#costOfNewGearbox").text("");
		$("#yearlyPowerSaving").text("");
		$("#paybackPeriod").text("");
		$("#costOfRepair").text("");
		$("#saving").text("");
		$("#efficiencySaving").text("");
		$("#powerSaving").text("");
		$("#costSaving").text("");
		$("#currentDrive").text("");
	}	
	
	formatMoney($("#yearlyPowerSaving"));
	formatMoney($("#yearlyPowerCost"));
	formatMoney($("#newYearlyPowerCost"));
	formatMoney($("#costSaving"));
	formatMoney($("#costOfNewGearbox"));
	formatMoney($("#costOfRepair"));
}

function updateCurrency(){
	$.ajax({
		url: "getExchangeRate.php",
		type: 'GET',
		data: "to=" + $("#currency").val() ,
		success: function(data){
			currencyFactor = data;
			updateEffeciency();
		},
		error: function(data){
			alert("Error getting exchange rate");
		}
	});
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }      
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

function formatMoney(el) {
	if(el.text() != ""){
		var num = el.text();
		num = isNaN(num) || num === '' || num === null ? 0.00 : num;
		var formattedNum = commaSeparateNumber(parseFloat(num).toFixed(2));
		if($("#currency").prop("selectedIndex") == 0){
			el.text("\u00A3 "+formattedNum);
		}
		else if($("#currency").prop("selectedIndex") == 1){
			el.text("kr "+formattedNum);
		}
		else if($("#currency").prop("selectedIndex") == 2){
			el.text("\u20AC "+formattedNum);
		}
		else if($("#currency").prop("selectedIndex") == 3){
			el.text("$ "+formattedNum);
		}
	}
}
function unformatMoney(el){
	if(el.text() != ""){
		var txt = el.text();
		txt = txt.replace(" ","");
		txt = txt.replace(",","");
		txt = txt.replace("\u00A3","");
		txt = txt.replace("kr","");
		txt = txt.replace("\u20AC","");
		txt = txt.replace("$","");
		el.text(txt);
	}
}