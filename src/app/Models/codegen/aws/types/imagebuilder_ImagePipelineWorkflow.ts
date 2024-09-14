import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ImagePipelineWorkflowParameter,
  imagebuilder_ImagePipelineWorkflowParameter_GetTypes,
} from "./imagebuilder_ImagePipelineWorkflowParameter";

export interface imagebuilder_ImagePipelineWorkflow {
  // Configuration block for the workflow parameters. Detailed below.
  parameters?: Array<imagebuilder_ImagePipelineWorkflowParameter>;

  /*
Amazon Resource Name (ARN) of the Image Builder Workflow.

The following arguments are optional:
*/
  workflowArn?: string;

  // The action to take if the workflow fails. Must be one of `CONTINUE` or `ABORT`.
  onFailure?: string;

  // The parallel group in which to run a test Workflow.
  parallelGroup?: string;
}

export function imagebuilder_ImagePipelineWorkflow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Configuration block for the workflow parameters. Detailed below.",
      () => imagebuilder_ImagePipelineWorkflowParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workflowArn",
      "Amazon Resource Name (ARN) of the Image Builder Workflow.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onFailure",
      "The action to take if the workflow fails. Must be one of `CONTINUE` or `ABORT`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parallelGroup",
      "The parallel group in which to run a test Workflow.",
      () => [],
      false,
      false,
    ),
  ];
}
