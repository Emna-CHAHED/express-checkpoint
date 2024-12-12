const path = require('path');

const date = (req, res, next) => {
    let currentDate = new Date();   
    let day = currentDate.getDay();  
    let hour = currentDate.getHours();  

    if (!(hour >= 9 && hour <= 17) || (day === 0 || day === 6)) {
        const filePath = path.join(__dirname, '../public/', 'outOff.html');
        res.sendFile(filePath);  
        return;
    }
    
    next();  
}

module.exports = date;