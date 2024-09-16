import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rolesanywhere_TrustAnchorSourceSourceData {
  // The ARN of an ACM Private Certificate Authority.
  acmPcaArn?: string;

  //
  x509CertificateData?: string;
}

export function rolesanywhere_TrustAnchorSourceSourceData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'x509CertificateData',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'acmPcaArn',
      'The ARN of an ACM Private Certificate Authority.',
      () => [],
      false,
      false,
    ),
  ];
}
