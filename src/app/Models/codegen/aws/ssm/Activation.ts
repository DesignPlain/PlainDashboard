import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ActivationArgs {
  // The default name of the registered managed instance.
  name?: string;

  // The maximum number of managed instances you want to register. The default value is 1 instance.
  registrationLimit?: number;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description of the resource that you want to register.
  description?: string;

  // UTC timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) by which this activation request should expire. The default value is 24 hours from resource creation time. This provider will only perform drift detection of its value when present in a configuration.
  expirationDate?: string;

  // The IAM Role to attach to the managed instance.
  iamRole?: string;
}
export class Activation extends DS_Resource {
  // The code the system generates when it processes the activation.
  public activationCode?: string;

  // If the current activation has expired.
  public expired?: boolean;

  // The IAM Role to attach to the managed instance.
  public iamRole?: string;

  // The number of managed instances that are currently registered using this activation.
  public registrationCount?: number;

  // The maximum number of managed instances you want to register. The default value is 1 instance.
  public registrationLimit?: number;

  // The description of the resource that you want to register.
  public description?: string;

  // UTC timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) by which this activation request should expire. The default value is 24 hours from resource creation time. This provider will only perform drift detection of its value when present in a configuration.
  public expirationDate?: string;

  // The default name of the registered managed instance.
  public name?: string;

  // A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "iamRole",
        "The IAM Role to attach to the managed instance.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The default name of the registered managed instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "registrationLimit",
        "The maximum number of managed instances you want to register. The default value is 1 instance.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the object. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the resource that you want to register.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expirationDate",
        "UTC timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) by which this activation request should expire. The default value is 24 hours from resource creation time. This provider will only perform drift detection of its value when present in a configuration.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
