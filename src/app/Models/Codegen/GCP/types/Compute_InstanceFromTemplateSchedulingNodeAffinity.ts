import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceFromTemplateSchedulingNodeAffinity {
  //
  Key?: string;

  //
  Operator?: string;

  //
  Values?: Array<string>;
}

export function Compute_InstanceFromTemplateSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Key", "", [], true, false),
    new DynamicUIProps(InputType.String, "Operator", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
