import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface integrationconnectors_ConnectionConnectorVersionInfraConfig {
  /*
(Output)
Max QPS supported by the connector version before throttling of requests.
*/
  ratelimitThreshold?: string;
}

export function integrationconnectors_ConnectionConnectorVersionInfraConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ratelimitThreshold',
      '(Output)\nMax QPS supported by the connector version before throttling of requests.',
      () => [],
      false,
      false,
    ),
  ];
}
