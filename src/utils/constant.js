const PeopleManagementURL = {
    USER_DETAILS: "https://dummyjson.com/users"
};
const UserCRUDportal ={
    CRUD_USER_DETAILS: "https://648551caa795d24810b6d720.mockapi.io/users"
}
const LocationApi ={
    LOCATION:"https://ipapi.co/json"
}
const Regex ={
    ONLY_CHAR: /^[A-Za-z\s]+$/g,
    ONLY_NUMBER: /^[0-9]{10,}$/g,
    ALPHA_NUMERIC: /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9@$!%*#?&]+)$/g,
    EMAIL:/^[A-Za-z0-9]{1}[a-zA-Z0-9+_.-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gi
}

export {PeopleManagementURL,
                 UserCRUDportal,
                 Regex
                }