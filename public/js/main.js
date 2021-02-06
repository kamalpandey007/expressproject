const cityName=document.getElementById('cityname');
const submitBtn=document.getElementById('citysubmit');
const city_name=document.getElementById('city_name');
const temp_name=document.getElementById('temp');


const getInfo = async(e) => {
    e.preventDefault();
    let cityval=cityName.value;
    alert(cityval);
    if(cityval==="")
    {
       city_name.innerText='Please write the name before';
    }
    else
    {
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=9fb2c8c419689cdefe5c8dc729b8c5a1`;
        
        const response=await fetch(url);
        const data= await response.json();
        const arrData=[data];
        temp_name.innerText=arrData[0].main.temp;
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;


        //console.log(data);
        } catch{
            city_name.innerText='Please enter name properly';
        }
    }
}

submitBtn.addEventListener('click',getInfo);