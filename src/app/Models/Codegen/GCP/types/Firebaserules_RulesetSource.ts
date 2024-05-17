import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebaserules_RulesetSourceFile,
  Firebaserules_RulesetSourceFile_GetTypes,
} from "./Firebaserules_RulesetSourceFile";

export interface Firebaserules_RulesetSource {
  // `File` set constituting the `Source` bundle.
  Files?: Array<Firebaserules_RulesetSourceFile>;

  // `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS
  Language?: string;
}

export function Firebaserules_RulesetSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Files",
      "`File` set constituting the `Source` bundle.",
      Firebaserules_RulesetSourceFile_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Language",
      "`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS",
      [],
      false,
      true,
    ),
  ];
}
