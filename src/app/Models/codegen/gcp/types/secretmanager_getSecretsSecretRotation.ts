import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface secretmanager_getSecretsSecretRotation {
  // Timestamp in UTC at which the Secret is scheduled to rotate.
  nextRotationTime?: string;

  // The Duration between rotation notifications.
  rotationPeriod?: string;
}

export function secretmanager_getSecretsSecretRotation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nextRotationTime',
      'Timestamp in UTC at which the Secret is scheduled to rotate.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rotationPeriod',
      'The Duration between rotation notifications.',
      () => [],
      true,
      false,
    ),
  ];
}
