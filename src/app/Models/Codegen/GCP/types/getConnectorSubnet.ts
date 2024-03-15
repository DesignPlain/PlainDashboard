export interface getConnectorSubnet {
  /*
Name of the resource.

- - -
*/
  Name?: string;

  // Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  ProjectId?: string;
}
