import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_getInstanceServerCaCert {
  // The certificate data in PEM format.
  Cert?: string;

  // The time when the certificate was created.
  CreateTime?: string;

  // The time when the certificate expires.
  ExpireTime?: string;

  // Serial number, as extracted from the certificate.
  SerialNumber?: string;

  // Sha1 Fingerprint of the certificate.
  Sha1Fingerprint?: string;
}

export function Redis_getInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Cert",
      "The certificate data in PEM format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "The time when the certificate was created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpireTime",
      "The time when the certificate expires.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SerialNumber",
      "Serial number, as extracted from the certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Fingerprint",
      "Sha1 Fingerprint of the certificate.",
      [],
      true,
      false,
    ),
  ];
}
