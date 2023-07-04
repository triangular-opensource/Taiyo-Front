export function emailValidation(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export function phoneValidation(phone) {
    return String(phone)
        .toLowerCase()
        .match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
}
export function gstValidation(gst) {
    let regTest = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(
        gst
    );
    if (regTest) {
        let a = 65,
            b = 55,
            c = 36;
        return Array["from"](gst).reduce((i, j, k, g) => {
            var p;
            p =
                (p =
                    (j.charCodeAt(0) < a ? parseInt(j) : j.charCodeAt(0) - b) *
                    ((k % 2) + 1)) > c
                    ? 1 + (p - c)
                    : p;
            return k < 14
                ? i + p
                : j ===
                      ((c = c - (i % c)) < 10 ? c : String.fromCharCode(c + b));
        }, 0);
    }
    return regTest;
}

export function passwordValidate(password) 
{
    return String(password).match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    );
}

export function pincodeValidate(pincode) 
{

    return String(pincode).match(/^[1-9][0-9]{5}$/);
}
