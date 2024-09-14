import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface UserPoolUICustomizationArgs {
  // The client ID for the client app. Defaults to `ALL`. If `ALL` is specified, the `css` and/or `image_file` settings will be used for every client that has no UI customization set previously.
  clientId?: string;

  // The CSS values in the UI customization, provided as a String. At least one of `css` or `image_file` is required.
  css?: string;

  // The uploaded logo image for the UI customization, provided as a base64-encoded String. Drift detection is not possible for this argument. At least one of `css` or `image_file` is required.
  imageFile?: string;

  // The user pool ID for the user pool.
  userPoolId?: string;
}
export class UserPoolUICustomization extends DS_Resource {
  // The creation date in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) for the UI customization.
  public creationDate?: string;

  // The CSS values in the UI customization, provided as a String. At least one of `css` or `image_file` is required.
  public css?: string;

  // The CSS version number.
  public cssVersion?: string;

  // The uploaded logo image for the UI customization, provided as a base64-encoded String. Drift detection is not possible for this argument. At least one of `css` or `image_file` is required.
  public imageFile?: string;

  // The logo image URL for the UI customization.
  public imageUrl?: string;

  // The last-modified date in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) for the UI customization.
  public lastModifiedDate?: string;

  // The user pool ID for the user pool.
  public userPoolId?: string;

  // The client ID for the client app. Defaults to `ALL`. If `ALL` is specified, the `css` and/or `image_file` settings will be used for every client that has no UI customization set previously.
  public clientId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clientId",
        "The client ID for the client app. Defaults to `ALL`. If `ALL` is specified, the `css` and/or `image_file` settings will be used for every client that has no UI customization set previously.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "css",
        "The CSS values in the UI customization, provided as a String. At least one of `css` or `image_file` is required.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageFile",
        "The uploaded logo image for the UI customization, provided as a base64-encoded String. Drift detection is not possible for this argument. At least one of `css` or `image_file` is required.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "The user pool ID for the user pool.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
