import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getTiersTier {
  // The maximum ram usage of this tier in bytes.
  Ram?: number;

  // The applicable regions for this tier.
  Regions?: Array<string>;

  // An identifier for the machine type, for example, db-custom-1-3840.
  Tier?: string;

  // The maximum disk size of this tier in bytes.
  DiskQuota?: number;
}

export function Sql_getTiersTier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Ram",
      "The maximum ram usage of this tier in bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Regions",
      "The applicable regions for this tier.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tier",
      "An identifier for the machine type, for example, db-custom-1-3840.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskQuota",
      "The maximum disk size of this tier in bytes.",
      [],
      true,
      false,
    ),
  ];
}
