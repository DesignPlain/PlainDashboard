export interface ConnectorSubnet {
  /*
Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"
*/
  Name?: string;

  // Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  ProjectId?: string;
}
