import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_SecurityConfigurationEncryptionConfiguration,
  glue_SecurityConfigurationEncryptionConfiguration_GetTypes,
} from "../types/glue_SecurityConfigurationEncryptionConfiguration";

export interface SecurityConfigurationArgs {
  // Name of the security configuration.
  name?: string;

  // Configuration block containing encryption configuration. Detailed below.
  encryptionConfiguration?: glue_SecurityConfigurationEncryptionConfiguration;
}
export class SecurityConfiguration extends Resource {
  // Configuration block containing encryption configuration. Detailed below.
  public encryptionConfiguration?: glue_SecurityConfigurationEncryptionConfiguration;

  // Name of the security configuration.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the security configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "Configuration block containing encryption configuration. Detailed below.",
        glue_SecurityConfigurationEncryptionConfiguration_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
