import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_InboundSamlConfigSpConfig,
  Identityplatform_InboundSamlConfigSpConfig_GetTypes,
} from "../types/Identityplatform_InboundSamlConfigSpConfig";
import {
  Identityplatform_InboundSamlConfigIdpConfig,
  Identityplatform_InboundSamlConfigIdpConfig_GetTypes,
} from "../types/Identityplatform_InboundSamlConfigIdpConfig";

export interface InboundSamlConfigArgs {
  /*
The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
SAML SP (Service Provider) configuration when the project acts as the relying party to receive
and accept an authentication assertion issued by a SAML identity provider.
Structure is documented below.
*/
  SpConfig?: Identityplatform_InboundSamlConfigSpConfig;

  // Human friendly display name.
  DisplayName?: string;

  // If this config allows users to sign in with the provider.
  Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  IdpConfig?: Identityplatform_InboundSamlConfigIdpConfig;
}
export class InboundSamlConfig extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
SAML SP (Service Provider) configuration when the project acts as the relying party to receive
and accept an authentication assertion issued by a SAML identity provider.
Structure is documented below.
*/
  public SpConfig?: Identityplatform_InboundSamlConfigSpConfig;

  // Human friendly display name.
  public DisplayName?: string;

  // If this config allows users to sign in with the provider.
  public Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  public IdpConfig?: Identityplatform_InboundSamlConfigIdpConfig;

  /*
The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SpConfig",
        "SAML SP (Service Provider) configuration when the project acts as the relying party to receive\nand accept an authentication assertion issued by a SAML identity provider.\nStructure is documented below.",
        Identityplatform_InboundSamlConfigSpConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human friendly display name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Enabled",
        "If this config allows users to sign in with the provider.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "IdpConfig",
        "SAML IdP configuration when the project acts as the relying party\nStructure is documented below.",
        Identityplatform_InboundSamlConfigIdpConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,\nhyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an\nalphanumeric character, and have at least 2 characters.",
        [],
        false,
        true,
      ),
    ];
  }
}
