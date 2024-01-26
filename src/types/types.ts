export interface CreateUserRequestBody {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active?: Number;
}

export interface CreateWorkersRequestBody {
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active?: Number;
}

export interface CreateAppointmentsRequestBody {
  user_id: number;
  tatuate_workers_id: number;
  appointment_date: Date;
}

export interface LoginUserRequestBody {
  email: string;
  password: string;
}

export interface TokenData {
  userId: string;
  userRoles: string[];
}
