export interface Users {
  id?: string;
  username?: string;
  displayName?: string;
}

export interface workSpaces {
  name?: string;
  description?: string;
  ownerId?: string;
}

export interface Todos {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  userId?: string;
}
