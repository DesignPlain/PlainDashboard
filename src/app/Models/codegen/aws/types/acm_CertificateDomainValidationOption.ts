import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface acm_CertificateDomainValidationOption {
  // Fully qualified domain name (FQDN) in the certificate.
  domainName?: string;

  // The name of the DNS record to create to validate the certificate
  resourceRecordName?: string;

  // The type of DNS record to create
  resourceRecordType?: string;

  // The value the DNS record needs to have
  resourceRecordValue?: string;
}

export function acm_CertificateDomainValidationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domainName',
      'Fully qualified domain name (FQDN) in the certificate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceRecordName',
      'The name of the DNS record to create to validate the certificate',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceRecordType',
      'The type of DNS record to create',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceRecordValue',
      'The value the DNS record needs to have',
      () => [],
      false,
      false,
    ),
  ];
}
