export interface ConnectionGitlabConfigReadAuthorizerCredential {
  /*
(Output)
Output only. The username associated to this token.
*/
  Username?: string;

  // Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/-/secrets/-/versions/-`.
  UserTokenSecretVersion?: string;
}
