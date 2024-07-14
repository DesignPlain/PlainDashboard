import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ImageVersionArgs {
  // The registry path of the container image on which this image version is based.
  baseImage?: string;

  // The name of the image. Must be unique to your account.
  imageName?: string;
}
export class ImageVersion extends Resource {
  // The registry path of the container image on which this image version is based.
  public baseImage?: string;

  // The registry path of the container image that contains this image version.
  public containerImage?: string;

  // The Amazon Resource Name (ARN) of the image the version is based on.
  public imageArn?: string;

  // The name of the image. Must be unique to your account.
  public imageName?: string;

  //
  public version?: number;

  // The Amazon Resource Name (ARN) assigned by AWS to this Image Version.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "baseImage",
        "The registry path of the container image on which this image version is based.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageName",
        "The name of the image. Must be unique to your account.",
        [],
        true,
        true,
      ),
    ];
  }
}
