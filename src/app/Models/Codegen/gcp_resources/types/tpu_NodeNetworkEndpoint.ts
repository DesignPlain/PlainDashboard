import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface tpu_NodeNetworkEndpoint {
  /*
(Output)
The IP address of this network endpoint.
*/
  ipAddress?: string;

  /*
(Output)
The port of this network endpoint.
*/
  port?: number;
}

export function tpu_NodeNetworkEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "(Output)\nThe port of this network endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "(Output)\nThe IP address of this network endpoint.",
      [],
      false,
      false,
    ),
  ];
}
