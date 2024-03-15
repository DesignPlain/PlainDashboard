export interface ServiceNetworkSettingsNetworkSettings {
  /*
The ingress settings for version or service.
Default value is `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`.
Possible values are: `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`, `INGRESS_TRAFFIC_ALLOWED_ALL`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB`.

- - -
*/
  IngressTrafficAllowed?: string;
}
