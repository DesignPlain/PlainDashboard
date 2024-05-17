import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_TenantInboundSamlConfigSpConfig,
  Identityplatform_TenantInboundSamlConfigSpConfig_GetTypes,
} from "../types/Identityplatform_TenantInboundSamlConfigSpConfig";
import {
  Identityplatform_TenantInboundSamlConfigIdpConfig,
  Identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes,
} from "../types/Identityplatform_TenantInboundSamlConfigIdpConfig";

export interface TenantInboundSamlConfigArgs {
  /*
SAML SP (Service Provider) configuration when the project acts as the relying party to receive
and accept an authentication assertion issued by a SAML identity provider.
Structure is documented below.
*/
  SpConfig?: Identityplatform_TenantInboundSamlConfigSpConfig;

  // The name of the tenant where this inbound SAML config resource exists
  Tenant?: string;

  // Human friendly display name.
  DisplayName?: string;

  // If this config allows users to sign in with the provider.
  Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  IdpConfig?: Identityplatform_TenantInboundSamlConfigIdpConfig;

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
}
export class TenantInboundSamlConfig extends Resource {
  // The name of the tenant where this inbound SAML config resource exists
  public Tenant?: string;

  // Human friendly display name.
  public DisplayName?: string;

  // If this config allows users to sign in with the provider.
  public Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  public IdpConfig?: Identityplatform_TenantInboundSamlConfigIdpConfig;

  /*
The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
*/
  public Name?: string;

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
  public SpConfig?: Identityplatform_TenantInboundSamlConfigSpConfig;

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
        Identityplatform_TenantInboundSamlConfigSpConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Tenant",
        "The name of the tenant where this inbound SAML config resource exists",
        [],
        true,
        true,
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
        Identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes(),
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
