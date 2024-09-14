import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrcontainers_JobTemplateJobTemplateData,
  emrcontainers_JobTemplateJobTemplateData_GetTypes,
} from "../types/emrcontainers_JobTemplateJobTemplateData";

export interface JobTemplateArgs {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The job template data which holds values of StartJobRun API request.
  jobTemplateData?: emrcontainers_JobTemplateJobTemplateData;

  // The KMS key ARN used to encrypt the job template.
  kmsKeyArn?: string;

  // The specified name of the job template.
  name?: string;
}
export class JobTemplate extends DS_Resource {
  // The specified name of the job template.
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the job template.
  public arn?: string;

  // The job template data which holds values of StartJobRun API request.
  public jobTemplateData?: emrcontainers_JobTemplateJobTemplateData;

  // The KMS key ARN used to encrypt the job template.
  public kmsKeyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jobTemplateData",
        "The job template data which holds values of StartJobRun API request.",
        () => emrcontainers_JobTemplateJobTemplateData_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "The KMS key ARN used to encrypt the job template.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The specified name of the job template.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
