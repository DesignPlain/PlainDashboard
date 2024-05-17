import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceServerCaCert {
  // The CA Certificate used to connect to the SQL Instance via SSL.
  Cert?: string;

  // The CN valid for the CA Cert.
  CommonName?: string;

  // Creation time of the CA Cert.
  CreateTime?: string;

  /*
The [RFC 3339](https://tools.ietf.org/html/rfc3339)
formatted date time string indicating when this whitelist expires.
*/
  ExpirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  Sha1Fingerprint?: string;
}

export function Sql_DatabaseInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "The [RFC 3339](https://tools.ietf.org/html/rfc3339)\nformatted date time string indicating when this whitelist expires.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Fingerprint",
      "SHA Fingerprint of the CA Cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cert",
      "The CA Certificate used to connect to the SQL Instance via SSL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommonName",
      "The CN valid for the CA Cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "Creation time of the CA Cert.",
      [],
      false,
      false,
    ),
  ];
}
