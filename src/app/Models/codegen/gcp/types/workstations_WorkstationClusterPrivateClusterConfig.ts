import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workstations_WorkstationClusterPrivateClusterConfig {
  /*
Additional project IDs that are allowed to attach to the workstation cluster's service attachment.
By default, the workstation cluster's project and the VPC host project (if different) are allowed.
*/
  allowedProjects?: Array<string>;

  /*
(Output)
Hostname for the workstation cluster.
This field will be populated only when private endpoint is enabled.
To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
*/
  clusterHostname?: string;

  // Whether Workstations endpoint is private.
  enablePrivateEndpoint?: boolean;

  /*
(Output)
Service attachment URI for the workstation cluster.
The service attachment is created when private endpoint is enabled.
To access workstations in the cluster, configure access to the managed service using (Private Service Connect)[https://cloud.google.com/vpc/docs/configure-private-service-connect-services].
*/
  serviceAttachmentUri?: string;
}

export function workstations_WorkstationClusterPrivateClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceAttachmentUri',
      '(Output)\nService attachment URI for the workstation cluster.\nThe service attachment is created when private endpoint is enabled.\nTo access workstations in the cluster, configure access to the managed service using (Private Service Connect)[https://cloud.google.com/vpc/docs/configure-private-service-connect-services].',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedProjects',
      "Additional project IDs that are allowed to attach to the workstation cluster's service attachment.\nBy default, the workstation cluster's project and the VPC host project (if different) are allowed.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterHostname',
      '(Output)\nHostname for the workstation cluster.\nThis field will be populated only when private endpoint is enabled.\nTo access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivateEndpoint',
      'Whether Workstations endpoint is private.',
      () => [],
      true,
      true,
    ),
  ];
}
