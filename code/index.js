const time = document.getElementById("time")
const day = document.getElementById("today")
const kal = document.getElementById("kal")
const parso = document.getElementById("parso")
const narso = document.getElementById("narso")
const karso = document.getElementById("karso")
const tarso = document.getElementById("tarso")
const sarso = document.getElementById("sarso")
const city = document.getElementById("location")
const temp = document.getElementById("temperature")
const wind = document.getElementById("windspeed")
const wind_direction = document.getElementById("wind_dir")
const day_night = document.getElementById("pahar")
const temp1 = document.getElementById("temp1")
const temp2 = document.getElementById("temp2")
const temp3 = document.getElementById("temp3")
const temp4 = document.getElementById("temp4")
const temp5 = document.getElementById("temp5")
const temp6 = document.getElementById("temp6")
const con1 = document.getElementById("con1")
const con2 = document.getElementById("con2")
const con3 = document.getElementById("con3")
const con4 = document.getElementById("con4")
const con5 = document.getElementById("con5")
const con6 = document.getElementById("con6")
const submitBtn = document.getElementById("submit")
const city_name = document.getElementById("city_name")

let cond = document.getElementById("weather_condition")
let cond1 = document.getElementById("cond1")
let cond2 = document.getElementById("cond2")
let cond3 = document.getElementById("cond3")
let cond4 = document.getElementById("cond4")
let cond5 = document.getElementById("cond5")
let cond6 = document.getElementById("cond6")

let currenttime = new Date();
const number_day = currenttime.getDay()

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";
weekday[8] = "Monday";
weekday[9] = "Tuesday";
weekday[10] = "Wednesday";
weekday[11] = "Thursday";
weekday[12] = "Friday";
weekday[13] = "Saturday";
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const getcurrent_datemonth = () => {
    const now_day = weekday[number_day]
    const now_date = currenttime.getDate()  
    const now_month = months[currenttime.getMonth()]
    const date_month = `${now_day} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${now_date}  ${now_month}`
    return date_month
}
day.innerHTML =  getcurrent_datemonth()

const get_ahead_day_1 = () => {
    const now_day = weekday[number_day+1]
    return now_day
}
kal.innerHTML = get_ahead_day_1()

const get_ahead_day_2 = () => {
    const now_day2 = weekday[number_day+2]
    return now_day2
}
parso.innerHTML = get_ahead_day_2()

const get_ahead_day_3 = () => {
    const now_day3 = weekday[number_day+3]
    return now_day3
}
narso.innerHTML = get_ahead_day_3()

const get_ahead_day_4 = () => {
    const now_day = weekday[number_day+4]
    return now_day
}
karso.innerHTML = get_ahead_day_4()

const get_ahead_day_5 = () => {
    const now_day = weekday[number_day+5]
    return now_day
}
tarso.innerHTML = get_ahead_day_5()

const get_ahead_day_6 = () => {
    const now_day = weekday[number_day+6]
    return now_day
}
sarso.innerHTML = get_ahead_day_6()



const getcurrent_time = () => {
    const hours = currenttime.getHours() 
    const minute = currenttime.getMinutes()
    hour = hours
    min = minute
    med = "A.M"
    if (hour>11) {
        med = "PM" ;
    }
    if(hours>12) {
        hour = hours-12 ;
    }
    else{
        med = "AM" ;
    }
    if(minute<10){
        min = "0" + minute ;
    }
    else{
        min = minute ;
    }
    
    time_now = hour + ":" + min + " "+ med
    time.innerHTML = time_now

}
submitBtn.addEventListener("click", getcurrent_time)


const getdata =  async (event) => {
    event.preventDefault()
    let city_val = city_name.value
    if (city_val == "") {
        alert("Please Enter City Name Properly")
    } else {
        try {
            let url_1 = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=5e0194c2899d068b43354f4c67db1980`
            let api_1 = await fetch(url_1)
            real_data_1 = await api_1.json()
            const current_city = "&nbsp " + real_data_1.name + "," + " " + real_data_1.sys.country
            const current_temp = Math.floor(real_data_1.main.temp - 273)  + "°C"
            const speed = real_data_1.wind.speed + "KM/H"
            const dir = real_data_1.wind.deg + "°" +"N"
            city.innerHTML = current_city
            temp.innerHTML = current_temp
            wind.innerHTML = speed
            wind_direction.innerHTML = dir
            conditions = real_data_1.weather[0].main
            if (conditions == 'Clouds') {
                cond.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(conditions == 'Rain'){
                cond.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(conditions == 'Clear'){
                cond.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }
            
            let url_2 = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city_val}&appid=5e0194c2899d068b43354f4c67db1980`
            let api_2 = await fetch(url_2)
            real_data_2 = await api_2.json()
            temp_1 = real_data_2.list[15].main.temp
            temp_2 = real_data_2.list[23].main.temp
            temp_3 = real_data_2.list[31].main.temp
            temp_4 = real_data_2.list[39].main.temp
            temp_5 = real_data_2.list[34].main.temp
            temp_6 = real_data_2.list[24].main.temp
            
            temp1.innerHTML = Math.floor(temp_1 - 273) + "°C"
            temp2.innerHTML = Math.floor(temp_2 - 273) + "°C"
            temp3.innerHTML = Math.floor(temp_3 - 273) + "°C"
            temp4.innerHTML = Math.floor(temp_4 - 273) + "°C"
            temp5.innerHTML = Math.floor(temp_5 - 273) + "°C"
            temp6.innerHTML = Math.floor(temp_6 - 273) + "°C"
            
            con_1 = real_data_2.list[15].weather[0].main
            con_2 = real_data_2.list[23].weather[0].main
            con_3 = real_data_2.list[31].weather[0].main
            con_4 = real_data_2.list[39].weather[0].main
            con_5 = "Clear"
            con_6 = "Clouds"

            con1.innerHTML = con_1
            con2.innerHTML = con_2
            con3.innerHTML = con_3
            con4.innerHTML = con_4
            con5.innerHTML = "Clear"
            con6.innerHTML = "Clouds"
            
            if (con_1 == 'Clouds') {
                cond1.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_1 == 'Rain'){
                cond1.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_1 == 'Clear'){
                cond1.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond1.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }

            if (con_2 == 'Clouds') {
                cond2.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_2 == 'Rain'){
                cond2.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_2 == 'Clear'){
                cond2.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond2.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }
            
            if (con_3 == 'Clouds') {
                cond3.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_3 == 'Rain'){
                cond3.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_3 == 'Clear'){
                cond3.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond3.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }
            
            if (con_4 == 'Clouds') {
                cond4.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_4 == 'Rain'){
                cond4.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_4 == 'Clear'){
                cond4.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond4.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }

            if (con_5 == 'Clouds') {
                cond5.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_5 == 'Rain'){
                cond5.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_5 == 'Clear'){
                cond5.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond5.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }

            if (con_6 == 'Clouds') {
                cond6.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`; 
                }
            else if(con_6 == 'Rain'){
                cond6.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
            }
            else if(con_6 == 'Clear'){
                cond6.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
            }    
             else {
               cond6.innerHTML = `<i class="fas fa-sun fa-4x"></i>` ;
            }
        
        }

              catch {
                  city_name.innerHTML = "Please enter city name properly"
              }
    }
    }

submitBtn.addEventListener("click", getdata)

const is_day = () => {
    const hours = currenttime.getHours()
    if (hours>18) {
        day_night.innerHTML = "Night"
    } else {
        day_night.innerHTML = "Day"
    }
}
submitBtn.addEventListener("click", is_day)
