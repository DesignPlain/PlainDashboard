import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxAgentGitIntegrationSettingsGithubSettings {
  // The GitHub repository URI related to the agent.
  repositoryUri?: string;

  // The branch of the GitHub repository tracked for this agent.
  trackingBranch?: string;

  /*
The access token used to authenticate the access to the GitHub repository.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  accessToken?: string;

  // A list of branches configured to be used from Dialogflow.
  branches?: Array<string>;

  // The unique repository display name for the GitHub repository.
  displayName?: string;
}

export function diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The unique repository display name for the GitHub repository.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repositoryUri',
      'The GitHub repository URI related to the agent.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'trackingBranch',
      'The branch of the GitHub repository tracked for this agent.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessToken',
      'The access token used to authenticate the access to the GitHub repository.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'branches',
      'A list of branches configured to be used from Dialogflow.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
