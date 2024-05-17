import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigateway_ApiConfigGrpcService,
  Apigateway_ApiConfigGrpcService_GetTypes,
} from "../types/Apigateway_ApiConfigGrpcService";
import {
  Apigateway_ApiConfigManagedServiceConfig,
  Apigateway_ApiConfigManagedServiceConfig_GetTypes,
} from "../types/Apigateway_ApiConfigManagedServiceConfig";
import {
  Apigateway_ApiConfigOpenapiDocument,
  Apigateway_ApiConfigOpenapiDocument_GetTypes,
} from "../types/Apigateway_ApiConfigOpenapiDocument";
import {
  Apigateway_ApiConfigGatewayConfig,
  Apigateway_ApiConfigGatewayConfig_GetTypes,
} from "../types/Apigateway_ApiConfigGatewayConfig";

export interface ApiConfigArgs {
  /*
The API to attach the config to.


- - -
*/
  Api?: string;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  ApiConfigId?: string;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  ApiConfigIdPrefix?: string;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  GrpcServices?: Array<Apigateway_ApiConfigGrpcService>;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  ManagedServiceConfigs?: Array<Apigateway_ApiConfigManagedServiceConfig>;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  OpenapiDocuments?: Array<Apigateway_ApiConfigOpenapiDocument>;

  // A user-visible name for the API.
  DisplayName?: string;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  GatewayConfig?: Apigateway_ApiConfigGatewayConfig;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ApiConfig extends Resource {
  // The ID of the associated Service Config (https://cloud.google.com/service-infrastructure/docs/glossary#config).
  public ServiceConfigId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  public ApiConfigIdPrefix?: string;

  // A user-visible name for the API.
  public DisplayName?: string;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  public ManagedServiceConfigs?: Array<Apigateway_ApiConfigManagedServiceConfig>;

  // The resource name of the API Config.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The API to attach the config to.


- - -
*/
  public Api?: string;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  public OpenapiDocuments?: Array<Apigateway_ApiConfigOpenapiDocument>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  public ApiConfigId?: string;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  public GrpcServices?: Array<Apigateway_ApiConfigGrpcService>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  public GatewayConfig?: Apigateway_ApiConfigGatewayConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "GrpcServices",
        "gRPC service definition files. If specified, openapiDocuments must not be included.\nStructure is documented below.",
        Apigateway_ApiConfigGrpcService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GatewayConfig",
        "Immutable. Gateway specific configuration.\nIf not specified, backend authentication will be set to use OIDC authentication using the default compute service account\nStructure is documented below.",
        Apigateway_ApiConfigGatewayConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Api",
        "The API to attach the config to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfigId",
        "Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfigIdPrefix",
        "Creates a unique name beginning with the\nspecified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ManagedServiceConfigs",
        'Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.\nIf multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.\nStructure is documented below.',
        Apigateway_ApiConfigManagedServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "OpenapiDocuments",
        "OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.\nStructure is documented below.",
        Apigateway_ApiConfigOpenapiDocument_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the API.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
