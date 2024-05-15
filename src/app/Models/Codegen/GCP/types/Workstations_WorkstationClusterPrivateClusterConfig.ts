import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationClusterPrivateClusterConfig {
  /*
(Output)
Service attachment URI for the workstation cluster.
The service attachment is created when private endpoint is enabled.
To access workstations in the cluster, configure access to the managed service using (Private Service Connect)[https://cloud.google.com/vpc/docs/configure-private-service-connect-services].
*/
  ServiceAttachmentUri?: string;

  /*
Additional project IDs that are allowed to attach to the workstation cluster's service attachment.
By default, the workstation cluster's project and the VPC host project (if different) are allowed.
*/
  AllowedProjects?: Array<string>;

  /*
(Output)
Hostname for the workstation cluster.
This field will be populated only when private endpoint is enabled.
To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
*/
  ClusterHostname?: string;

  // Whether Workstations endpoint is private.
  EnablePrivateEndpoint?: boolean;
}

export function Workstations_WorkstationClusterPrivateClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateEndpoint",
      "Whether Workstations endpoint is private.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAttachmentUri",
      "(Output)\nService attachment URI for the workstation cluster.\nThe service attachment is created when private endpoint is enabled.\nTo access workstations in the cluster, configure access to the managed service using (Private Service Connect)[https://cloud.google.com/vpc/docs/configure-private-service-connect-services].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedProjects",
      "Additional project IDs that are allowed to attach to the workstation cluster's service attachment.\nBy default, the workstation cluster's project and the VPC host project (if different) are allowed.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterHostname",
      "(Output)\nHostname for the workstation cluster.\nThis field will be populated only when private endpoint is enabled.\nTo access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.",
      [],
      false,
      false,
    ),
  ];
}
