export function lastMonthStart(type=null) {
    var lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setDate(lastMonthDate.getDate() - 1)
    lastMonthDate.setDate(1);
    lastMonthDate.setHours(0,0,0,0);
    if (type == 'iso') {
        return lastMonthDate.toISOString();
    }
    return lastMonthDate;
}

export function lastMonthEnd(type=null) {
    var lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setDate(lastMonthDate.getDate() - 1)
    lastMonthDate.setHours(0,0,0,0);
    if (type == 'iso') {
        return lastMonthDate.toISOString();
    }
    return lastMonthDate;
}


export function monthStart(type=null) {
    var monthDate = new Date();
    monthDate.setDate(1);
    monthDate.setHours(0,0,0,0);
    if (type == 'iso') {
        return monthDate.toISOString();
    }
    return monthDate;
}

export function currentDate(type=null) {
    var currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    if (type == 'iso') {
        return currentDate.toISOString();
    }
    return currentDate;
}

export function yesterdayDate(type=null) {
    var yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    yesterdayDate.setHours(0,0,0,0);
    if (type == 'iso') {
        return yesterdayDate.toISOString();
    }
    return yesterdayDate;
}