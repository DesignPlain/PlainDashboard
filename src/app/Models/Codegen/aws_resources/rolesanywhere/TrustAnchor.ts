import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  rolesanywhere_TrustAnchorSource,
  rolesanywhere_TrustAnchorSource_GetTypes,
} from "../types/rolesanywhere_TrustAnchorSource";

export interface TrustAnchorArgs {
  // Whether or not the Trust Anchor should be enabled.
  enabled?: boolean;

  // The name of the Trust Anchor.
  name?: string;

  // The source of trust, documented below
  source?: rolesanywhere_TrustAnchorSource;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class TrustAnchor extends Resource {
  // The source of trust, documented below
  public source?: rolesanywhere_TrustAnchorSource;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the Trust Anchor
  public arn?: string;

  // Whether or not the Trust Anchor should be enabled.
  public enabled?: boolean;

  // The name of the Trust Anchor.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether or not the Trust Anchor should be enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Trust Anchor.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "The source of trust, documented below",
        rolesanywhere_TrustAnchorSource_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
