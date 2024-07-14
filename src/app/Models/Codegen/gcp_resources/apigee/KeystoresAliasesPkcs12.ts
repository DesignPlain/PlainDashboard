import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigee_KeystoresAliasesPkcs12CertsInfo,
  apigee_KeystoresAliasesPkcs12CertsInfo_GetTypes,
} from "../types/apigee_KeystoresAliasesPkcs12CertsInfo";

export interface KeystoresAliasesPkcs12Args {
  // Organization ID associated with the alias, without organization/ prefix
  orgId?: string;

  // Password for the PKCS12 file if it's encrypted
  password?: string;

  // Alias Name
  alias?: string;

  // Environment associated with the alias
  environment?: string;

  /*
PKCS12 file content

- - -
*/
  file?: string;

  // Hash of the pkcs file
  filehash?: string;

  // Keystore Name
  keystore?: string;
}
export class KeystoresAliasesPkcs12 extends Resource {
  /*
PKCS12 file content

- - -
*/
  public file?: string;

  // Hash of the pkcs file
  public filehash?: string;

  // Keystore Name
  public keystore?: string;

  // Password for the PKCS12 file if it's encrypted
  public password?: string;

  // Alias Name
  public alias?: string;

  // Environment associated with the alias
  public environment?: string;

  // Optional.Type of Alias
  public type?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public certsInfos?: Array<apigee_KeystoresAliasesPkcs12CertsInfo>;

  // Organization ID associated with the alias, without organization/ prefix
  public orgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "Organization ID associated with the alias, without organization/ prefix",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "Password for the PKCS12 file if it's encrypted",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alias",
        "Alias Name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "environment",
        "Environment associated with the alias",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "file",
        "PKCS12 file content\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "filehash",
        "Hash of the pkcs file",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keystore",
        "Keystore Name",
        [],
        true,
        true,
      ),
    ];
  }
}
