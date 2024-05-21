import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_AutomationSelectorTarget,
  clouddeploy_AutomationSelectorTarget_GetTypes,
} from "./clouddeploy_AutomationSelectorTarget";

export interface clouddeploy_AutomationSelector {
  /*
Contains attributes about a target.
Structure is documented below.
*/
  targets?: Array<clouddeploy_AutomationSelectorTarget>;
}

export function clouddeploy_AutomationSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "Contains attributes about a target.\nStructure is documented below.",
      clouddeploy_AutomationSelectorTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
