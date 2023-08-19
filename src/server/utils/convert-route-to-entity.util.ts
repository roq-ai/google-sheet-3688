const mapping: Record<string, string> = {
  invites: 'invite',
  organizations: 'organization',
  profiles: 'profile',
  roles: 'role',
  users: 'user',
  'user-roles': 'user_role',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
