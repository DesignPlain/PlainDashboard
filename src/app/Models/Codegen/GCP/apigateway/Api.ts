import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ApiArgs {
  /*
Identifier to assign to the API. Must be unique within scope of the parent resource(project)


- - -
*/
  ApiId?: string;

  // A user-visible name for the API.
  DisplayName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed).
If not specified, a new Service will automatically be created in the same project as this API.
*/
  ManagedService?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Api extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name of the API. Format `projects/{{project}}/locations/global/apis/{{apiId}}`
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Identifier to assign to the API. Must be unique within scope of the parent resource(project)


- - -
*/
  public ApiId?: string;

  // Creation timestamp in RFC3339 text format.
  public CreateTime?: string;

  // A user-visible name for the API.
  public DisplayName?: string;

  /*
Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed).
If not specified, a new Service will automatically be created in the same project as this API.
*/
  public ManagedService?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-visible name for the API.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ManagedService",
        "Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed).\nIf not specified, a new Service will automatically be created in the same project as this API.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiId",
        "Identifier to assign to the API. Must be unique within scope of the parent resource(project)\n\n\n- - -",
      ),
    ];
  }
}
