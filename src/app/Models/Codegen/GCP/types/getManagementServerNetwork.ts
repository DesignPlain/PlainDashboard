export interface getManagementServerNetwork {
  // Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'
  Network?: string;

  // Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"]
  PeeringMode?: string;
}
