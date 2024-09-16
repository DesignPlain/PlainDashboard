import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RecorderStatusArgs {
  // Whether the configuration recorder should be enabled or disabled.
  isEnabled?: boolean;

  // The name of the recorder
  name?: string;
}
export class RecorderStatus extends DS_Resource {
  // Whether the configuration recorder should be enabled or disabled.
  public isEnabled?: boolean;

  // The name of the recorder
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the recorder',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'isEnabled',
        'Whether the configuration recorder should be enabled or disabled.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
