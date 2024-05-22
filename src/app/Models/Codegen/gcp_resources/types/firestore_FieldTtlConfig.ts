import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firestore_FieldTtlConfig {
  /*
(Output)
The state of TTL (time-to-live) configuration for documents that have this Field set.
*/
  state?: string;
}

export function firestore_FieldTtlConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nThe state of TTL (time-to-live) configuration for documents that have this Field set.",
      [],
      false,
      false,
    ),
  ];
}
