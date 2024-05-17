import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_getAppConnectionGateway {
  // Server-defined URI for this resource.
  Uri?: string;

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
}

export function Beyondcorp_getAppConnectionGateway_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "Server-defined URI for this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AppGateway",
      "AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IngressPort",
      "Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of hosting used by the gateway. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1\nfor a list of possible values.",
      [],
      true,
      false,
    ),
  ];
}
