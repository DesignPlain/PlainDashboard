export interface getAppConnectionGateway {
  // AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  AppGateway?: string;

  // Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
  IngressPort?: number;

  /*
The type of hosting used by the gateway. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
for a list of possible values.
*/
  Type?: string;

  // Server-defined URI for this resource.
  Uri?: string;
}
