import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getManagedPrefixListEntry {
  //
  cidr?: string;

  //
  description?: string;
}

export function ec2_getManagedPrefixListEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "description",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
