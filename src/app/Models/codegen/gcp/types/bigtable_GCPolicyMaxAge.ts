import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigtable_GCPolicyMaxAge {
  // Number of days before applying GC policy.
  days?: number;

  /*
Duration before applying GC policy (ex. "8h"). This is required when `days` isn't set

-----
*/
  duration?: string;
}

export function bigtable_GCPolicyMaxAge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days before applying GC policy.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "duration",
      'Duration before applying GC policy (ex. "8h"). This is required when `days` isn\'t set\n\n-----',
      () => [],
      false,
      true,
    ),
  ];
}
