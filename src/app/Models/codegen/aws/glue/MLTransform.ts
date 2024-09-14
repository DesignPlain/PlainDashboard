import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_MLTransformParameters,
  glue_MLTransformParameters_GetTypes,
} from "../types/glue_MLTransformParameters";
import {
  glue_MLTransformInputRecordTable,
  glue_MLTransformInputRecordTable_GetTypes,
} from "../types/glue_MLTransformInputRecordTable";
import {
  glue_MLTransformSchema,
  glue_MLTransformSchema_GetTypes,
} from "../types/glue_MLTransformSchema";

export interface MLTransformArgs {
  // The number of workers of a defined `worker_type` that are allocated when an ML Transform runs. Required with `worker_type`.
  numberOfWorkers?: number;

  // The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type. see Parameters.
  parameters?: glue_MLTransformParameters;

  // The ML Transform timeout in minutes. The default is 2880 minutes (48 hours).
  timeout?: number;

  // Description of the ML Transform.
  description?: string;

  // A list of AWS Glue table definitions used by the transform. see Input Record Tables.
  inputRecordTables?: Array<glue_MLTransformInputRecordTable>;

  // The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from `2` to `100` DPUs; the default is `10`. `max_capacity` is a mutually exclusive option with `number_of_workers` and `worker_type`.
  maxCapacity?: number;

  // The maximum number of times to retry this ML Transform if it fails.
  maxRetries?: number;

  // The name you assign to this ML Transform. It must be unique in your account.
  name?: string;

  // The version of glue to use, for example "1.0". For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).
  glueVersion?: string;

  // The ARN of the IAM role associated with this ML Transform.
  roleArn?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of predefined worker that is allocated when an ML Transform runs. Accepts a value of `Standard`, `G.1X`, or `G.2X`. Required with `number_of_workers`.
  workerType?: string;
}
export class MLTransform extends DS_Resource {
  // A list of AWS Glue table definitions used by the transform. see Input Record Tables.
  public inputRecordTables?: Array<glue_MLTransformInputRecordTable>;

  // The number of workers of a defined `worker_type` that are allocated when an ML Transform runs. Required with `worker_type`.
  public numberOfWorkers?: number;

  // The ML Transform timeout in minutes. The default is 2880 minutes (48 hours).
  public timeout?: number;

  // The number of labels available for this transform.
  public labelCount?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name you assign to this ML Transform. It must be unique in your account.
  public name?: string;

  // The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type. see Parameters.
  public parameters?: glue_MLTransformParameters;

  // The ARN of the IAM role associated with this ML Transform.
  public roleArn?: string;

  // The type of predefined worker that is allocated when an ML Transform runs. Accepts a value of `Standard`, `G.1X`, or `G.2X`. Required with `number_of_workers`.
  public workerType?: string;

  // The maximum number of times to retry this ML Transform if it fails.
  public maxRetries?: number;

  // The object that represents the schema that this transform accepts. see Schema.
  public schemas?: Array<glue_MLTransformSchema>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of Glue ML Transform.
  public arn?: string;

  // Description of the ML Transform.
  public description?: string;

  // The version of glue to use, for example "1.0". For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).
  public glueVersion?: string;

  // The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from `2` to `100` DPUs; the default is `10`. `max_capacity` is a mutually exclusive option with `number_of_workers` and `worker_type`.
  public maxCapacity?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "numberOfWorkers",
        "The number of workers of a defined `worker_type` that are allocated when an ML Transform runs. Required with `worker_type`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "parameters",
        "The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type. see Parameters.",
        () => glue_MLTransformParameters_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inputRecordTables",
        "A list of AWS Glue table definitions used by the transform. see Input Record Tables.",
        () => glue_MLTransformInputRecordTable_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name you assign to this ML Transform. It must be unique in your account.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "glueVersion",
        'The version of glue to use, for example "1.0". For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the IAM role associated with this ML Transform.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeout",
        "The ML Transform timeout in minutes. The default is 2880 minutes (48 hours).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the ML Transform.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxCapacity",
        "The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from `2` to `100` DPUs; the default is `10`. `max_capacity` is a mutually exclusive option with `number_of_workers` and `worker_type`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxRetries",
        "The maximum number of times to retry this ML Transform if it fails.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workerType",
        "The type of predefined worker that is allocated when an ML Transform runs. Accepts a value of `Standard`, `G.1X`, or `G.2X`. Required with `number_of_workers`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
