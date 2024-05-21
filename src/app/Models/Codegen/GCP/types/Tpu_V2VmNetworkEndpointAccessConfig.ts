import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface tpu_V2VmNetworkEndpointAccessConfig {
  /*
(Output)
An external IP address associated with the TPU worker.
*/
  externalIp?: string;
}

export function tpu_V2VmNetworkEndpointAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalIp",
      "(Output)\nAn external IP address associated with the TPU worker.",
      [],
      false,
      false,
    ),
  ];
}
