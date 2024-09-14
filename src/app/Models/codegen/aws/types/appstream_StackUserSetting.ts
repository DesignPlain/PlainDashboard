import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appstream_StackUserSetting {
  /*
Action that is enabled or disabled.
Valid values are `CLIPBOARD_COPY_FROM_LOCAL_DEVICE`,  `CLIPBOARD_COPY_TO_LOCAL_DEVICE`, `FILE_UPLOAD`, `FILE_DOWNLOAD`, `PRINTING_TO_LOCAL_DEVICE`, `DOMAIN_PASSWORD_SIGNIN`, or `DOMAIN_SMART_CARD_SIGNIN`.
*/
  action?: string;

  /*
Whether the action is enabled or disabled.
Valid values are `ENABLED` or `DISABLED`.
*/
  permission?: string;
}

export function appstream_StackUserSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action that is enabled or disabled.\nValid values are `CLIPBOARD_COPY_FROM_LOCAL_DEVICE`,  `CLIPBOARD_COPY_TO_LOCAL_DEVICE`, `FILE_UPLOAD`, `FILE_DOWNLOAD`, `PRINTING_TO_LOCAL_DEVICE`, `DOMAIN_PASSWORD_SIGNIN`, or `DOMAIN_SMART_CARD_SIGNIN`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "permission",
      "Whether the action is enabled or disabled.\nValid values are `ENABLED` or `DISABLED`.",
      () => [],
      true,
      false,
    ),
  ];
}
