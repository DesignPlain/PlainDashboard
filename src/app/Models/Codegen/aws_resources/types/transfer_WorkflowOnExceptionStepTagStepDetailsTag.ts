import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface transfer_WorkflowOnExceptionStepTagStepDetailsTag {
  // The value that corresponds to the key.
  value?: string;

  // The name assigned to the tag that you create.
  key?: string;
}

export function transfer_WorkflowOnExceptionStepTagStepDetailsTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value that corresponds to the key.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name assigned to the tag that you create.",
      [],
      true,
      true,
    ),
  ];
}
