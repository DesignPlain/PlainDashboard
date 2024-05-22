import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface costexplorer_getTagsTimePeriod {
  // End of the time period.
  start?: string;

  // Beginning of the time period.
  end?: string;
}

export function costexplorer_getTagsTimePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "end",
      "Beginning of the time period.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "start",
      "End of the time period.",
      [],
      true,
      false,
    ),
  ];
}
