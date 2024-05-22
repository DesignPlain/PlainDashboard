import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securitylake_DataLakeConfigurationLifecycleConfigurationTransition,
  securitylake_DataLakeConfigurationLifecycleConfigurationTransition_GetTypes,
} from "./securitylake_DataLakeConfigurationLifecycleConfigurationTransition";
import {
  securitylake_DataLakeConfigurationLifecycleConfigurationExpiration,
  securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes,
} from "./securitylake_DataLakeConfigurationLifecycleConfigurationExpiration";

export interface securitylake_DataLakeConfigurationLifecycleConfiguration {
  // Provides data storage transition details of Amazon Security Lake object.
  transitions?: Array<securitylake_DataLakeConfigurationLifecycleConfigurationTransition>;

  // Provides data expiration details of Amazon Security Lake object.
  expiration?: securitylake_DataLakeConfigurationLifecycleConfigurationExpiration;
}

export function securitylake_DataLakeConfigurationLifecycleConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "transitions",
      "Provides data storage transition details of Amazon Security Lake object.",
      securitylake_DataLakeConfigurationLifecycleConfigurationTransition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Provides data expiration details of Amazon Security Lake object.",
      securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes(),
      false,
      false,
    ),
  ];
}
