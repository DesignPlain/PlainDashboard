import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_TlsInspectionConfigurationCertificate {
  // ARN of the certificate.
  certificateArn?: string;

  // Serial number of the certificate.
  certificateSerial?: string;

  // Status of the certificate.
  status?: string;

  // Details about the certificate status, including information about certificate errors.
  statusMessage?: string;
}

export function networkfirewall_TlsInspectionConfigurationCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'certificateArn',
      'ARN of the certificate.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'certificateSerial',
      'Serial number of the certificate.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'Status of the certificate.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'statusMessage',
      'Details about the certificate status, including information about certificate errors.',
      () => [],
      true,
      false,
    ),
  ];
}
