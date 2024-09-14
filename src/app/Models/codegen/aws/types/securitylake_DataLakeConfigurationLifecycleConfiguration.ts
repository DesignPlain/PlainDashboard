import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitylake_DataLakeConfigurationLifecycleConfigurationExpiration,
  securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes,
} from "./securitylake_DataLakeConfigurationLifecycleConfigurationExpiration";
import {
  securitylake_DataLakeConfigurationLifecycleConfigurationTransition,
  securitylake_DataLakeConfigurationLifecycleConfigurationTransition_GetTypes,
} from "./securitylake_DataLakeConfigurationLifecycleConfigurationTransition";

export interface securitylake_DataLakeConfigurationLifecycleConfiguration {
  // Provides data expiration details of Amazon Security Lake object.
  expiration?: securitylake_DataLakeConfigurationLifecycleConfigurationExpiration;

  // Provides data storage transition details of Amazon Security Lake object.
  transitions?: Array<securitylake_DataLakeConfigurationLifecycleConfigurationTransition>;
}

export function securitylake_DataLakeConfigurationLifecycleConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Provides data expiration details of Amazon Security Lake object.",
      () =>
        securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitions",
      "Provides data storage transition details of Amazon Security Lake object.",
      () =>
        securitylake_DataLakeConfigurationLifecycleConfigurationTransition_GetTypes(),
      false,
      false,
    ),
  ];
}
