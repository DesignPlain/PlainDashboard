import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_HealthCheckLogConfig {
  /*
Indicates whether or not to export logs. This is false by default,
which means no health check logging will be done.
*/
  enable?: boolean;
}

export function compute_HealthCheckLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Indicates whether or not to export logs. This is false by default,\nwhich means no health check logging will be done.",
      [],
      false,
      false,
    ),
  ];
}
