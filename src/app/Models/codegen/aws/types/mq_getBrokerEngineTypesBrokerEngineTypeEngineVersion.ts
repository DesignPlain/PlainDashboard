import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion {
  //
  name?: string;
}

export function mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
  ];
}
