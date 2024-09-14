import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_SecurityConfigurationEncryptionConfiguration,
  glue_SecurityConfigurationEncryptionConfiguration_GetTypes,
} from "../types/glue_SecurityConfigurationEncryptionConfiguration";

export interface SecurityConfigurationArgs {
  // Configuration block containing encryption configuration. Detailed below.
  encryptionConfiguration?: glue_SecurityConfigurationEncryptionConfiguration;

  // Name of the security configuration.
  name?: string;
}
export class SecurityConfiguration extends DS_Resource {
  // Name of the security configuration.
  public name?: string;

  // Configuration block containing encryption configuration. Detailed below.
  public encryptionConfiguration?: glue_SecurityConfigurationEncryptionConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "Configuration block containing encryption configuration. Detailed below.",
        () => glue_SecurityConfigurationEncryptionConfiguration_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the security configuration.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
