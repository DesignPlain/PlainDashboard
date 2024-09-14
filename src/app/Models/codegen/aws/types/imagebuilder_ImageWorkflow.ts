import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ImageWorkflowParameter,
  imagebuilder_ImageWorkflowParameter_GetTypes,
} from "./imagebuilder_ImageWorkflowParameter";

export interface imagebuilder_ImageWorkflow {
  // The action to take if the workflow fails. Must be one of `CONTINUE` or `ABORT`.
  onFailure?: string;

  // The parallel group in which to run a test Workflow.
  parallelGroup?: string;

  // Configuration block for the workflow parameters. Detailed below.
  parameters?: Array<imagebuilder_ImageWorkflowParameter>;

  /*
Amazon Resource Name (ARN) of the Image Builder Workflow.

The following arguments are optional:
*/
  workflowArn?: string;
}

export function imagebuilder_ImageWorkflow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "workflowArn",
      "Amazon Resource Name (ARN) of the Image Builder Workflow.\n\nThe following arguments are optional:",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "onFailure",
      "The action to take if the workflow fails. Must be one of `CONTINUE` or `ABORT`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "parallelGroup",
      "The parallel group in which to run a test Workflow.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Configuration block for the workflow parameters. Detailed below.",
      () => imagebuilder_ImageWorkflowParameter_GetTypes(),
      false,
      true,
    ),
  ];
}
