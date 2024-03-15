export interface ConnectionProfileAlloydbSettingsInitialUser {
  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  /*
(Output)
Output only. Indicates if the initialUser.password field has been set.
*/
  PasswordSet?: boolean;

  // The database username.
  User?: string;
}
