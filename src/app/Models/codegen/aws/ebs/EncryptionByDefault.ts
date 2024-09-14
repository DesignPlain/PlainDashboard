import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EncryptionByDefaultArgs {
  // Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
  enabled?: boolean;
}
export class EncryptionByDefault extends DS_Resource {
  // Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
