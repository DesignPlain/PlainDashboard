import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetDataSetUsageConfiguration {
  //
  disableUseAsDirectQuerySource?: boolean;

  //
  disableUseAsImportedSource?: boolean;
}

export function quicksight_getDataSetDataSetUsageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disableUseAsDirectQuerySource",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableUseAsImportedSource",
      "",
      [],
      true,
      false,
    ),
  ];
}
