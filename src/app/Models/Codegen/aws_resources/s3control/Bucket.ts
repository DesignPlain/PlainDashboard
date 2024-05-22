import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BucketArgs {
  // Name of the bucket.
  bucket?: string;

  // Identifier of the Outpost to contain this bucket.
  outpostId?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Bucket extends Resource {
  // Boolean whether Public Access Block is enabled.
  public publicAccessBlockEnabled?: boolean;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the bucket.
  public arn?: string;

  // Name of the bucket.
  public bucket?: string;

  // UTC creation date in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public creationDate?: string;

  // Identifier of the Outpost to contain this bucket.
  public outpostId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "outpostId",
        "Identifier of the Outpost to contain this bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
