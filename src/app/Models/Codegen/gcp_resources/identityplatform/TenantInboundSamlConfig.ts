import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_TenantInboundSamlConfigIdpConfig,
  identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes,
} from "../types/identityplatform_TenantInboundSamlConfigIdpConfig";
import {
  identityplatform_TenantInboundSamlConfigSpConfig,
  identityplatform_TenantInboundSamlConfigSpConfig_GetTypes,
} from "../types/identityplatform_TenantInboundSamlConfigSpConfig";

export interface TenantInboundSamlConfigArgs {
  // Human friendly display name.
  displayName?: string;

  // If this config allows users to sign in with the provider.
  enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  idpConfig?: identityplatform_TenantInboundSamlConfigIdpConfig;

  /*
The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
SAML SP (Service Provider) configuration when the project acts as the relying party to receive
and accept an authentication assertion issued by a SAML identity provider.
Structure is documented below.
*/
  spConfig?: identityplatform_TenantInboundSamlConfigSpConfig;

  // The name of the tenant where this inbound SAML config resource exists
  tenant?: string;
}
export class TenantInboundSamlConfig extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
SAML SP (Service Provider) configuration when the project acts as the relying party to receive
and accept an authentication assertion issued by a SAML identity provider.
Structure is documented below.
*/
  public spConfig?: identityplatform_TenantInboundSamlConfigSpConfig;

  // The name of the tenant where this inbound SAML config resource exists
  public tenant?: string;

  // Human friendly display name.
  public displayName?: string;

  // If this config allows users to sign in with the provider.
  public enabled?: boolean;

  /*
SAML IdP configuration when the project acts as the relying party
Structure is documented below.
*/
  public idpConfig?: identityplatform_TenantInboundSamlConfigIdpConfig;

  /*
The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human friendly display name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "If this config allows users to sign in with the provider.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "idpConfig",
        "SAML IdP configuration when the project acts as the relying party\nStructure is documented below.",
        identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,\nhyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an\nalphanumeric character, and have at least 2 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spConfig",
        "SAML SP (Service Provider) configuration when the project acts as the relying party to receive\nand accept an authentication assertion issued by a SAML identity provider.\nStructure is documented below.",
        identityplatform_TenantInboundSamlConfigSpConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tenant",
        "The name of the tenant where this inbound SAML config resource exists",
        [],
        true,
        true,
      ),
    ];
  }
}
