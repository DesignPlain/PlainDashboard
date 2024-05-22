import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ImageArgs {
  // The description of the image.
  description?: string;

  // The display name of the image. When the image is added to a domain (must be unique to the domain).
  displayName?: string;

  // The name of the image. Must be unique to your account.
  imageName?: string;

  // The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
  roleArn?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Image extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Image.
  public arn?: string;

  // The description of the image.
  public description?: string;

  // The display name of the image. When the image is added to a domain (must be unique to the domain).
  public displayName?: string;

  // The name of the image. Must be unique to your account.
  public imageName?: string;

  // The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
  public roleArn?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name of the image. When the image is added to a domain (must be unique to the domain).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageName",
        "The name of the image. Must be unique to your account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the image.",
        [],
        false,
        false,
      ),
    ];
  }
}
