import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  transfer_WorkflowStepTagStepDetailsTag,
  transfer_WorkflowStepTagStepDetailsTag_GetTypes,
} from "./transfer_WorkflowStepTagStepDetailsTag";

export interface transfer_WorkflowStepTagStepDetails {
  // The name of the step, used as an identifier.
  name?: string;

  // Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.
  sourceFileLocation?: string;

  // Array that contains from 1 to 10 key/value pairs. See S3 Tags below.
  tags?: Array<transfer_WorkflowStepTagStepDetailsTag>;
}

export function transfer_WorkflowStepTagStepDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the step, used as an identifier.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFileLocation",
      "Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Array that contains from 1 to 10 key/value pairs. See S3 Tags below.",
      transfer_WorkflowStepTagStepDetailsTag_GetTypes(),
      false,
      true,
    ),
  ];
}
