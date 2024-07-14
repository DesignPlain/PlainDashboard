import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_LbCertificateDomainValidationRecord {
  //
  resourceRecordType?: string;

  //
  resourceRecordValue?: string;

  // The domain name (e.g., example.com) for your SSL/TLS certificate.
  domainName?: string;

  //
  resourceRecordName?: string;
}

export function lightsail_LbCertificateDomainValidationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceRecordType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceRecordValue",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The domain name (e.g., example.com) for your SSL/TLS certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceRecordName",
      "",
      [],
      false,
      false,
    ),
  ];
}
