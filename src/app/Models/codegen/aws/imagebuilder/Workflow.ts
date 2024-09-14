import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WorkflowArgs {
  /*
Version of the workflow.

The following arguments are optional:
*/
  version?: string;

  // Change description of the workflow.
  changeDescription?: string;

  // Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.
  data?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.
  kmsKeyId?: string;

  // Name of the workflow.
  name?: string;

  // Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.
  type?: string;

  // Description of the workflow.
  description?: string;

  // S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.
  uri?: string;
}
export class Workflow extends DS_Resource {
  // Date the workflow was created.
  public dateCreated?: string;

  // Description of the workflow.
  public description?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.
  public kmsKeyId?: string;

  // Name of the workflow.
  public name?: string;

  //
  public tagsAll?: Map<string, string>;

  // Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.
  public type?: string;

  // S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.
  public uri?: string;

  // Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.
  public data?: string;

  /*
Version of the workflow.

The following arguments are optional:
*/
  public version?: string;

  // Change description of the workflow.
  public changeDescription?: string;

  // Owner of the workflow.
  public owner?: string;

  // Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the workflow.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the workflow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "uri",
        "S3 URI with data of the workflow. Exactly one of `data` and `uri` can be specified.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "changeDescription",
        "Change description of the workflow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the workflow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the workflow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the workflow. Valid values: `BUILD`, `TEST`, `DISTRIBUTION`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the workflow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version of the workflow.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "data",
        "Inline YAML string with data of the workflow. Exactly one of `data` and `uri` can be specified.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
