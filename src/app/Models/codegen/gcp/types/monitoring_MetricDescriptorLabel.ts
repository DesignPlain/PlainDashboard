import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_MetricDescriptorLabel {
  // The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]-
  key?: string;

  /*
The type of data that can be assigned to the label.
Default value is `STRING`.
Possible values are: `STRING`, `BOOL`, `INT64`.
*/
  valueType?: string;

  // A human-readable description for the label.
  description?: string;
}

export function monitoring_MetricDescriptorLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'valueType',
      'The type of data that can be assigned to the label.\nDefault value is `STRING`.\nPossible values are: `STRING`, `BOOL`, `INT64`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'A human-readable description for the label.',
      () => [],
      false,
      false,
    ),
  ];
}
