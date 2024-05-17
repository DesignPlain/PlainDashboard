import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Tpu_V2VmNetworkEndpointAccessConfig,
  Tpu_V2VmNetworkEndpointAccessConfig_GetTypes,
} from "./Tpu_V2VmNetworkEndpointAccessConfig";

export interface Tpu_V2VmNetworkEndpoint {
  /*
(Output)
The access config for the TPU worker.
Structure is documented below.
*/
  AccessConfigs?: Array<Tpu_V2VmNetworkEndpointAccessConfig>;

  /*
(Output)
The internal IP address of this network endpoint.
*/
  IpAddress?: string;

  /*
(Output)
The port of this network endpoint.
*/
  Port?: number;
}

export function Tpu_V2VmNetworkEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AccessConfigs",
      "(Output)\nThe access config for the TPU worker.\nStructure is documented below.",
      Tpu_V2VmNetworkEndpointAccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "(Output)\nThe internal IP address of this network endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "(Output)\nThe port of this network endpoint.",
      [],
      false,
      false,
    ),
  ];
}
