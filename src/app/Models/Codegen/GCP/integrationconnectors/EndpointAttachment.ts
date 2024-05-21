import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointAttachmentArgs {
  // The path of the service attachment.
  serviceAttachment?: string;

  // Description of the resource.
  description?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Location in which Endpoint Attachment needs to be created.
  location?: string;

  /*
Name of Endpoint Attachment needs to be created.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class EndpointAttachment extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The path of the service attachment.
  public serviceAttachment?: string;

  // Time the Namespace was updated in UTC.
  public updateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The Private Service Connect connection endpoint ip.
  public endpointIp?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Location in which Endpoint Attachment needs to be created.
  public location?: string;

  /*
Name of Endpoint Attachment needs to be created.


- - -
*/
  public name?: string;

  // Time the Namespace was created in UTC.
  public createTime?: string;

  // Description of the resource.
  public description?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location in which Endpoint Attachment needs to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of Endpoint Attachment needs to be created.\n\n\n- - -",
        [],
        false,
        true,
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
        "serviceAttachment",
        "The path of the service attachment.",
        [],
        true,
        true,
      ),
    ];
  }
}
