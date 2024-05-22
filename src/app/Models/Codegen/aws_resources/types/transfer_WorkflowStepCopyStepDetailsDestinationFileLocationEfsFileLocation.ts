import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation {
  // The ID of the file system, assigned by Amazon EFS.
  fileSystemId?: string;

  // The pathname for the folder being used by a workflow.
  path?: string;
}

export function transfer_WorkflowStepCopyStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemId",
      "The ID of the file system, assigned by Amazon EFS.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The pathname for the folder being used by a workflow.",
      [],
      false,
      true,
    ),
  ];
}
