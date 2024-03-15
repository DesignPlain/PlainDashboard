export interface ClusterInitialUser {
  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The database username.
  User?: string;
}
