import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration,
  kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration_GetTypes,
} from "./kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration";
import {
  kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration,
  kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration_GetTypes,
} from "./kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration";

export interface kendra_IndexUserTokenConfigurations {
  // A block that specifies the information about the JSON token type configuration. Detailed below.
  jsonTokenTypeConfiguration?: kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration;

  // A block that specifies the information about the JWT token type configuration. Detailed below.
  jwtTokenTypeConfiguration?: kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration;
}

export function kendra_IndexUserTokenConfigurations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jsonTokenTypeConfiguration",
      "A block that specifies the information about the JSON token type configuration. Detailed below.",
      kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jwtTokenTypeConfiguration",
      "A block that specifies the information about the JWT token type configuration. Detailed below.",
      kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
