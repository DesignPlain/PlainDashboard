import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
  // A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance.
  uniqueKey?: boolean;
}

export function quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "uniqueKey",
      "A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance.",
      [],
      false,
      false,
    ),
  ];
}
