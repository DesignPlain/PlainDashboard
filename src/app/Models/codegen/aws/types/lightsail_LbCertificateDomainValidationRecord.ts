import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lightsail_LbCertificateDomainValidationRecord {
  // The domain name (e.g., example.com) for your SSL/TLS certificate.
  domainName?: string;

  //
  resourceRecordName?: string;

  //
  resourceRecordType?: string;

  //
  resourceRecordValue?: string;
}

export function lightsail_LbCertificateDomainValidationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The domain name (e.g., example.com) for your SSL/TLS certificate.",
      () => [],
      false,
      false,
    ),
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
  ];
}
