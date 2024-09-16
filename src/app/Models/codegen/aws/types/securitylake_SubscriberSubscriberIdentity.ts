import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securitylake_SubscriberSubscriberIdentity {
  // The AWS Regions where Security Lake is automatically enabled.
  externalId?: string;

  // Provides encryption details of Amazon Security Lake object.
  principal?: string;
}

export function securitylake_SubscriberSubscriberIdentity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'externalId',
      'The AWS Regions where Security Lake is automatically enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'principal',
      'Provides encryption details of Amazon Security Lake object.',
      () => [],
      true,
      false,
    ),
  ];
}
