import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstanceIpAddress {
  //
  ipAddress?: string;

  //
  timeToRetire?: string;

  //
  type?: string;
}

export function sql_getDatabaseInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ipAddress", "", [], true, false),
    new DynamicUIProps(InputType.String, "timeToRetire", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
