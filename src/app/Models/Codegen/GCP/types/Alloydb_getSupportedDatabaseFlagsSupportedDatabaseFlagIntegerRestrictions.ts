import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions {
  // The minimum value that can be specified, if applicable.
  MinValue?: string;

  // The maximum value that can be specified, if applicable.
  MaxValue?: string;
}

export function Alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MinValue",
      "The minimum value that can be specified, if applicable.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxValue",
      "The maximum value that can be specified, if applicable.",
      [],
      true,
      false,
    ),
  ];
}
