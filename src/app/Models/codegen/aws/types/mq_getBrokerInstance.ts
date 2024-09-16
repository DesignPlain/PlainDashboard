import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getBrokerInstance {
  //
  consoleUrl?: string;

  //
  endpoints?: Array<string>;

  //
  ipAddress?: string;
}

export function mq_getBrokerInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'consoleUrl',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'endpoints',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
