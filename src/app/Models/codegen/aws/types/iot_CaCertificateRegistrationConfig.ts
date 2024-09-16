import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_CaCertificateRegistrationConfig {
  // The ARN of the role.
  roleArn?: string;

  // The template body.
  templateBody?: string;

  // The name of the provisioning template.
  templateName?: string;
}

export function iot_CaCertificateRegistrationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'templateName',
      'The name of the provisioning template.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the role.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'templateBody',
      'The template body.',
      () => [],
      false,
      false,
    ),
  ];
}
