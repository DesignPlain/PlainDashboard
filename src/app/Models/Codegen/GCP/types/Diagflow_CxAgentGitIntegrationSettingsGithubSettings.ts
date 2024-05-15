import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxAgentGitIntegrationSettingsGithubSettings {
  /*
The access token used to authenticate the access to the GitHub repository.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  AccessToken?: string;

  // A list of branches configured to be used from Dialogflow.
  Branches?: Array<string>;

  // The unique repository display name for the GitHub repository.
  DisplayName?: string;

  // The GitHub repository URI related to the agent.
  RepositoryUri?: string;

  // The branch of the GitHub repository tracked for this agent.
  TrackingBranch?: string;
}

export function Diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AccessToken",
      "The access token used to authenticate the access to the GitHub repository.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Branches",
      "A list of branches configured to be used from Dialogflow.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The unique repository display name for the GitHub repository.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepositoryUri",
      "The GitHub repository URI related to the agent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TrackingBranch",
      "The branch of the GitHub repository tracked for this agent.",
      [],
      false,
      false,
    ),
  ];
}
