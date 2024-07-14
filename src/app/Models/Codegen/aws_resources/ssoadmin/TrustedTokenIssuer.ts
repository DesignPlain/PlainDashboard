import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration,
  ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration_GetTypes,
} from "../types/ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration";

export interface TrustedTokenIssuerArgs {
  // A block that specifies settings that apply to the trusted token issuer, these change depending on the type you specify in `trusted_token_issuer_type`. Documented below.
  trustedTokenIssuerConfiguration?: ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration;

  /*
Specifies the type of the trusted token issuer. Valid values are `OIDC_JWT`

The following arguments are optional:
*/
  trustedTokenIssuerType?: string;

  // A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.
  clientToken?: string;

  // ARN of the instance of IAM Identity Center.
  instanceArn?: string;

  // Name of the trusted token issuer.
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class TrustedTokenIssuer extends Resource {
  // ARN of the instance of IAM Identity Center.
  public instanceArn?: string;

  // Name of the trusted token issuer.
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A block that specifies settings that apply to the trusted token issuer, these change depending on the type you specify in `trusted_token_issuer_type`. Documented below.
  public trustedTokenIssuerConfiguration?: ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration;

  /*
Specifies the type of the trusted token issuer. Valid values are `OIDC_JWT`

The following arguments are optional:
*/
  public trustedTokenIssuerType?: string;

  // ARN of the trusted token issuer.
  public arn?: string;

  // A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.
  public clientToken?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "trustedTokenIssuerType",
        "Specifies the type of the trusted token issuer. Valid values are `OIDC_JWT`\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientToken",
        "A unique, case-sensitive ID that you provide to ensure the idempotency of the request. AWS generates a random value when not provided.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "ARN of the instance of IAM Identity Center.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the trusted token issuer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trustedTokenIssuerConfiguration",
        "A block that specifies settings that apply to the trusted token issuer, these change depending on the type you specify in `trusted_token_issuer_type`. Documented below.",
        ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
