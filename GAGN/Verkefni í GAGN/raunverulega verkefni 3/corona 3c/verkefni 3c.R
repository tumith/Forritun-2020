# covid_19_clean_complete comes from "https://www.kaggle.com/imdevskp/corona-virus-report"

# --  bara ef þörf er á að downloada ------------

install.packages("expss")

# -----------------------------------------------


library(expss)

summary(covid_19_clean_complete)

cro(covid_19_clean_complete[2])

cat(sprintf("country = \"%s\" , 
            DATE = \"%s\" , 
            Confirmed = \"%s\" , 
            Total Deaths = \"%s\" , 
            Recoveries = \"%s\" \n \n", 
            covid_19_clean_complete$`Country/Region`, 
            covid_19_clean_complete$Date,
            covid_19_clean_complete$Confirmed,
            covid_19_clean_complete$Deaths, 
            covid_19_clean_complete$Recovered
            )
    )

