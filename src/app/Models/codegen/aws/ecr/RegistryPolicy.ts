import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RegistryPolicyArgs {
  // The policy document. This is a JSON formatted string.
  policy?: string;
}
export class RegistryPolicy extends DS_Resource {
  // The policy document. This is a JSON formatted string.
  public policy?: string;

  // The registry ID where the registry was created.
  public registryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The policy document. This is a JSON formatted string.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
