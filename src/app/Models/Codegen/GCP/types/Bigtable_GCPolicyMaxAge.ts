import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigtable_GCPolicyMaxAge {
  // Number of days before applying GC policy.
  Days?: number;

  /*
Duration before applying GC policy (ex. "8h"). This is required when `days` isn't set

-----
*/
  Duration?: string;
}

export function Bigtable_GCPolicyMaxAge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Days",
      "Number of days before applying GC policy.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Duration",
      'Duration before applying GC policy (ex. "8h"). This is required when `days` isn\'t set\n\n-----',
      [],
      false,
      true,
    ),
  ];
}
