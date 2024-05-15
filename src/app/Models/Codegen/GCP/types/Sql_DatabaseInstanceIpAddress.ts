import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceIpAddress {
  //
  TimeToRetire?: string;

  //
  Type?: string;

  //
  IpAddress?: string;
}

export function Sql_DatabaseInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "TimeToRetire", "", [], false, false),
    new DynamicUIProps(InputType.String, "Type", "", [], false, false),
    new DynamicUIProps(InputType.String, "IpAddress", "", [], false, false),
  ];
}
