import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointAttachmentArgs {
  /*
Name of Endpoint Attachment needs to be created.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The path of the service attachment.
  ServiceAttachment?: string;

  // Description of the resource.
  Description?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Location in which Endpoint Attachment needs to be created.
  Location?: string;
}
export class EndpointAttachment extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Description of the resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Location in which Endpoint Attachment needs to be created.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The path of the service attachment.
  public ServiceAttachment?: string;

  // Time the Namespace was updated in UTC.
  public UpdateTime?: string;

  // Time the Namespace was created in UTC.
  public CreateTime?: string;

  // The Private Service Connect connection endpoint ip.
  public EndpointIp?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Name of Endpoint Attachment needs to be created.


- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ServiceAttachment",
        "The path of the service attachment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location in which Endpoint Attachment needs to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of Endpoint Attachment needs to be created.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
