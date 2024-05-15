import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigEndpointConfig {
  // The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
  HttpPorts?: Map<string, InputType.String>;

  /*
The flag to enable http access to specific ports
on the cluster from external sources (aka Component Gateway). Defaults to false.
*/
  EnableHttpPortAccess?: boolean;
}

export function Dataproc_ClusterClusterConfigEndpointConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "HttpPorts",
      "The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableHttpPortAccess",
      "The flag to enable http access to specific ports\non the cluster from external sources (aka Component Gateway). Defaults to false.",
      [],
      true,
      true,
    ),
  ];
}
