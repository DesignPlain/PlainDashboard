import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opsworks_StackCustomCookbooksSource {
  // Password to use when authenticating to the source. The provider cannot perform drift detection of this configuration.
  password?: string;

  // For sources that are version-aware, the revision to use.
  revision?: string;

  // SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
  sshKey?: string;

  // The type of source to use. For example, "archive".
  type?: string;

  // The URL where the cookbooks resource can be found.
  url?: string;

  // Username to use when authenticating to the source.
  username?: string;
}

export function opsworks_StackCustomCookbooksSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username to use when authenticating to the source.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password to use when authenticating to the source. The provider cannot perform drift detection of this configuration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "For sources that are version-aware, the revision to use.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sshKey",
      "SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'The type of source to use. For example, "archive".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL where the cookbooks resource can be found.",
      () => [],
      true,
      false,
    ),
  ];
}
