import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  transfer_WorkflowOnExceptionStep,
  transfer_WorkflowOnExceptionStep_GetTypes,
} from "../types/transfer_WorkflowOnExceptionStep";
import {
  transfer_WorkflowStep,
  transfer_WorkflowStep_GetTypes,
} from "../types/transfer_WorkflowStep";

export interface WorkflowArgs {
  // A textual description for the workflow.
  description?: string;

  // Specifies the steps (actions) to take if errors are encountered during execution of the workflow. See Workflow Steps below.
  onExceptionSteps?: Array<transfer_WorkflowOnExceptionStep>;

  // Specifies the details for the steps that are in the specified workflow. See Workflow Steps below.
  steps?: Array<transfer_WorkflowStep>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Workflow extends Resource {
  // The Workflow ARN.
  public arn?: string;

  // A textual description for the workflow.
  public description?: string;

  // Specifies the steps (actions) to take if errors are encountered during execution of the workflow. See Workflow Steps below.
  public onExceptionSteps?: Array<transfer_WorkflowOnExceptionStep>;

  // Specifies the details for the steps that are in the specified workflow. See Workflow Steps below.
  public steps?: Array<transfer_WorkflowStep>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A textual description for the workflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "onExceptionSteps",
        "Specifies the steps (actions) to take if errors are encountered during execution of the workflow. See Workflow Steps below.",
        transfer_WorkflowOnExceptionStep_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "steps",
        "Specifies the details for the steps that are in the specified workflow. See Workflow Steps below.",
        transfer_WorkflowStep_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
