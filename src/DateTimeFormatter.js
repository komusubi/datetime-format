///
/// Convert Date objects into a string according to a specified format
///

function dateToString(format, date = new Date()) {
    const LENGTH = format.length;
    let i = 0;
    let ch = '';
    let output = '';
    
    while (i < LENGTH) {
	ch = format.charAt(i);
	
	if (ch == '%' && ++i < LENGTH) {
	    switch (format.charAt(i)) {
	    case 'A':
		output += _getWeekdayLong(date.getDay());
		break;
	    case 'B':
		output += _getMonthLong(date.getMonth());
                break;
	    case 'D':
		output += date.getMonth().toString().padStart(2, '0')
		    + '/' + date.getDate().toString().padStart(2, '0')
		    + '/' + date.getFullYear().toString().slice(-2);
		break;
	    case 'F':
		output += date.getFullYear()
		    + '-' + date.getMonth().toString().padStart(2, '0')
		    + '-' + date.getDate().toString().padStart(2, '0');
		break;
	    case 'H':
		output += date.getHours().toString().padStart(2, '0');
		break;
	    case 'I':
		output += _get12Hour(date.getHours()).toString().padStart(2, '0');
		break;
	    case 'M':
		output += date.getMinutes().toString().padStart(2, '0');
		break;
	    case 'P':
		output =+ (date.getHours() < 12) ? 'am' : 'pm';
		break;
	    case 'R':
		output += date.getHours().toString().padStart(2, '0')
		    + ':' + date.getMinutes().toString().padStart(2, '0');
		break;
	    case 'S':
		output += date.getSeconds().toString().padStart(2, '0');
		break;
	    case 'T':
		output += date.getHours().toString().padStart(2, '0')
		    + ':' + date.getMinutes().toString().padStart(2, '0') 
		    + ':' + date.getSeconds().toString().padStart(2, '0');
		break;
	    case 'X':
		output += date.toLocaleTimeString();
		break;
	    case 'Y':
		output += date.getFullYear();
		break;
	    case 'a':
		output += _getWeekdayShort(date.getDay())
		break;
	    case 'b':
		output += _getMonthShort(date.getMonth());
                break;
	    case 'c':
		output += date.toLocaleString();
                break;
	    case 'd':
		output += date.getDate().toString().padStart(2, '0');
		break;
	    case 'e':
		//output += date.getDate().toString().padStart(2, ' ');
		output += date.getDate();
		break;
	    case 'k':
		output += date.getHours();
		break;
	    case 'l':
		output += _get12Hour(date.getHours())
		break;
	    case 'm':
		output += date.getMonth().toString().padStart(2, '0');
		break;
	    case 'p':
		output =+ (date.getHours() < 12) ? 'AM' : 'PM';
		break;
	    case 'r':
		const MERIDIEM = (date.getHours() < 12) ? 'AM' : 'PM'
		output += _get12Hour(date.getHours()).toString().padStart(2, '0')
		    + ':' + date.getMinutes().toString().padStart(2, '0')
		    + ':' + date.getSeconds().toString().padStart(2, '0')
		    + ' ' + MERIDIEM;
		break;
	    case 's':
		output += date.getTime();
		break;
	    case 'w':
		output += date.getDay();
		break;
	    case 'x':
		output += date.toLocaleDateString();
		break;
	    case 'y':
		output += date.getFullYear().toString().slice(-2);
		break;
	    default:
		output += '%' + format.charAt(i);
		break;
	    }
	} else {
	    output += ch;
	}

	i++;
    }

    return output;
}

function _getWeekdayLong(dayAsInt) {
    switch(dayAsInt) {
    case 0:
	return 'Sunday';

    case 1:
	return 'Monday';

    case 2:
	return 'Tuesday';

    case 3:
	return 'Wednesday';

    case 4:
	return 'Thursday';

    case 5:
	return 'Friday';

    case 6:
	return 'Saturday';

    default:
	throw 'Illegal value for dayAsInt.' 
    }
}

function _getWeekdayShort(dayAsInt) {
    switch(dayAsInt) {
    case 0:
	return 'Sun';

    case 1:
	return 'Mon';

    case 2:
	return 'Tue';

    case 3:
	return 'Wed';

    case 4:
	return 'Thu';

    case 5:
	return 'Fri';

    case 6:
	return 'Sat';

    default:
	throw 'Illegal value for dayAsInt.' 
    }
}

function _getMonthLong(monthAsInt) {
    switch(monthAsInt) {
    case 0:
	return 'January';
        
    case 1:
        return 'February';
        
    case 2:
        return 'March';
        
    case 3:
        return 'April';
        
    case 4:
        return 'May';
        
    case 5:
        return 'June';
        
    case 6:
        return 'July';
        
    case 7:
        return 'August';
                          
    case 8:
        return 'September';
           
    case 9:
        return 'October';
                          
    case 10:
        return 'November';
        
    case 11:
        return 'December';

    default:
	throw 'Illegal value for monthAsInt.';
    }
}

function _getMonthShort(monthAsInt) {
    switch(monthAsInt) {
    case 0:
	return 'Jan';
        
    case 1:
        return 'Feb';
        
    case 2:
        return 'Mar';
        
    case 3:
        return 'Apr';
        
    case 4:
        return 'May';
        
    case 5:
        return 'Jun';
        
    case 6:
        return 'Jul';
        
    case 7:
        return 'Aug';
                          
    case 8:
        return 'Sep';
           
    case 9:
        return 'Oct';
                          
    case 10:
        return 'Nov';
        
    case 11:
        return 'Dec';

    default:
	throw 'Illegal value for monthAsInt.';
    }
}

function _get12Hour(hourAsInt) {
    if (hourAsInt > 12) {
	return hourAsInt - 12;
    }

    if (hourAsInt == 0) {
	return 12;
    }

    return hourAsInt;
}
