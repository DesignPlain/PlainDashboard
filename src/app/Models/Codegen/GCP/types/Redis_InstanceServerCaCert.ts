import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_InstanceServerCaCert {
  /*
(Output)
The certificate data in PEM format.
*/
  Cert?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  CreateTime?: string;

  /*
(Output)
The time when the certificate expires.
*/
  ExpireTime?: string;

  /*
(Output)
Serial number, as extracted from the certificate.
*/
  SerialNumber?: string;

  /*
(Output)
Sha1 Fingerprint of the certificate.
*/
  Sha1Fingerprint?: string;
}

export function Redis_InstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SerialNumber",
      "(Output)\nSerial number, as extracted from the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Fingerprint",
      "(Output)\nSha1 Fingerprint of the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cert",
      "(Output)\nThe certificate data in PEM format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      '(Output)\nOutput only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpireTime",
      "(Output)\nThe time when the certificate expires.",
      [],
      false,
      false,
    ),
  ];
}
