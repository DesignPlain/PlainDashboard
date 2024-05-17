import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule,
  Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes,
} from "./Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule";

export interface Clouddeploy_CustomTargetTypeCustomActions {
  // The Skaffold custom action responsible for deploy operations.
  DeployAction?: string;

  /*
List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.
Structure is documented below.
*/
  IncludeSkaffoldModules?: Array<Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule>;

  // The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.
  RenderAction?: string;
}

export function Clouddeploy_CustomTargetTypeCustomActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeployAction",
      "The Skaffold custom action responsible for deploy operations.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludeSkaffoldModules",
      "List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.\nStructure is documented below.",
      Clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RenderAction",
      "The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.",
      [],
      false,
      false,
    ),
  ];
}
