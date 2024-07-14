import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vpclattice_ListenerRuleActionForwardTargetGroup {
  //
  weight?: number;

  //
  targetGroupIdentifier?: string;
}

export function vpclattice_ListenerRuleActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "weight", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "targetGroupIdentifier",
      "",
      [],
      true,
      false,
    ),
  ];
}
