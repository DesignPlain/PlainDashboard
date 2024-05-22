import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GatewayArgs {
  /*
Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
lifecycle rule `create_before_destroy` is set.
*/
  apiConfig?: string;

  // A user-visible name for the API.
  displayName?: string;

  /*
Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).


- - -
*/
  gatewayId?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the gateway for the API.
  region?: string;
}
export class Gateway extends Resource {
  // The default API Gateway host name of the form {gatewayId}-{hash}.{region_code}.gateway.dev.
  public defaultHostname?: string;

  // A user-visible name for the API.
  public displayName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
lifecycle rule `create_before_destroy` is set.
*/
  public apiConfig?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).


- - -
*/
  public gatewayId?: string;

  // Resource name of the Gateway. Format: projects/{project}/locations/{region}/gateways/{gateway}
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the gateway for the API.
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiConfig",
        "Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.\nWhen changing api configs please ensure the new config is a new resource and the\nlifecycle rule `create_before_destroy` is set.",
        [],
        true,
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
        InputType.String,
        "gatewayId",
        "Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).\n\n\n- - -",
        [],
        true,
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
        InputType.String,
        "region",
        "The region of the gateway for the API.",
        [],
        false,
        true,
      ),
    ];
  }
}
