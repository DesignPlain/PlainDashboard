import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apprunner_CustomDomainAssociationCertificateValidationRecord {
  // Certificate CNAME record name.
  name?: string;

  // Current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.
  status?: string;

  // Record type, always `CNAME`.
  type?: string;

  // Certificate CNAME record value.
  value?: string;
}

export function apprunner_CustomDomainAssociationCertificateValidationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Certificate CNAME record name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Record type, always `CNAME`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Certificate CNAME record value.",
      () => [],
      false,
      false,
    ),
  ];
}
