import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxAgentGitIntegrationSettingsGithubSettings,
  diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes,
} from './diagflow_CxAgentGitIntegrationSettingsGithubSettings';

export interface diagflow_CxAgentGitIntegrationSettings {
  /*
Settings of integration with GitHub.
Structure is documented below.
*/
  githubSettings?: diagflow_CxAgentGitIntegrationSettingsGithubSettings;
}

export function diagflow_CxAgentGitIntegrationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'githubSettings',
      'Settings of integration with GitHub.\nStructure is documented below.',
      () => diagflow_CxAgentGitIntegrationSettingsGithubSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
