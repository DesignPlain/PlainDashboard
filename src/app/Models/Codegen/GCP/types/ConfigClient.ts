import { ConfigClientPermissions } from "./ConfigClientPermissions";

export interface ConfigClient {
  /*
(Output)
API key that can be used when making requests for this project.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ApiKey?: string;

  /*
(Output)
Firebase subdomain.
*/
  FirebaseSubdomain?: string;

  /*
Configuration related to restricting a user's ability to affect their account.
Structure is documented below.
*/
  Permissions?: ConfigClientPermissions;
}
