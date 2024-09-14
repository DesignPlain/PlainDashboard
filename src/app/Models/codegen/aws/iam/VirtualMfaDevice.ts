import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VirtualMfaDeviceArgs {
  // The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device.
  virtualMfaDeviceName?: string;

  // The path for the virtual MFA device.
  path?: string;

  // Map of resource tags for the virtual mfa device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VirtualMfaDevice extends DS_Resource {
  // The Amazon Resource Name (ARN) specifying the virtual mfa device.
  public arn?: string;

  // The base32 seed defined as specified in [RFC3548](https://tools.ietf.org/html/rfc3548.txt). The `base_32_string_seed` is base64-encoded.
  public base32StringSeed?: string;

  // A QR code PNG image that encodes `otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String` where `$virtualMFADeviceName` is one of the create call arguments. AccountName is the user name if set (otherwise, the account ID), and Base32String is the seed in base32 format.
  public qrCodePng?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The associated IAM User name if the virtual MFA device is enabled.
  public userName?: string;

  // The date and time when the virtual MFA device was enabled.
  public enableDate?: string;

  // The path for the virtual MFA device.
  public path?: string;

  // Map of resource tags for the virtual mfa device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device.
  public virtualMfaDeviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "virtualMfaDeviceName",
        "The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "path",
        "The path for the virtual MFA device.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags for the virtual mfa device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
