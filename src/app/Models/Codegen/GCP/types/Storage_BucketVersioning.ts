import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketVersioning {
  // While set to `true`, versioning is fully enabled for this bucket.
  Enabled?: boolean;
}

export function Storage_BucketVersioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "While set to `true`, versioning is fully enabled for this bucket.",
      [],
      true,
      false,
    ),
  ];
}
