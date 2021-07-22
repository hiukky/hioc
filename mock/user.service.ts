type User = {
  id: number
  name: string
  email: string
}

const USERS: User[] = [
  { id: 1, name: 'Foo', email: 'foo@email.com' },
  { id: 2, name: 'Bar', email: 'bar@email.com' },
]

export class UserService {
  find(id: number): User {
    return USERS.find(user => user.id === id)
  }
}
