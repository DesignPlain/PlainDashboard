export interface ConnectionGithubConfigAuthorizerCredential {
  // A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/-/secrets/-/versions/-`.
  OauthTokenSecretVersion?: string;

  /*
(Output)
Output only. The username associated to this token.
*/
  Username?: string;
}
