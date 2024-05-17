import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketObjectContentRetention {
  // The object retention mode. Supported values include: "Unlocked", "Locked".
  Mode?: string;

  // Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.
  RetainUntilTime?: string;
}

export function Storage_getBucketObjectContentRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RetainUntilTime",
      "Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Mode",
      'The object retention mode. Supported values include: "Unlocked", "Locked".',
      [],
      true,
      false,
    ),
  ];
}
