import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securitylake_SubscriberSourceAwsLogSourceResource {
  // Provides data expiration details of Amazon Security Lake object.
  sourceName?: string;

  // Provides data storage transition details of Amazon Security Lake object.
  sourceVersion?: string;
}

export function securitylake_SubscriberSourceAwsLogSourceResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceName',
      'Provides data expiration details of Amazon Security Lake object.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceVersion',
      'Provides data storage transition details of Amazon Security Lake object.',
      () => [],
      false,
      false,
    ),
  ];
}
