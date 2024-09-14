import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface KeyvaluestoreKeyArgs {
  // Key to put.
  key?: string;

  // Amazon Resource Name (ARN) of the Key Value Store.
  keyValueStoreArn?: string;

  // Value to put.
  value?: string;
}
export class KeyvaluestoreKey extends DS_Resource {
  // Key to put.
  public key?: string;

  // Amazon Resource Name (ARN) of the Key Value Store.
  public keyValueStoreArn?: string;

  // Total size of the Key Value Store in bytes.
  public totalSizeInBytes?: number;

  // Value to put.
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "key",
        "Key to put.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyValueStoreArn",
        "Amazon Resource Name (ARN) of the Key Value Store.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "value",
        "Value to put.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
