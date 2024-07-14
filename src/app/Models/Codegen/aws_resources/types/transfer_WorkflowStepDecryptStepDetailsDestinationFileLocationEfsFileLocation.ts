import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  // The pathname for the folder being used by a workflow.
  path?: string;

  // The ID of the file system, assigned by Amazon EFS.
  fileSystemId?: string;
}

export function transfer_WorkflowStepDecryptStepDetailsDestinationFileLocationEfsFileLocation_GetTypes(): DynamicUIProps[] {
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
