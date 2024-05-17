import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxAgentGitIntegrationSettingsGithubSettings,
  Diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes,
} from "./Diagflow_CxAgentGitIntegrationSettingsGithubSettings";

export interface Diagflow_CxAgentGitIntegrationSettings {
  /*
Settings of integration with GitHub.
Structure is documented below.
*/
  GithubSettings?: Diagflow_CxAgentGitIntegrationSettingsGithubSettings;
}

export function Diagflow_CxAgentGitIntegrationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GithubSettings",
      "Settings of integration with GitHub.\nStructure is documented below.",
      Diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
