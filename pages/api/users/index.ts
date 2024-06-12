import { NextApiRequest, NextApiResponse } from 'next';
import { UsersData } from "./../../../utils/users";
import { NewUser } from "../../../interfaces";
import usersAll from "./../../../utils/db/users.json"

// Dummy database array to simulate user storage
let users: NewUser[] = usersAll;



// Function to handle POST requests for user registration
const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  
    let responseUsers = await fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('2121', responseUsers)
   if (req.method === 'POST') {
    const { role_type, registered_mobile, registered_email } = req.body;

    // Validate the required fields
    if (!role_type || !registered_mobile || !registered_email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new user object
    const newUser = {
      id: users.length + 1, // Auto-incrementing ID
      role_type,
      registered_mobile,
      registered_email,
      created_at: new Date().toISOString()
    };

    // Add the new user to the users array
    users.push(newUser);
    const newUserarray = [];
    if(await responseUsers) {
      newUserarray.push(newUser)
      newUserarray.push(responseUsers[0])
    }
    

    // Return the newly created user object as a response
    return res.status(201).json(newUser);
  } else {
    // If not a POST request, return a 405 Method Not Allowed response
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default registerUser;
