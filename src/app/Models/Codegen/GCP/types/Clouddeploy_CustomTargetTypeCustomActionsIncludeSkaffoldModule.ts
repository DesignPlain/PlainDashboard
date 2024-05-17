import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit,
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes,
} from "./Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit";
import {
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage,
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage_GetTypes,
} from "./Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage";

export interface Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule {
  // The Skaffold Config modules to use from the specified source.
  Configs?: Array<string>;

  /*
Remote git repository containing the Skaffold Config modules.
Structure is documented below.
*/
  Git?: Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit;

  /*
Cloud Storage bucket containing Skaffold Config modules.
Structure is documented below.
*/
  GoogleCloudStorage?: Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage;
}

export function Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Configs",
      "The Skaffold Config modules to use from the specified source.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Git",
      "Remote git repository containing the Skaffold Config modules.\nStructure is documented below.",
      Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GoogleCloudStorage",
      "Cloud Storage bucket containing Skaffold Config modules.\nStructure is documented below.",
      Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage_GetTypes(),
      false,
      false,
    ),
  ];
}
