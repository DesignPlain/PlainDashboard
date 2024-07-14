import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterAutoTerminationPolicy {
  // Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of `60` seconds and a maximum of `604800` seconds (seven days).
  idleTimeout?: number;
}

export function emr_ClusterAutoTerminationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "idleTimeout",
      "Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of `60` seconds and a maximum of `604800` seconds (seven days).",
      [],
      false,
      false,
    ),
  ];
}
