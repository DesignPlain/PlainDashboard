import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceServerCaCert {
  // The CA Certificate used to connect to the SQL Instance via SSL.
  Cert?: string;

  // The CN valid for the CA Cert.
  CommonName?: string;

  // Creation time of the CA Cert.
  CreateTime?: string;

  // Expiration time of the CA Cert.
  ExpirationTime?: string;

  // SHA Fingerprint of the CA Cert.
  Sha1Fingerprint?: string;
}

export function Sql_getDatabaseInstanceServerCaCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "Expiration time of the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Fingerprint",
      "SHA Fingerprint of the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cert",
      "The CA Certificate used to connect to the SQL Instance via SSL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommonName",
      "The CN valid for the CA Cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "Creation time of the CA Cert.",
      [],
      true,
      false,
    ),
  ];
}
