import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_DatabaseInstanceIpAddress {
  //
  type?: string;

  //
  ipAddress?: string;

  //
  timeToRetire?: string;
}

export function sql_DatabaseInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", [], false, false),
    new DynamicUIProps(InputType.String, "ipAddress", "", [], false, false),
    new DynamicUIProps(InputType.String, "timeToRetire", "", [], false, false),
  ];
}
