export const validate = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
        case "nombre":
        case "apellido":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[a-z]/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            }
            return {message: "", validated: true};

        case "email":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return {message: "Invalid e-mail format", validated: false};
            }
            return {message: "", validated: true};

        case "password":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[\d()+-]/g.test(data)) {
                return {message: "Invalid password format", validated: false};
            }
            return {message: "", validated: true};

        case "address":
        case "direccion":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[a-z]/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            }
            return {message: "", validated: true};

        case "city":
        case "ciudad":
        case "region":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[a-z]/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            }
                return {message: "", validated: true};

        case "zip":
        case "zipcode":
        case "codigo postal":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            }
                return {message: "", validated: true};

        case "phone":
        case "tfno":
        case "telefono":
        case "phonenumber":
            if (data === "" && required === true) {
                return {message: "Please fill the field", validated: false};
            } else if (!/[a-z]|[0-9]/gi.test(data)) {
                return {message: "Please fill with a valid text", validated: false};
            }
            return {message: "", validated: true};

        case "dni":
        case "document":
        case "nif":
            break;

        default:
            console.log("Fielt not recognized");
}
};