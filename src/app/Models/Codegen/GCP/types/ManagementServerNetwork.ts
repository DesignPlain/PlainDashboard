export interface ManagementServerNetwork {
  // Network with format `projects/{{project_id}}/global/networks/{{network_id}}`
  Network?: string;

  /*
Type of Network peeringMode
Default value is `PRIVATE_SERVICE_ACCESS`.
Possible values are: `PRIVATE_SERVICE_ACCESS`.

- - -
*/
  PeeringMode?: string;
}
