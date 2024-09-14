import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_ServiceNetworkSettingsNetworkSettings {
  /*
The ingress settings for version or service.
Default value is `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`.
Possible values are: `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`, `INGRESS_TRAFFIC_ALLOWED_ALL`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB`.

- - -
*/
  ingressTrafficAllowed?: string;
}

export function appengine_ServiceNetworkSettingsNetworkSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ingressTrafficAllowed",
      "The ingress settings for version or service.\nDefault value is `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`.\nPossible values are: `INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED`, `INGRESS_TRAFFIC_ALLOWED_ALL`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY`, `INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB`.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
