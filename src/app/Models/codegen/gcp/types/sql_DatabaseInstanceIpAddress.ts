import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_DatabaseInstanceIpAddress {
  //
  ipAddress?: string;

  //
  timeToRetire?: string;

  //
  type?: string;
}

export function sql_DatabaseInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeToRetire",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], false, false),
  ];
}
