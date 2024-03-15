export interface UserSqlServerUserDetail {
  // If the user has been disabled.
  Disabled?: boolean;

  // The server roles for this user in the database.
  ServerRoles?: Array<string>;
}
