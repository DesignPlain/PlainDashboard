import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface costexplorer_getTagsTimePeriod {
  // Beginning of the time period.
  end?: string;

  // End of the time period.
  start?: string;
}

export function costexplorer_getTagsTimePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "end",
      "Beginning of the time period.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "start",
      "End of the time period.",
      () => [],
      true,
      false,
    ),
  ];
}
