import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicediscovery_ServiceHealthCheckCustomConfig {
  // The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.
  failureThreshold?: number;
}

export function servicediscovery_ServiceHealthCheckCustomConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.",
      [],
      false,
      true,
    ),
  ];
}
