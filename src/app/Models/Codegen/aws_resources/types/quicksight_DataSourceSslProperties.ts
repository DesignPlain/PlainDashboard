import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSourceSslProperties {
  // A Boolean option to control whether SSL should be disabled.
  disableSsl?: boolean;
}

export function quicksight_DataSourceSslProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disableSsl",
      "A Boolean option to control whether SSL should be disabled.",
      [],
      true,
      false,
    ),
  ];
}
