import Iuser, { User } from '../../Interfaces/db/IUser';

export const mockUserComplete: Iuser = {
    id: 1,
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // senha: secret_admin    
    username: 'Admin',
    role: 'admin',
}

export const mockUser: User = {
    id: 1,
    email: mockUserComplete.email,
    username: mockUserComplete.username,
};

export const loginUser = {
    email: mockUserComplete.email,
    password: mockUserComplete.password,
};
