import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getCaCertsCert {
  // Expiration time of the CA cert.
  ExpirationTime?: string;

  // SHA1 fingerprint of the CA cert.
  Sha1Fingerprint?: string;

  // The CA certificate used to connect to the SQL instance via SSL.
  Cert?: string;

  // The CN valid for the CA cert.
  CommonName?: string;

  // Creation time of the CA cert.
  CreateTime?: string;
}

export function Sql_getCaCertsCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "Expiration time of the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Fingerprint",
      "SHA1 fingerprint of the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cert",
      "The CA certificate used to connect to the SQL instance via SSL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommonName",
      "The CN valid for the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "Creation time of the CA cert.",
      [],
      true,
      false,
    ),
  ];
}
