import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ServiceSettingArgs {
  // ID of the service setting.
  settingId?: string;

  // Value of the service setting.
  settingValue?: string;
}
export class ServiceSetting extends Resource {
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
        "settingId",
        "ID of the service setting.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "settingValue",
        "Value of the service setting.",
        [],
        true,
        false,
      ),
    ];
  }
}
