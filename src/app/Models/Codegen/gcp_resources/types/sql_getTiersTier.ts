import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getTiersTier {
  // The maximum disk size of this tier in bytes.
  diskQuota?: number;

  // The maximum ram usage of this tier in bytes.
  ram?: number;

  // The applicable regions for this tier.
  regions?: Array<string>;

  // An identifier for the machine type, for example, db-custom-1-3840.
  tier?: string;
}

export function sql_getTiersTier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "diskQuota",
      "The maximum disk size of this tier in bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ram",
      "The maximum ram usage of this tier in bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "The applicable regions for this tier.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tier",
      "An identifier for the machine type, for example, db-custom-1-3840.",
      [],
      true,
      false,
    ),
  ];
}
