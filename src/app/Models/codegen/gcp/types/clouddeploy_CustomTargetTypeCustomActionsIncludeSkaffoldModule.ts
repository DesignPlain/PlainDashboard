import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit,
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes,
} from './clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit';
import {
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage,
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage_GetTypes,
} from './clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage';

export interface clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule {
  // The Skaffold Config modules to use from the specified source.
  configs?: Array<string>;

  /*
Remote git repository containing the Skaffold Config modules.
Structure is documented below.
*/
  git?: clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit;

  /*
Cloud Storage bucket containing Skaffold Config modules.
Structure is documented below.
*/
  googleCloudStorage?: clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage;
}

export function clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'configs',
      'The Skaffold Config modules to use from the specified source.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'git',
      'Remote git repository containing the Skaffold Config modules.\nStructure is documented below.',
      () =>
        clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'googleCloudStorage',
      'Cloud Storage bucket containing Skaffold Config modules.\nStructure is documented below.',
      () =>
        clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage_GetTypes(),
      false,
      false,
    ),
  ];
}
