import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ComponentArgs {
  // Change description of the component.
  changeDescription?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the component.
  kmsKeyId?: string;

  // Whether to retain the old version when the resource is destroyed or replacement is necessary. Defaults to `false`.
  skipDestroy?: boolean;

  // Set of Operating Systems (OS) supported by the component.
  supportedOsVersions?: Array<string>;

  /*
S3 URI with data of the component. Exactly one of `data` and `uri` can be specified.

> --NOTE:-- Updating `data` or `uri` requires specifying a new `version`. This causes replacement of the resource. The `skip_destroy` argument can be used to retain the old version.
*/
  uri?: string;

  // Inline YAML string with data of the component. Exactly one of `data` and `uri` can be specified. the provider will only perform drift detection of its value when present in a configuration.
  data?: string;

  // Description of the component.
  description?: string;

  // Name of the component.
  name?: string;

  // Platform of the component.
  platform?: string;

  // Key-value map of resource tags for the component. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Version of the component.

The following attributes are optional:
*/
  version?: string;
}
export class Component extends DS_Resource {
  // (Required) Amazon Resource Name (ARN) of the component.
  public arn?: string;

  // Date the component was created.
  public dateCreated?: string;

  // Encryption status of the component.
  public encrypted?: boolean;

  // Platform of the component.
  public platform?: string;

  // Type of the component.
  public type?: string;

  /*
S3 URI with data of the component. Exactly one of `data` and `uri` can be specified.

> --NOTE:-- Updating `data` or `uri` requires specifying a new `version`. This causes replacement of the resource. The `skip_destroy` argument can be used to retain the old version.
*/
  public uri?: string;

  /*
Version of the component.

The following attributes are optional:
*/
  public version?: string;

  // Inline YAML string with data of the component. Exactly one of `data` and `uri` can be specified. the provider will only perform drift detection of its value when present in a configuration.
  public data?: string;

  // Owner of the component.
  public owner?: string;

  // Whether to retain the old version when the resource is destroyed or replacement is necessary. Defaults to `false`.
  public skipDestroy?: boolean;

  // Change description of the component.
  public changeDescription?: string;

  // Description of the component.
  public description?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the component.
  public kmsKeyId?: string;

  // Name of the component.
  public name?: string;

  // Set of Operating Systems (OS) supported by the component.
  public supportedOsVersions?: Array<string>;

  // Key-value map of resource tags for the component. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Whether to retain the old version when the resource is destroyed or replacement is necessary. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platform",
        "Platform of the component.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the component. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version of the component.\n\nThe following attributes are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "data",
        "Inline YAML string with data of the component. Exactly one of `data` and `uri` can be specified. the provider will only perform drift detection of its value when present in a configuration.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the component.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the component.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "changeDescription",
        "Change description of the component.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the component.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "supportedOsVersions",
        "Set of Operating Systems (OS) supported by the component.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "uri",
        "S3 URI with data of the component. Exactly one of `data` and `uri` can be specified.\n\n> **NOTE:** Updating `data` or `uri` requires specifying a new `version`. This causes replacement of the resource. The `skip_destroy` argument can be used to retain the old version.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
