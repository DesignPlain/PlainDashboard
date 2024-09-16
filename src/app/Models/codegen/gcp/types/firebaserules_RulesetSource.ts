import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  firebaserules_RulesetSourceFile,
  firebaserules_RulesetSourceFile_GetTypes,
} from './firebaserules_RulesetSourceFile';

export interface firebaserules_RulesetSource {
  // `File` set constituting the `Source` bundle.
  files?: Array<firebaserules_RulesetSourceFile>;

  // `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS
  language?: string;
}

export function firebaserules_RulesetSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'files',
      '`File` set constituting the `Source` bundle.',
      () => firebaserules_RulesetSourceFile_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'language',
      '`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS',
      () => [],
      false,
      true,
    ),
  ];
}
