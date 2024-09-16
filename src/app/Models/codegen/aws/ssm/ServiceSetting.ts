import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ServiceSettingArgs {
  // Value of the service setting.
  settingValue?: string;

  // ID of the service setting.
  settingId?: string;
}
export class ServiceSetting extends DS_Resource {
  // ARN of the service setting.
  public arn?: string;

  // ID of the service setting.
  public settingId?: string;

  // Value of the service setting.
  public settingValue?: string;

  // Status of the service setting. Value can be `Default`, `Customized` or `PendingUpdate`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'settingId',
        'ID of the service setting.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'settingValue',
        'Value of the service setting.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
