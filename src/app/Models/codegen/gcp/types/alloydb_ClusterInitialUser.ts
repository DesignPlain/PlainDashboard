import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alloydb_ClusterInitialUser {
  /*
The initial password for the user.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // The database username.
  user?: string;
}

export function alloydb_ClusterInitialUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'password',
      'The initial password for the user.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'user',
      'The database username.',
      () => [],
      false,
      false,
    ),
  ];
}
