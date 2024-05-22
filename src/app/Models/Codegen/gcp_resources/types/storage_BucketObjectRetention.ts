import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_BucketObjectRetention {
  // The retention policy mode. Either `Locked` or `Unlocked`.
  mode?: string;

  /*
The time to retain the object until in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.

<a name>
*/
  retainUntilTime?: string;
}

export function storage_BucketObjectRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The retention policy mode. Either `Locked` or `Unlocked`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "retainUntilTime",
      "The time to retain the object until in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.\n\n<a name>",
      [],
      true,
      false,
    ),
  ];
}
