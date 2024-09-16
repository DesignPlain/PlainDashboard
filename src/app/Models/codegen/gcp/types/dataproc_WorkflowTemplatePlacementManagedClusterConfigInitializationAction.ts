import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction {
  // Required. Cloud Storage URI of executable file.
  executableFile?: string;

  // Amount of time executable has to complete. Default is 10 minutes (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
  executionTimeout?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigInitializationAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'executableFile',
      'Required. Cloud Storage URI of executable file.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'executionTimeout',
      'Amount of time executable has to complete. Default is 10 minutes (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.',
      () => [],
      false,
      true,
    ),
  ];
}
