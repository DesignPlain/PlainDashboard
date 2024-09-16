import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  tpu_V2VmNetworkEndpointAccessConfig,
  tpu_V2VmNetworkEndpointAccessConfig_GetTypes,
} from './tpu_V2VmNetworkEndpointAccessConfig';

export interface tpu_V2VmNetworkEndpoint {
  /*
(Output)
The access config for the TPU worker.
Structure is documented below.
*/
  accessConfigs?: Array<tpu_V2VmNetworkEndpointAccessConfig>;

  /*
(Output)
The internal IP address of this network endpoint.
*/
  ipAddress?: string;

  /*
(Output)
The port of this network endpoint.
*/
  port?: number;
}

export function tpu_V2VmNetworkEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'accessConfigs',
      '(Output)\nThe access config for the TPU worker.\nStructure is documented below.',
      () => tpu_V2VmNetworkEndpointAccessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      '(Output)\nThe internal IP address of this network endpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      '(Output)\nThe port of this network endpoint.',
      () => [],
      false,
      false,
    ),
  ];
}
