import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceIpAddress {
  //
  TimeToRetire?: string;

  //
  Type?: string;

  //
  IpAddress?: string;
}

export function Sql_getDatabaseInstancesInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "TimeToRetire", "", [], true, false),
    new DynamicUIProps(InputType.String, "Type", "", [], true, false),
    new DynamicUIProps(InputType.String, "IpAddress", "", [], true, false),
  ];
}
