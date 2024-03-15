export interface getTriggerSourceToBuild {
  /*
The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]
*/
  RepoType?: string;

  /*
The qualified resource name of the Repo API repository.
Either uri or repository can be specified and is required.
*/
  Repository?: string;

  // The URI of the repo.
  Uri?: string;

  /*
The full resource name of the bitbucket server config.
Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
*/
  BitbucketServerConfig?: string;

  /*
The full resource name of the github enterprise config.
Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.
*/
  GithubEnterpriseConfig?: string;

  // The branch or tag to use. Must start with "refs/" (required).
  Ref?: string;
}
