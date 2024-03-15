import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TenantInboundSamlConfigIdpConfig } from "../types/TenantInboundSamlConfigIdpConfig";
import { TenantInboundSamlConfigSpConfig } from "../types/TenantInboundSamlConfigSpConfig";

export interface TenantInboundSamlConfigArgs {
  // If this config allows users to sign in with the provider.
  Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  IdpConfig?: TenantInboundSamlConfigIdpConfig;

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
  SpConfig?: TenantInboundSamlConfigSpConfig;

  // The name of the tenant where this inbound SAML config resource exists
  Tenant?: string;

  // Human friendly display name.
  DisplayName?: string;
}
export class TenantInboundSamlConfig extends Resource {
  // Human friendly display name.
  public DisplayName?: string;

  // If this config allows users to sign in with the provider.
  public Enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  public IdpConfig?: TenantInboundSamlConfigIdpConfig;

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
  public SpConfig?: TenantInboundSamlConfigSpConfig;

  // The name of the tenant where this inbound SAML config resource exists
  public Tenant?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,\nhyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an\nalphanumeric character, and have at least 2 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SpConfig",
        "SAML SP (Service Provider) configuration when the project acts as the relying party to receive\nand accept an authentication assertion issued by a SAML identity provider.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Tenant",
        "The name of the tenant where this inbound SAML config resource exists",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human friendly display name.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "If this config allows users to sign in with the provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IdpConfig",
        "SAML IdP configuration when the project acts as the relying party\nStructure is documented below.",
      ),
    ];
  }
}