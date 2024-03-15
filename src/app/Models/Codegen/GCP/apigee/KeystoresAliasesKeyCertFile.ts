import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { KeystoresAliasesKeyCertFileCertsInfo } from "../types/KeystoresAliasesKeyCertFileCertsInfo";

export interface KeystoresAliasesKeyCertFileArgs {
  // Private Key content, omit if uploading to truststore
  Key?: string;

  // Keystore Name
  Keystore?: string;

  // Organization ID associated with the alias, without organization/ prefix
  OrgId?: string;

  // Password for the Private Key if it's encrypted
  Password?: string;

  // Alias Name
  Alias?: string;

  /*
Cert content


- - -
*/
  Cert?: string;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  CertsInfo?: KeystoresAliasesKeyCertFileCertsInfo;

  // Environment associated with the alias
  Environment?: string;
}
export class KeystoresAliasesKeyCertFile extends Resource {
  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfo?: KeystoresAliasesKeyCertFileCertsInfo;

  // Environment associated with the alias
  public Environment?: string;

  // Private Key content, omit if uploading to truststore
  public Key?: string;

  // Password for the Private Key if it's encrypted
  public Password?: string;

  // Optional.Type of Alias
  public Type?: string;

  // Alias Name
  public Alias?: string;

  /*
Cert content


- - -
*/
  public Cert?: string;

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
      ),
      new DynamicUIProps(
        InputType.String,
        "Key",
        "Private Key content, omit if uploading to truststore",
      ),
      new DynamicUIProps(InputType.String, "Keystore", "Keystore Name"),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "Organization ID associated with the alias, without organization/ prefix",
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for the Private Key if it's encrypted",
      ),
      new DynamicUIProps(InputType.String, "Alias", "Alias Name"),
      new DynamicUIProps(InputType.String, "Cert", "Cert content\n\n\n- - -"),
      new DynamicUIProps(
        InputType.String,
        "CertsInfo",
        "Chain of certificates under this alias.\nStructure is documented below.",
      ),
    ];
  }
}
