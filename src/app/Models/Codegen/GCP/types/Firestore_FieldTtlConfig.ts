import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firestore_FieldTtlConfig {
  /*
(Output)
The state of TTL (time-to-live) configuration for documents that have this Field set.
*/
  State?: string;
}

export function Firestore_FieldTtlConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nThe state of TTL (time-to-live) configuration for documents that have this Field set.",
      [],
      false,
      false,
    ),
  ];
}
