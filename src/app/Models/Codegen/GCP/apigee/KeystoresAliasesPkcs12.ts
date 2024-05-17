import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesPkcs12CertsInfo,
  Apigee_KeystoresAliasesPkcs12CertsInfo_GetTypes,
} from "../types/Apigee_KeystoresAliasesPkcs12CertsInfo";

export interface KeystoresAliasesPkcs12Args {
  // Alias Name
  Alias?: string;

  // Environment associated with the alias
  Environment?: string;

  /*
PKCS12 file content

- - -
*/
  File?: string;

  // Hash of the pkcs file
  Filehash?: string;

  // Keystore Name
  Keystore?: string;

  // Organization ID associated with the alias, without organization/ prefix
  OrgId?: string;

  // Password for the PKCS12 file if it's encrypted
  Password?: string;
}
export class KeystoresAliasesPkcs12 extends Resource {
  // Password for the PKCS12 file if it's encrypted
  public Password?: string;

  // Optional.Type of Alias
  public Type?: string;

  // Alias Name
  public Alias?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfos?: Array<Apigee_KeystoresAliasesPkcs12CertsInfo>;

  // Environment associated with the alias
  public Environment?: string;

  /*
PKCS12 file content

- - -
*/
  public File?: string;

  // Hash of the pkcs file
  public Filehash?: string;

  // Keystore Name
  public Keystore?: string;

  // Organization ID associated with the alias, without organization/ prefix
  public OrgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "Environment associated with the alias",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "File",
        "PKCS12 file content\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Filehash",
        "Hash of the pkcs file",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Keystore",
        "Keystore Name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "Organization ID associated with the alias, without organization/ prefix",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for the PKCS12 file if it's encrypted",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Alias",
        "Alias Name",
        [],
        true,
        true,
      ),
    ];
  }
}
