import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface WorkflowArgs {
  // Change description of the workflow.
  changeDescription?: string;

  // Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.
  data?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.
  kmsKeyId?: string;

  /*
Version of the workflow.

The following arguments are optional:
*/
  version?: string;

  // Description of the workflow.
  description?: string;

  // Name of the workflow.
  name?: string;

  // Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.
  type?: string;

  // S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.
  uri?: string;
}
export class Workflow extends Resource {
  // Amazon Resource Name (ARN) of the workflow.
  public arn?: string;

  // Change description of the workflow.
  public changeDescription?: string;

  // Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.
  public data?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.
  public kmsKeyId?: string;

  // Owner of the workflow.
  public owner?: string;

  // Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.
  public uri?: string;

  // Date the workflow was created.
  public dateCreated?: string;

  // Description of the workflow.
  public description?: string;

  // Name of the workflow.
  public name?: string;

  //
  public tagsAll?: Map<string, string>;

  // Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.
  public type?: string;

  /*
Version of the workflow.

The following arguments are optional:
*/
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "uri",
        "S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version of the workflow.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "changeDescription",
        "Change description of the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "data",
        "Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.",
        [],
        true,
        true,
      ),
    ];
  }
}
