import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_NodeNetworkEndpoint {
  /*
(Output)
The IP address of this network endpoint.
*/
  IpAddress?: string;

  /*
(Output)
The port of this network endpoint.
*/
  Port?: number;
}

export function Tpu_NodeNetworkEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "(Output)\nThe port of this network endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "(Output)\nThe IP address of this network endpoint.",
      [],
      false,
      false,
    ),
  ];
}
