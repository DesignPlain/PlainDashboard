import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { KeystoresAliasesPkcs12CertsInfo } from "../types/KeystoresAliasesPkcs12CertsInfo";

export interface KeystoresAliasesPkcs12Args {
  // Keystore Name
  Keystore?: string;

  // Organization ID associated with the alias, without organization/ prefix
  OrgId?: string;

  // Password for the PKCS12 file if it's encrypted
  Password?: string;

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
}
export class KeystoresAliasesPkcs12 extends Resource {
  // Environment associated with the alias
  public Environment?: string;

  /*
PKCS12 file content

- - -
*/
  public File?: string;

  // Keystore Name
  public Keystore?: string;

  // Optional.Type of Alias
  public Type?: string;

  // Alias Name
  public Alias?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfos?: Array<KeystoresAliasesPkcs12CertsInfo>;

  // Hash of the pkcs file
  public Filehash?: string;

  // Organization ID associated with the alias, without organization/ prefix
  public OrgId?: string;

  // Password for the PKCS12 file if it's encrypted
  public Password?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Alias", "Alias Name"),
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "Environment associated with the alias",
      ),
      new DynamicUIProps(
        InputType.String,
        "File",
        "PKCS12 file content\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Filehash", "Hash of the pkcs file"),
      new DynamicUIProps(InputType.String, "Keystore", "Keystore Name"),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "Organization ID associated with the alias, without organization/ prefix",
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for the PKCS12 file if it's encrypted",
      ),
    ];
  }
}
