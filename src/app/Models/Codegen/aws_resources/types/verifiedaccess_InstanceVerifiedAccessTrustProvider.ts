import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface verifiedaccess_InstanceVerifiedAccessTrustProvider {
  // A description for the AWS Verified Access Instance.
  description?: string;

  // The type of device-based trust provider.
  deviceTrustProviderType?: string;

  // The type of trust provider (user- or device-based).
  trustProviderType?: string;

  // The type of user-based trust provider.
  userTrustProviderType?: string;

  // The ID of the trust provider.
  verifiedAccessTrustProviderId?: string;
}

export function verifiedaccess_InstanceVerifiedAccessTrustProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "verifiedAccessTrustProviderId",
      "The ID of the trust provider.",
      [],
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
    new DynamicUIProps(
      InputType.String,
      "deviceTrustProviderType",
      "The type of device-based trust provider.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "trustProviderType",
      "The type of trust provider (user- or device-based).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userTrustProviderType",
      "The type of user-based trust provider.",
      [],
      false,
      false,
    ),
  ];
}
