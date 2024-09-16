import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface biglake_DatabaseHiveOptions {
  // Cloud Storage folder URI where the database data is stored, starting with "gs://".
  locationUri?: string;

  /*
Stores user supplied Hive database parameters. An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

- - -
*/
  parameters?: Map<string, string>;
}

export function biglake_DatabaseHiveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'locationUri',
      'Cloud Storage folder URI where the database data is stored, starting with "gs://".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'parameters',
      'Stores user supplied Hive database parameters. An object containing a\nlist of"key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n- - -',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
