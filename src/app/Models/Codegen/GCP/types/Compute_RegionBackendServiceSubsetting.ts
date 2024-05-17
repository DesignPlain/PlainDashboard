import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionBackendServiceSubsetting {
  /*
The algorithm used for subsetting.
Possible values are: `CONSISTENT_HASH_SUBSETTING`.
*/
  Policy?: string;
}

export function Compute_RegionBackendServiceSubsetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Policy",
      "The algorithm used for subsetting.\nPossible values are: `CONSISTENT_HASH_SUBSETTING`.",
      [],
      true,
      false,
    ),
  ];
}
