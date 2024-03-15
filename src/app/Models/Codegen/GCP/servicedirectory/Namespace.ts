import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NamespaceArgs {
  /*
Resource labels associated with this Namespace. No more than 64 user
labels can be associated with a given resource. Label keys and values can
be no longer than 63 characters.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location for the Namespace.
A full list of valid locations can be found by running
`gcloud beta service-directory locations list`.
*/
  Location?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  NamespaceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Namespace extends Resource {
  /*
Resource labels associated with this Namespace. No more than 64 user
labels can be associated with a given resource. Label keys and values can
be no longer than 63 characters.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location for the Namespace.
A full list of valid locations can be found by running
`gcloud beta service-directory locations list`.
*/
  public Location?: string;

  /*
The resource name for the namespace
in the format `projects/-/locations/-/namespaces/-`.
*/
  public Name?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public NamespaceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the Namespace.\nA full list of valid locations can be found by running\n`gcloud beta service-directory locations list`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamespaceId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels associated with this Namespace. No more than 64 user\nlabels can be associated with a given resource. Label keys and values can\nbe no longer than 63 characters.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
