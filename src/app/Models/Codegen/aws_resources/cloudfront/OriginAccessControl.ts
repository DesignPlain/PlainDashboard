import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OriginAccessControlArgs {
  // The description of the Origin Access Control. Defaults to "Managed by Pulumi" if omitted.
  description?: string;

  // A name that identifies the Origin Access Control.
  name?: string;

  // The type of origin that this Origin Access Control is for. Valid values are `s3`, and `mediastore`.
  originAccessControlOriginType?: string;

  // Specifies which requests CloudFront signs. Specify `always` for the most common use case. Allowed values: `always`, `never`, and `no-override`.
  signingBehavior?: string;

  // Determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.
  signingProtocol?: string;
}
export class OriginAccessControl extends Resource {
  // The type of origin that this Origin Access Control is for. Valid values are `s3`, and `mediastore`.
  public originAccessControlOriginType?: string;

  // Specifies which requests CloudFront signs. Specify `always` for the most common use case. Allowed values: `always`, `never`, and `no-override`.
  public signingBehavior?: string;

  // Determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.
  public signingProtocol?: string;

  // The description of the Origin Access Control. Defaults to "Managed by Pulumi" if omitted.
  public description?: string;

  // The current version of this Origin Access Control.
  public etag?: string;

  // A name that identifies the Origin Access Control.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the Origin Access Control. Defaults to "Managed by Pulumi" if omitted.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name that identifies the Origin Access Control.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "originAccessControlOriginType",
        "The type of origin that this Origin Access Control is for. Valid values are `s3`, and `mediastore`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "signingBehavior",
        "Specifies which requests CloudFront signs. Specify `always` for the most common use case. Allowed values: `always`, `never`, and `no-override`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "signingProtocol",
        "Determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.",
        [],
        true,
        false,
      ),
    ];
  }
}
