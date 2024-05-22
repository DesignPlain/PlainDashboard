import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowSourceFlowConfigIncrementalPullConfig {
  // Field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
  datetimeTypeFieldName?: string;
}

export function appflow_FlowSourceFlowConfigIncrementalPullConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datetimeTypeFieldName",
      "Field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.",
      [],
      false,
      false,
    ),
  ];
}
