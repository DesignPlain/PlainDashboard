import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  verifiedaccess_InstanceVerifiedAccessTrustProvider,
  verifiedaccess_InstanceVerifiedAccessTrustProvider_GetTypes,
} from "../types/verifiedaccess_InstanceVerifiedAccessTrustProvider";

export interface InstanceArgs {
  // Enable or disable support for Federal Information Processing Standards (FIPS) on the AWS Verified Access Instance.
  fipsEnabled?: boolean;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A description for the AWS Verified Access Instance.
  description?: string;
}
export class Instance extends Resource {
  // The time that the Verified Access Instance was last updated.
  public lastUpdatedTime?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // One or more blocks of providing information about the AWS Verified Access Trust Providers. See verified_access_trust_providers below for details.One or more blocks
  public verifiedAccessTrustProviders?: Array<verifiedaccess_InstanceVerifiedAccessTrustProvider>;

  // The time that the Verified Access Instance was created.
  public creationTime?: string;

  // A description for the AWS Verified Access Instance.
  public description?: string;

  // Enable or disable support for Federal Information Processing Standards (FIPS) on the AWS Verified Access Instance.
  public fipsEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "fipsEnabled",
        "Enable or disable support for Federal Information Processing Standards (FIPS) on the AWS Verified Access Instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the AWS Verified Access Instance.",
        [],
        false,
        false,
      ),
    ];
  }
}
