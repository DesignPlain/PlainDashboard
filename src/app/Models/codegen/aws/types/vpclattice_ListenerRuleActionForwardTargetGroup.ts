import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vpclattice_ListenerRuleActionForwardTargetGroup {
  //
  targetGroupIdentifier?: string;

  //
  weight?: number;
}

export function vpclattice_ListenerRuleActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetGroupIdentifier",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "weight", "", () => [], false, false),
  ];
}
