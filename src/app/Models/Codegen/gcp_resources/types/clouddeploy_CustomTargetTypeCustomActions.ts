import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule,
  clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes,
} from "./clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule";

export interface clouddeploy_CustomTargetTypeCustomActions {
  /*
List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.
Structure is documented below.
*/
  includeSkaffoldModules?: Array<clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule>;

  // The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.
  renderAction?: string;

  // The Skaffold custom action responsible for deploy operations.
  deployAction?: string;
}

export function clouddeploy_CustomTargetTypeCustomActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "includeSkaffoldModules",
      "List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.\nStructure is documented below.",
      clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "renderAction",
      "The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deployAction",
      "The Skaffold custom action responsible for deploy operations.",
      [],
      true,
      false,
    ),
  ];
}
