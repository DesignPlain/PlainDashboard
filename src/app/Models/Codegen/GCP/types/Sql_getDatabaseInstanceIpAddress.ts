import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceIpAddress {
  //
  IpAddress?: string;

  //
  TimeToRetire?: string;

  //
  Type?: string;
}

export function Sql_getDatabaseInstanceIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Type", "", [], true, false),
    new DynamicUIProps(InputType.String, "IpAddress", "", [], true, false),
    new DynamicUIProps(InputType.String, "TimeToRetire", "", [], true, false),
  ];
}
