export interface CxAgentGitIntegrationSettingsGithubSettings {
  // A list of branches configured to be used from Dialogflow.
  Branches?: Array<string>;

  // The unique repository display name for the GitHub repository.
  DisplayName?: string;

  // The GitHub repository URI related to the agent.
  RepositoryUri?: string;

  // The branch of the GitHub repository tracked for this agent.
  TrackingBranch?: string;

  /*
The access token used to authenticate the access to the GitHub repository.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  AccessToken?: string;
}
