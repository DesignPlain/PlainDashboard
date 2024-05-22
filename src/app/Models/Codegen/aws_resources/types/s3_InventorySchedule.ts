import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_InventorySchedule {
  // Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.
  frequency?: string;
}

export function s3_InventorySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "frequency",
      "Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.",
      [],
      true,
      false,
    ),
  ];
}
