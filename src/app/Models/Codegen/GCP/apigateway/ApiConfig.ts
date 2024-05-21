import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigateway_ApiConfigGrpcService,
  apigateway_ApiConfigGrpcService_GetTypes,
} from "../types/apigateway_ApiConfigGrpcService";
import {
  apigateway_ApiConfigManagedServiceConfig,
  apigateway_ApiConfigManagedServiceConfig_GetTypes,
} from "../types/apigateway_ApiConfigManagedServiceConfig";
import {
  apigateway_ApiConfigGatewayConfig,
  apigateway_ApiConfigGatewayConfig_GetTypes,
} from "../types/apigateway_ApiConfigGatewayConfig";
import {
  apigateway_ApiConfigOpenapiDocument,
  apigateway_ApiConfigOpenapiDocument_GetTypes,
} from "../types/apigateway_ApiConfigOpenapiDocument";

export interface ApiConfigArgs {
  /*
The API to attach the config to.


- - -
*/
  api?: string;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  apiConfigId?: string;

  // A user-visible name for the API.
  displayName?: string;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  grpcServices?: Array<apigateway_ApiConfigGrpcService>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  managedServiceConfigs?: Array<apigateway_ApiConfigManagedServiceConfig>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  apiConfigIdPrefix?: string;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  gatewayConfig?: apigateway_ApiConfigGatewayConfig;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  openapiDocuments?: Array<apigateway_ApiConfigOpenapiDocument>;
}
export class ApiConfig extends Resource {
  // A user-visible name for the API.
  public displayName?: string;

  /*
gRPC service definition files. If specified, openapiDocuments must not be included.
Structure is documented below.
*/
  public grpcServices?: Array<apigateway_ApiConfigGrpcService>;

  // The resource name of the API Config.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The ID of the associated Service Config (https://cloud.google.com/service-infrastructure/docs/glossary#config).
  public serviceConfigId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The API to attach the config to.


- - -
*/
  public api?: string;

  /*
Immutable. Gateway specific configuration.
If not specified, backend authentication will be set to use OIDC authentication using the default compute service account
Structure is documented below.
*/
  public gatewayConfig?: apigateway_ApiConfigGatewayConfig;

  /*
OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
Structure is documented below.
*/
  public openapiDocuments?: Array<apigateway_ApiConfigOpenapiDocument>;

  // Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  public apiConfigId?: string;

  /*
Creates a unique name beginning with the
specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
*/
  public apiConfigIdPrefix?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.
If multiple files are specified, the files are merged with the following rules: - All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. - Repeated fields are concatenated. - Singular embedded messages are merged using these rules for nested fields.
Structure is documented below.
*/
  public managedServiceConfigs?: Array<apigateway_ApiConfigManagedServiceConfig>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "api",
        "The API to attach the config to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiConfigId",
        "Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
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
        InputType.Array,
        "openapiDocuments",
        "OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.\nStructure is documented below.",
        apigateway_ApiConfigOpenapiDocument_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A user-visible name for the API.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "grpcServices",
        "gRPC service definition files. If specified, openapiDocuments must not be included.\nStructure is documented below.",
        apigateway_ApiConfigGrpcService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "managedServiceConfigs",
        'Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents.\nIf multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.\nStructure is documented below.',
        apigateway_ApiConfigManagedServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiConfigIdPrefix",
        "Creates a unique name beginning with the\nspecified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gatewayConfig",
        "Immutable. Gateway specific configuration.\nIf not specified, backend authentication will be set to use OIDC authentication using the default compute service account\nStructure is documented below.",
        apigateway_ApiConfigGatewayConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
