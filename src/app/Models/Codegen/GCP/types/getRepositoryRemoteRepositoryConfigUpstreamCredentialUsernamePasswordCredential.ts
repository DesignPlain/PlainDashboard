export interface getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential {
  /*
The Secret Manager key version that holds the password to access the
remote repository. Must be in the format of
'projects/{project}/secrets/{secret}/versions/{version}'.
*/
  PasswordSecretVersion?: string;

  // The username to access the remote repository.
  Username?: string;
}
