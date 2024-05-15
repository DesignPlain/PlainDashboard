import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesKeyCertFileCertsInfo,
  Apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes,
} from "../types/Apigee_KeystoresAliasesKeyCertFileCertsInfo";

export interface KeystoresAliasesKeyCertFileArgs {
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
  CertsInfo?: Apigee_KeystoresAliasesKeyCertFileCertsInfo;

  // Environment associated with the alias
  Environment?: string;

  // Private Key content, omit if uploading to truststore
  Key?: string;

  // Keystore Name
  Keystore?: string;
}
export class KeystoresAliasesKeyCertFile extends Resource {
  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfo?: Apigee_KeystoresAliasesKeyCertFileCertsInfo;

  // Private Key content, omit if uploading to truststore
  public Key?: string;

  // Organization ID associated with the alias, without organization/ prefix
  public OrgId?: string;

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

  // Environment associated with the alias
  public Environment?: string;

  // Keystore Name
  public Keystore?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Alias",
        "Alias Name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cert",
        "Cert content\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CertsInfo",
        "Chain of certificates under this alias.\nStructure is documented below.",
        Apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes(),
        false,
        false,
      ),
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
        "Key",
        "Private Key content, omit if uploading to truststore",
        [],
        false,
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
        "Password for the Private Key if it's encrypted",
        [],
        false,
        false,
      ),
    ];
  }
}
