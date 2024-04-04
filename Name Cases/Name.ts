let personName :string = '';

let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase();
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')  