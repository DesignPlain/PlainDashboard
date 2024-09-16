import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_AppProfileStandardIsolation {
  /*
The priority of requests sent using this app profile.
Possible values are: `PRIORITY_LOW`, `PRIORITY_MEDIUM`, `PRIORITY_HIGH`.
*/
  priority?: string;
}

export function bigquery_AppProfileStandardIsolation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'priority',
      'The priority of requests sent using this app profile.\nPossible values are: `PRIORITY_LOW`, `PRIORITY_MEDIUM`, `PRIORITY_HIGH`.',
      () => [],
      true,
      false,
    ),
  ];
}
