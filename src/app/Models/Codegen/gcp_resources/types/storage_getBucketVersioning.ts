import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_getBucketVersioning {
  // While set to true, versioning is fully enabled for this bucket.
  enabled?: boolean;
}

export function storage_getBucketVersioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "While set to true, versioning is fully enabled for this bucket.",
      [],
      true,
      false,
    ),
  ];
}
