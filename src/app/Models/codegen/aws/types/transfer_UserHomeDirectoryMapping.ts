import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_UserHomeDirectoryMapping {
  // Represents an entry and a target.
  entry?: string;

  /*
Represents the map target.

The `Restricted` option is achieved using the following mapping:

```
home_directory_mappings {
entry  = "/"
target = "/${aws_s3_bucket.foo.id}/$${Transfer:UserName}"
}
```
*/
  target?: string;
}

export function transfer_UserHomeDirectoryMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      'Represents the map target.\n\nThe `Restricted` option is achieved using the following mapping:\n\n```\nhome_directory_mappings {\nentry  = "/"\ntarget = "/${aws_s3_bucket.foo.id}/$${Transfer:UserName}"\n}\n```',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entry",
      "Represents an entry and a target.",
      () => [],
      true,
      false,
    ),
  ];
}
