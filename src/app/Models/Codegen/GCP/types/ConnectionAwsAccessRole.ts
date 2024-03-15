export interface ConnectionAwsAccessRole {
  // The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  IamRoleId?: string;

  /*
(Output)
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.
*/
  Identity?: string;
}
