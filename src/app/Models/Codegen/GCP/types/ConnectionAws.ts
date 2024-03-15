import { ConnectionAwsAccessRole } from "./ConnectionAwsAccessRole";

export interface ConnectionAws {
  /*
Authentication using Google owned service account to assume into customer's AWS IAM Role.
Structure is documented below.
*/
  AccessRole?: ConnectionAwsAccessRole;
}
