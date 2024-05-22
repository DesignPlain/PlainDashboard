import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redis_InstanceServerCaCert {
  /*
(Output)
The certificate data in PEM format.
*/
  cert?: string;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  createTime?: string;

  /*
(Output)
The time when the certificate expires.
*/
  expireTime?: string;

  /*
(Output)
Serial number, as extracted from the certificate.
*/
  serialNumber?: string;

  /*
(Output)
Sha1 Fingerprint of the certificate.
*/
  sha1Fingerprint?: string;
}

export function redis_InstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expireTime",
      "(Output)\nThe time when the certificate expires.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serialNumber",
      "(Output)\nSerial number, as extracted from the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "(Output)\nSha1 Fingerprint of the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cert",
      "(Output)\nThe certificate data in PEM format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      '(Output)\nOutput only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      false,
      false,
    ),
  ];
}
