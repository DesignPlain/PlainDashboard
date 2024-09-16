import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_ApplicationSslConfiguration {
  // The contents of the certificate's domain.crt file.
  certificate?: string;

  // Can be used to specify an intermediate certificate authority key or client authentication.
  chain?: string;

  // The private key; the contents of the certificate's domain.key file.
  privateKey?: string;
}

export function opsworks_ApplicationSslConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'chain',
      'Can be used to specify an intermediate certificate authority key or client authentication.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateKey',
      "The private key; the contents of the certificate's domain.key file.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'certificate',
      "The contents of the certificate's domain.crt file.",
      () => [],
      true,
      false,
    ),
  ];
}
