import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redis_getInstanceServerCaCert {
  // Serial number, as extracted from the certificate.
  serialNumber?: string;

  // Sha1 Fingerprint of the certificate.
  sha1Fingerprint?: string;

  // The certificate data in PEM format.
  cert?: string;

  // The time when the certificate was created.
  createTime?: string;

  // The time when the certificate expires.
  expireTime?: string;
}

export function redis_getInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The time when the certificate was created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expireTime",
      "The time when the certificate expires.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serialNumber",
      "Serial number, as extracted from the certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "Sha1 Fingerprint of the certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cert",
      "The certificate data in PEM format.",
      [],
      true,
      false,
    ),
  ];
}
