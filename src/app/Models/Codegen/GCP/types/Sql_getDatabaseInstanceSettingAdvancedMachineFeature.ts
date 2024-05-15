import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceSettingAdvancedMachineFeature {
  // The number of threads per physical core. Can be 1 or 2.
  ThreadsPerCore?: number;
}

export function Sql_getDatabaseInstanceSettingAdvancedMachineFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ThreadsPerCore",
      "The number of threads per physical core. Can be 1 or 2.",
      [],
      true,
      false,
    ),
  ];
}
