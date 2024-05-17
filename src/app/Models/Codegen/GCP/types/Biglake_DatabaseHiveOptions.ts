import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Biglake_DatabaseHiveOptions {
  // Cloud Storage folder URI where the database data is stored, starting with "gs://".
  LocationUri?: string;

  /*
Stores user supplied Hive database parameters. An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

- - -
*/
  Parameters?: Map<string, string>;
}

export function Biglake_DatabaseHiveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LocationUri",
      'Cloud Storage folder URI where the database data is stored, starting with "gs://".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Parameters",
      'Stores user supplied Hive database parameters. An object containing a\nlist of"key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n- - -',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
