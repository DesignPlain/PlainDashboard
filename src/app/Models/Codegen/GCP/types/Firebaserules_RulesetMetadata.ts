import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebaserules_RulesetMetadata {
  // Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.
  Services?: Array<string>;
}

export function Firebaserules_RulesetMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Services",
      'Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
