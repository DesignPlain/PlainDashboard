import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_BrokerConfiguration {
  // The Configuration ID.
  id?: string;

  // Revision of the Configuration.
  revision?: number;
}

export function mq_BrokerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'The Configuration ID.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'revision',
      'Revision of the Configuration.',
      () => [],
      false,
      false,
    ),
  ];
}
