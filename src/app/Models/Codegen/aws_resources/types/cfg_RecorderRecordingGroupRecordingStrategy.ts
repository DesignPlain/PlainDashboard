import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_RecorderRecordingGroupRecordingStrategy {
  //
  useOnly?: string;
}

export function cfg_RecorderRecordingGroupRecordingStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "useOnly", "", [], false, false),
  ];
}
