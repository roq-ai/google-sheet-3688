import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  status: string;
  invited_by?: string;
  invited_to?: string;
  created_at?: any;
  updated_at?: any;

  user_invite_invited_byTouser?: UserInterface;
  user_invite_invited_toTouser?: UserInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  invited_by?: string;
  invited_to?: string;
}
