import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig {
  // If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
  enableHttpPortAccess?: boolean;

  // Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
  httpPorts?: Map<string, string>;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigEndpointConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableHttpPortAccess",
      "If true, enable http access to specific ports on the cluster from external sources. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "httpPorts",
      "Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
