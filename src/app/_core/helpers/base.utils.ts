export function constructAll(list, model) {
  return list.map((item) => {
    return new model(item);
  });
}

export function bool(bool_str) {
  if (bool_str === 'true') { return true; } else if (bool_str === 'false') {
    return false;
  }
  return null;
}


export function getERROR(err) {
  if (err['_body']) {
    return JSON.parse(err['_body'])['message'];
  } else if (err['error'] ) {
    return err['error']['message'];
  } else if (err && err['error'][0]['message']) {
    return err['error'][0]['message'];
  } else if(err['message']){
    return err['message'];
  }else {
    return 'Some Server Error Occured!';
  }
}

export function mapProp(list, prop) {
  return list.map((item) => {
    return item[prop];
  });
}

export function getFromList(list, prop, value) {
  return list.filter((item) => {
    return item[prop] === value;
  });
}

export function removeFromList(list, prop, value) {
  return list.filter((item) => {
    return item[prop] !== value;
  });
}

export function replaceInList(list, prop, newItem) {
  return list.map((item) => {
    console.log(item, newItem);
    if (item[prop] === newItem[prop]) {
      return newItem;
    } else {
      return item;
    }
  });
}
