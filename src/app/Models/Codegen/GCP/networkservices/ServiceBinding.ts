import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServiceBindingArgs {
  /*
Set of label tags associated with the ServiceBinding resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Name of the ServiceBinding resource.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The full Service Directory Service name of the format
projects/-/locations/-/namespaces/-/services/-
*/
  Service?: string;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;
}
export class ServiceBinding extends Resource {
  // Time the ServiceBinding was created in UTC.
  public CreateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
Name of the ServiceBinding resource.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The full Service Directory Service name of the format
projects/-/locations/-/namespaces/-/services/-
*/
  public Service?: string;

  // Time the ServiceBinding was updated in UTC.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the ServiceBinding resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the ServiceBinding resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the ServiceBinding resource.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The full Service Directory Service name of the format\nprojects/*/locations/*/namespaces/*/services/*",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
      ),
    ];
  }
}
