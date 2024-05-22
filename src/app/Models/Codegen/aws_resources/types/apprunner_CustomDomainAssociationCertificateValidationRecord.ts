import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apprunner_CustomDomainAssociationCertificateValidationRecord {
  // Record type, always `CNAME`.
  type?: string;

  // Certificate CNAME record value.
  value?: string;

  // Certificate CNAME record name.
  name?: string;

  // Current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.
  status?: string;
}

export function apprunner_CustomDomainAssociationCertificateValidationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Record type, always `CNAME`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Certificate CNAME record value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Certificate CNAME record name.",
      [],
      false,
      false,
    ),
  ];
}
