import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RepositoryArgs {
  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // Name of the repository.
  Name?: string;

  /*
The connection for the resource


- - -
*/
  ParentConnection?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Required. Git Clone HTTPS URI.
  RemoteUri?: string;
}
export class Repository extends Resource {
  // This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Name of the repository.
  public Name?: string;

  // Output only. Server assigned timestamp for when the connection was updated.
  public UpdateTime?: string;

  /*
Allows clients to store small amounts of arbitrary data.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Server assigned timestamp for when the connection was created.
  public CreateTime?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // The location for the resource
  public Location?: string;

  /*
The connection for the resource


- - -
*/
  public ParentConnection?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Required. Git Clone HTTPS URI.
  public RemoteUri?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Allows clients to store small amounts of arbitrary data.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the repository."),
      new DynamicUIProps(
        InputType.String,
        "ParentConnection",
        "The connection for the resource\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RemoteUri",
        "Required. Git Clone HTTPS URI.",
      ),
    ];
  }
}
