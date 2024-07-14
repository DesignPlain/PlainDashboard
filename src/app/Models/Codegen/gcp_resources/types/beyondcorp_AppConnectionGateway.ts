import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface beyondcorp_AppConnectionGateway {
  // AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  appGateway?: string;

  /*
(Output)
Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
*/
  ingressPort?: number;

  /*
The type of hosting used by the gateway. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
for a list of possible values.
*/
  type?: string;

  /*
(Output)
Server-defined URI for this resource.
*/
  uri?: string;
}

export function beyondcorp_AppConnectionGateway_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ingressPort",
      "(Output)\nIngress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of hosting used by the gateway. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1\nfor a list of possible values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "(Output)\nServer-defined URI for this resource.",
      [],
      false,
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
