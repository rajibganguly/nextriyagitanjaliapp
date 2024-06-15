//import { NewUser } from "../interfaces";
// import users from "./db/users.json"


// console.log('NO Need', users)

// /** Dummy user data. */
export type NewUser = {
    id: number,
    role_type: string,
    registered_mobile: number,
    registered_email?: string,
    created_at: string
  };
