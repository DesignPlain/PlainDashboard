import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration,
  kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration_GetTypes,
} from "./kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration";
import {
  kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration,
  kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration_GetTypes,
} from "./kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration";

export interface kendra_getIndexUserTokenConfiguration {
  // A block that specifies the information about the JSON token type configuration.
  jsonTokenTypeConfigurations?: Array<kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration>;

  // A block that specifies the information about the JWT token type configuration.
  jwtTokenTypeConfigurations?: Array<kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration>;
}

export function kendra_getIndexUserTokenConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "jwtTokenTypeConfigurations",
      "A block that specifies the information about the JWT token type configuration.",
      () =>
        kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jsonTokenTypeConfigurations",
      "A block that specifies the information about the JSON token type configuration.",
      () =>
        kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
