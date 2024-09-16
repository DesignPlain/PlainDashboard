import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getBrokerLogs {
  //
  audit?: boolean;

  //
  general?: boolean;
}

export function mq_getBrokerLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'audit', '', () => [], true, false),
    new DynamicUIProps(InputType.Bool, 'general', '', () => [], true, false),
  ];
}
