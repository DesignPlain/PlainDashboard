import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_AppConnectionGateway {
  /*
(Output)
Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
*/
  IngressPort?: number;

  /*
The type of hosting used by the gateway. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
for a list of possible values.
*/
  Type?: string;

  /*
(Output)
Server-defined URI for this resource.
*/
  Uri?: string;

  // AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  AppGateway?: string;
}

export function Beyondcorp_AppConnectionGateway_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "IngressPort",
      "(Output)\nIngress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of hosting used by the gateway. Refer to\nhttps://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1\nfor a list of possible values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "(Output)\nServer-defined URI for this resource.",
      [],
      false,
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
  ];
}
