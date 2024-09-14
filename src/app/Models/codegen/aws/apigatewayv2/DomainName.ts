import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigatewayv2_DomainNameDomainNameConfiguration,
  apigatewayv2_DomainNameDomainNameConfiguration_GetTypes,
} from "../types/apigatewayv2_DomainNameDomainNameConfiguration";
import {
  apigatewayv2_DomainNameMutualTlsAuthentication,
  apigatewayv2_DomainNameMutualTlsAuthentication_GetTypes,
} from "../types/apigatewayv2_DomainNameMutualTlsAuthentication";

export interface DomainNameArgs {
  // Domain name. Must be between 1 and 512 characters in length.
  domainName?: string;

  // Domain name configuration. See below.
  domainNameConfiguration?: apigatewayv2_DomainNameDomainNameConfiguration;

  // Mutual TLS authentication configuration for the domain name.
  mutualTlsAuthentication?: apigatewayv2_DomainNameMutualTlsAuthentication;

  // Map of tags to assign to the domain name. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DomainName extends DS_Resource {
  // Mutual TLS authentication configuration for the domain name.
  public mutualTlsAuthentication?: apigatewayv2_DomainNameMutualTlsAuthentication;

  // Map of tags to assign to the domain name. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // [API mapping selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-mapping-selection-expressions) for the domain name.
  public apiMappingSelectionExpression?: string;

  // ARN of the domain name.
  public arn?: string;

  // Domain name. Must be between 1 and 512 characters in length.
  public domainName?: string;

  // Domain name configuration. See below.
  public domainNameConfiguration?: apigatewayv2_DomainNameDomainNameConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Domain name. Must be between 1 and 512 characters in length.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "domainNameConfiguration",
        "Domain name configuration. See below.",
        () => apigatewayv2_DomainNameDomainNameConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mutualTlsAuthentication",
        "Mutual TLS authentication configuration for the domain name.",
        () => apigatewayv2_DomainNameMutualTlsAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the domain name. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
