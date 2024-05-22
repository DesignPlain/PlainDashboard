import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lightsail_CertificateDomainValidationOption {
  // A domain name for which the certificate should be issued.
  domainName?: string;

  //
  resourceRecordName?: string;

  //
  resourceRecordType?: string;

  //
  resourceRecordValue?: string;
}

export function lightsail_CertificateDomainValidationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "A domain name for which the certificate should be issued.",
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
  ];
}
