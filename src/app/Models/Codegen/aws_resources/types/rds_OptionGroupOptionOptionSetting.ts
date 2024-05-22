import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_OptionGroupOptionOptionSetting {
  // Name of the setting.
  name?: string;

  // Value of the setting.
  value?: string;
}

export function rds_OptionGroupOptionOptionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the setting.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the setting.",
      [],
      true,
      false,
    ),
  ];
}
