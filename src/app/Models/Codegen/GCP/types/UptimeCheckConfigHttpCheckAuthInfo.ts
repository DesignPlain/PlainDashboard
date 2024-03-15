export interface UptimeCheckConfigHttpCheckAuthInfo {
  // The username to authenticate.
  Username?: string;

  /*
The password to authenticate.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;
}
