import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_ApplicationAppSource {
  // Username to use when authenticating to the source.
  username?: string;

  // Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
  password?: string;

  // For sources that are version-aware, the revision to use.
  revision?: string;

  // SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
  sshKey?: string;

  // The type of source to use. For example, "archive".
  type?: string;

  // The URL where the app resource can be found.
  url?: string;
}

export function opsworks_ApplicationAppSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username to use when authenticating to the source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "For sources that are version-aware, the revision to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sshKey",
      "SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'The type of source to use. For example, "archive".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL where the app resource can be found.",
      [],
      false,
      false,
    ),
  ];
}
