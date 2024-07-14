import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getCaCertsCert {
  // Expiration time of the CA cert.
  expirationTime?: string;

  // SHA1 fingerprint of the CA cert.
  sha1Fingerprint?: string;

  // The CA certificate used to connect to the SQL instance via SSL.
  cert?: string;

  // The CN valid for the CA cert.
  commonName?: string;

  // Creation time of the CA cert.
  createTime?: string;
}

export function sql_getCaCertsCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "Creation time of the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationTime",
      "Expiration time of the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "SHA1 fingerprint of the CA cert.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cert",
      "The CA certificate used to connect to the SQL instance via SSL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "commonName",
      "The CN valid for the CA cert.",
      [],
      true,
      false,
    ),
  ];
}
