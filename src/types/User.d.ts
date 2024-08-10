

export interface User extends Document {
    username: string,
    email: string;
    password: string;
    spaces: Schema.Types.ObjectId[]
  }