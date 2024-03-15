import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ApiConfigManagedServiceConfig } from "../types/ApiConfigManagedServiceConfig";
import { ApiConfigGatewayConfig } from "../types/ApiConfigGatewayConfig";
import { ApiConfigGrpcService } from "../types/ApiConfigGrpcService";
import { ApiConfigOpenapiDocument } from "../types/ApiConfigOpenapiDocument";

export interface ApiConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  ApiConfigId?: string;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  ManagedServiceConfigs?: Array<ApiConfigManagedServiceConfig>;

  // A user-visible name for the API.
  DisplayName?: string;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  GatewayConfig?: ApiConfigGatewayConfig;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  GrpcServices?: Array<ApiConfigGrpcService>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  OpenapiDocuments?: Array<ApiConfigOpenapiDocument>;

  /*
The API to attach the config to.


- - -
*/
  Api?: string;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  ApiConfigIdPrefix?: string;
}
export class ApiConfig extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  public ApiConfigIdPrefix?: string;

  // A user-visible name for the API.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The ID of the associated Service Config (https://cloud.google.com/service-infrastructure/docs/glossary#config).
  public ServiceConfigId?: string;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  public GrpcServices?: Array<ApiConfigGrpcService>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  public GatewayConfig?: ApiConfigGatewayConfig;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  public ManagedServiceConfigs?: Array<ApiConfigManagedServiceConfig>;

  // The resource name of the API Config.
  public Name?: string;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  public OpenapiDocuments?: Array<ApiConfigOpenapiDocument>;

  /*
The API to attach the config to.


- - -
*/
  public Api?: string;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  public ApiConfigId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Api",
        "The API to attach the config to.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfigIdPrefix",
        "Creates a unique name beginning with the\nspecified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the API.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GatewayConfig",
        "Immutable. Gateway specific configuration.\nIf not specified, backend authentication will be set to use OIDC authentication using the default compute service account\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "OpenapiDocuments",
        "OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfigId",
        "Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ManagedServiceConfigs",
        'Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.\nIf multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GrpcServices",
        "gRPC service definition files. If specified, openapiDocuments must not be included.\nStructure is documented below.",
      ),
    ];
  }
}
