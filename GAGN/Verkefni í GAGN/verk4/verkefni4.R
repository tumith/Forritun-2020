# install.packages("expss")
library(expss)

summa <- summary(Copy_of_Corona_Virus_Stats[1])


# --------- Data ------------- 

RandT <- cro(Copy_of_Corona_Virus_Stats[1], Copy_of_Corona_Virus_Stats[2])
RandT
# ---- Or / eða ------
Copy_of_Corona_Virus_Stats[1:2]

# ----------------------------


# ----------- Liður 1 í VERKEFNI 4 b -----------------------------------------------------------------------

# ----- Leið til að plota með expss -------
with(Copy_of_Corona_Virus_Stats,
     barplot(
       table(Copy_of_Corona_Virus_Stats[1], Copy_of_Corona_Virus_Stats[2]),
       beside = TRUE,
       legend = TRUE)
     )

sum_tablatureT <- Copy_of_Corona_Virus_Stats[2] / 100

differance <- sum_tablatureT < Copy_of_Corona_Virus_Stats[2]
table(sum_tablatureT, Copy_of_Corona_Virus_Stats[2])

# -----------------------------------------


# ----- Leið til að plota án expss --------
#              Not working

# x <- Copy_of_Corona_Virus_Stats[1]
# y <- Copy_of_Corona_Virus_Stats[2]
# d <- read.table("data.txt", header = T)

# plot(d$y~d$x, ann = FALSE, type = "n")

# lines(d$y~d$x, lwd = 2)

# title("Data", xlab = "X", ylab = "Y")

# -----------------------------------------


# --------------------------------------------------------------------------------------------------------




# ----------- Liður 2 í VERKEFNI 4 b -----------------------------------------------------------------------
#         Ekki búið

sum_tablatureD <- Copy_of_Corona_Virus_Stats[5] / 100
sum_tablatureR <- Copy_of_Corona_Virus_Stats[8] / 100

sum_tablatureD
sum_tablatureR

# (print_x <- table(sum_tablatureD,sum_tablatureR))
# print(print_x)

original_numbers <- cat(sprintf("<set Total Deaths = \"%s\", Recoveries = \"%s\" ></set>\n", Copy_of_Corona_Virus_Stats$`Total Deaths`, Copy_of_Corona_Virus_Stats$Recoveries))

new_numbers_divided <- cat(sprintf("<set New Total Deaths = \"%f\", New Recoveries = \"%f\" ></set>\n", sum_tablatureD$`Total Deaths`, sum_tablatureR$Recoveries))

total_Deaths <- cat(sprintf("<set Total Deaths = \"%s\", New Total Deaths = \"%s\" ></set>\n", Copy_of_Corona_Virus_Stats$`Total Deaths`, sum_tablatureD$`Total Deaths`))

recoveries <- cat(sprintf("<set Recoveries = \"%s\", New Recoveries = \"%s\" ></set>\n", Copy_of_Corona_Virus_Stats$Recoveries, sum_tablatureR$Recoveries))

Copy_of_Corona_Virus_Stats[1:2]


# --------------------------------------------------------------------------------------------------------


# ----------- prints -----------------------------------------------------------------------

summa
RandT
sum_tablatureT
differance
sum_tablatureD
sum_tablatureR
original_numbers
new_numbers_dividing

# --------------------------------------------------------------------------------------------------------


# ----------- Removes -----------------------------------------------------------------------


remove(x)
remove(y)
