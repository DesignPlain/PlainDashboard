import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  composer_EnvironmentStorageConfig,
  composer_EnvironmentStorageConfig_GetTypes,
} from "../types/composer_EnvironmentStorageConfig";
import {
  composer_EnvironmentConfig,
  composer_EnvironmentConfig_GetTypes,
} from "../types/composer_EnvironmentConfig";

export interface EnvironmentArgs {
  // Configuration options for storage used by Composer environment.
  storageConfig?: composer_EnvironmentStorageConfig;

  // Configuration parameters for this environment.
  config?: composer_EnvironmentConfig;

  /*
User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map
are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and
must conform to the following regular expression: [a-z]([-a-z0-9]-[a-z0-9])?. Label values must be between 0 and 63
characters long and must conform to the regular expression ([a-z]([-a-z0-9]-[a-z0-9])?)?. No more than 64 labels can be
associated with a given environment. Both keys and values must be <= 128 bytes in size. --Note--: This field is
non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Name of the environment.
  name?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  project?: string;

  // The location or Compute Engine region for the environment.
  region?: string;
}
export class Environment extends Resource {
  // The location or Compute Engine region for the environment.
  public region?: string;

  // Configuration options for storage used by Composer environment.
  public storageConfig?: composer_EnvironmentStorageConfig;

  // Configuration parameters for this environment.
  public config?: composer_EnvironmentConfig;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  /*
User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map
are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and
must conform to the following regular expression: [a-z]([-a-z0-9]-[a-z0-9])?. Label values must be between 0 and 63
characters long and must conform to the regular expression ([a-z]([-a-z0-9]-[a-z0-9])?)?. No more than 64 labels can be
associated with a given environment. Both keys and values must be <= 128 bytes in size. --Note--: This field is
non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the environment.
  public name?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map\nare UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and\nmust conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63\ncharacters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be\nassociated with a given environment. Both keys and values must be <= 128 bytes in size. **Note**: This field is\nnon-authoritative, and will only manage the labels present in your configuration. Please refer to the field\n'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the environment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The location or Compute Engine region for the environment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storageConfig",
        "Configuration options for storage used by Composer environment.",
        composer_EnvironmentStorageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "config",
        "Configuration parameters for this environment.",
        composer_EnvironmentConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
