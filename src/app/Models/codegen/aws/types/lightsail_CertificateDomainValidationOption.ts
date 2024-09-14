import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      "resourceRecordName",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceRecordType",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceRecordValue",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "A domain name for which the certificate should be issued.",
      () => [],
      false,
      false,
    ),
  ];
}
