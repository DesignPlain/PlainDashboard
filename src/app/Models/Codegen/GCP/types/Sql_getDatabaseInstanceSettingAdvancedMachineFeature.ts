import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstanceSettingAdvancedMachineFeature {
  // The number of threads per physical core. Can be 1 or 2.
  threadsPerCore?: number;
}

export function sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "threadsPerCore",
      "The number of threads per physical core. Can be 1 or 2.",
      [],
      true,
      false,
    ),
  ];
}
