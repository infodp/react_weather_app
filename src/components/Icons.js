const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='icons/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            icon='icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='icons/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='icons/snowy.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            icon='icons/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            icon='icons/fog.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            icon='icons/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            icon='icons/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            icon='icons/clear-day.svg'
            console.log('LIMPIO');    
    }
  return icon
}

export default Icons