import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketObjectRetention {
  // The retention policy mode. Either `Locked` or `Unlocked`.
  Mode?: string;

  /*
The time to retain the object until in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.

<a name>
*/
  RetainUntilTime?: string;
}

export function Storage_BucketObjectRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "The retention policy mode. Either `Locked` or `Unlocked`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RetainUntilTime",
      "The time to retain the object until in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.\n\n<a name>",
      [],
      true,
      false,
    ),
  ];
}
