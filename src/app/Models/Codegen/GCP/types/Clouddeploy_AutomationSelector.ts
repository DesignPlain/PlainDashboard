import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_AutomationSelectorTarget,
  Clouddeploy_AutomationSelectorTarget_GetTypes,
} from "./Clouddeploy_AutomationSelectorTarget";

export interface Clouddeploy_AutomationSelector {
  /*
Contains attributes about a target.
Structure is documented below.
*/
  Targets?: Array<Clouddeploy_AutomationSelectorTarget>;
}

export function Clouddeploy_AutomationSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Targets",
      "Contains attributes about a target.\nStructure is documented below.",
      Clouddeploy_AutomationSelectorTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
