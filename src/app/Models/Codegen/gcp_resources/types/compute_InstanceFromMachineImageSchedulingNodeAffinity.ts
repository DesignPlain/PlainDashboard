import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceFromMachineImageSchedulingNodeAffinity {
  //
  values?: Array<string>;

  //
  key?: string;

  //
  operator?: string;
}

export function compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "key", "", [], true, false),
    new DynamicUIProps(InputType.String, "operator", "", [], true, false),
  ];
}
