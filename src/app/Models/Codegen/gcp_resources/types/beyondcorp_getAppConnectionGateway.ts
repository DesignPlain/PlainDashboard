import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface beyondcorp_getAppConnectionGateway {
  // AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  appGateway?: string;

  // Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
  ingressPort?: number;

  /*
The type of hosting used by the gateway. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
for a list of possible values.
*/
  type?: string;

  // Server-defined URI for this resource.
  uri?: string;
}

export function beyondcorp_getAppConnectionGateway_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ingressPort",
      "Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of hosting used by the gateway. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1\nfor a list of possible values.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "Server-defined URI for this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appGateway",
      "AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.",
      [],
      true,
      false,
    ),
  ];
}
