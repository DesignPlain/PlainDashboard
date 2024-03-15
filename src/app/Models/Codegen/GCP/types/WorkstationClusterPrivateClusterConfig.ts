export interface WorkstationClusterPrivateClusterConfig {
  /*
(Output)
Hostname for the workstation cluster.
This field will be populated only when private endpoint is enabled.
To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.
*/
  ClusterHostname?: string;

  // Whether Workstations endpoint is private.
  EnablePrivateEndpoint?: boolean;

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
}
