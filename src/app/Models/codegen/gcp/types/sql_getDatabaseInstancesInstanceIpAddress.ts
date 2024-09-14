import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstancesInstanceIpAddress {
  //
  ipAddress?: string;

  //
  timeToRetire?: string;

  //
  type?: string;
}

export function sql_getDatabaseInstancesInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeToRetire",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
  ];
}
