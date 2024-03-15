export interface RepositoryGitRemoteSettingsSshAuthenticationConfig {
  // Content of a public SSH key to verify an identity of a remote Git host.
  HostPublicKey?: string;

  // The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/-/secrets/-/versions/-.
  UserPrivateKeySecretVersion?: string;
}
