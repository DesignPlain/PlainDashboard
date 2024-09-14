import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_DomainConfigurationAuthorizerConfig,
  iot_DomainConfigurationAuthorizerConfig_GetTypes,
} from "../types/iot_DomainConfigurationAuthorizerConfig";
import {
  iot_DomainConfigurationTlsConfig,
  iot_DomainConfigurationTlsConfig_GetTypes,
} from "../types/iot_DomainConfigurationTlsConfig";

export interface DomainConfigurationArgs {
  // The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
  validationCertificateArn?: string;

  // An object that specifies the authorization service for a domain. See the `authorizer_config` Block below for details.
  authorizerConfig?: iot_DomainConfigurationAuthorizerConfig;

  // The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains. When using a custom `domain_name`, the cert must include it.
  serverCertificateArns?: Array<string>;

  // The status to which the domain configuration should be set. Valid values are `ENABLED` and `DISABLED`.
  status?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Fully-qualified domain name.
  domainName?: string;

  // The name of the domain configuration. This value must be unique to a region.
  name?: string;

  // The type of service delivered by the endpoint. Note: Amazon Web Services IoT Core currently supports only the `DATA` service type.
  serviceType?: string;

  // An object that specifies the TLS configuration for a domain. See the `tls_config` Block below for details.
  tlsConfig?: iot_DomainConfigurationTlsConfig;
}
export class DomainConfiguration extends DS_Resource {
  // The ARN of the domain configuration.
  public arn?: string;

  // An object that specifies the authorization service for a domain. See the `authorizer_config` Block below for details.
  public authorizerConfig?: iot_DomainConfigurationAuthorizerConfig;

  // The type of the domain.
  public domainType?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
  public validationCertificateArn?: string;

  // An object that specifies the TLS configuration for a domain. See the `tls_config` Block below for details.
  public tlsConfig?: iot_DomainConfigurationTlsConfig;

  // Fully-qualified domain name.
  public domainName?: string;

  // The name of the domain configuration. This value must be unique to a region.
  public name?: string;

  // The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains. When using a custom `domain_name`, the cert must include it.
  public serverCertificateArns?: Array<string>;

  // The type of service delivered by the endpoint. Note: Amazon Web Services IoT Core currently supports only the `DATA` service type.
  public serviceType?: string;

  // The status to which the domain configuration should be set. Valid values are `ENABLED` and `DISABLED`.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceType",
        "The type of service delivered by the endpoint. Note: Amazon Web Services IoT Core currently supports only the `DATA` service type.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tlsConfig",
        "An object that specifies the TLS configuration for a domain. See the `tls_config` Block below for details.",
        () => iot_DomainConfigurationTlsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authorizerConfig",
        "An object that specifies the authorization service for a domain. See the `authorizer_config` Block below for details.",
        () => iot_DomainConfigurationAuthorizerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status to which the domain configuration should be set. Valid values are `ENABLED` and `DISABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Fully-qualified domain name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the domain configuration. This value must be unique to a region.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "validationCertificateArn",
        "The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "serverCertificateArns",
        "The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains. When using a custom `domain_name`, the cert must include it.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
