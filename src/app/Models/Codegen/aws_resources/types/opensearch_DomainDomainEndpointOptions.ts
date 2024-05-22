import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainDomainEndpointOptions {
  // ACM certificate ARN for your custom endpoint.
  customEndpointCertificateArn?: string;

  // Whether to enable custom endpoint for the OpenSearch domain.
  customEndpointEnabled?: boolean;

  // Whether or not to require HTTPS. Defaults to `true`.
  enforceHttps?: boolean;

  // Name of the TLS security policy that needs to be applied to the HTTPS endpoint. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DomainEndpointOptions.html#opensearchservice-Type-DomainEndpointOptions-TLSSecurityPolicy). Pulumi will only perform drift detection if a configuration value is provided.
  tlsSecurityPolicy?: string;

  // Fully qualified domain for your custom endpoint.
  customEndpoint?: string;
}

export function opensearch_DomainDomainEndpointOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "customEndpointEnabled",
      "Whether to enable custom endpoint for the OpenSearch domain.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforceHttps",
      "Whether or not to require HTTPS. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tlsSecurityPolicy",
      "Name of the TLS security policy that needs to be applied to the HTTPS endpoint. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DomainEndpointOptions.html#opensearchservice-Type-DomainEndpointOptions-TLSSecurityPolicy). Pulumi will only perform drift detection if a configuration value is provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customEndpoint",
      "Fully qualified domain for your custom endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customEndpointCertificateArn",
      "ACM certificate ARN for your custom endpoint.",
      [],
      false,
      false,
    ),
  ];
}
