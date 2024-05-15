import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firestore_FieldIndexConfigIndex,
  Firestore_FieldIndexConfigIndex_GetTypes,
} from "./Firestore_FieldIndexConfigIndex";

export interface Firestore_FieldIndexConfig {
  /*
The indexes to configure on the field. Order or array contains must be specified.
Structure is documented below.
*/
  Indexes?: Array<Firestore_FieldIndexConfigIndex>;
}

export function Firestore_FieldIndexConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Indexes",
      "The indexes to configure on the field. Order or array contains must be specified.\nStructure is documented below.",
      Firestore_FieldIndexConfigIndex_GetTypes(),
      false,
      false,
    ),
  ];
}
