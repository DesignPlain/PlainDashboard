import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GatewayArgs {
  /*
Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
lifecycle rule `create_before_destroy` is set.
*/
  ApiConfig?: string;

  // A user-visible name for the API.
  DisplayName?: string;

  /*
Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).


- - -
*/
  GatewayId?: string;

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

  // The region of the gateway for the API.
  Region?: string;
}
export class Gateway extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The default API Gateway host name of the form {gatewayId}-{hash}.{region_code}.gateway.dev.
  public DefaultHostname?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).


- - -
*/
  public GatewayId?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
lifecycle rule `create_before_destroy` is set.
*/
  public ApiConfig?: string;

  // A user-visible name for the API.
  public DisplayName?: string;

  // Resource name of the Gateway. Format: projects/{project}/locations/{region}/gateways/{gateway}
  public Name?: string;

  // The region of the gateway for the API.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "GatewayId",
        "Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the gateway for the API.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfig",
        "Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.\nWhen changing api configs please ensure the new config is a new resource and the\nlifecycle rule `create_before_destroy` is set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the API.",
      ),
    ];
  }
}