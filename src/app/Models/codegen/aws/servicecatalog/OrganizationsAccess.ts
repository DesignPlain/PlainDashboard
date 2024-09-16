import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface OrganizationsAccessArgs {
  // Whether to enable AWS Organizations access.
  enabled?: boolean;
}
export class OrganizationsAccess extends DS_Resource {
  // Whether to enable AWS Organizations access.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Whether to enable AWS Organizations access.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
