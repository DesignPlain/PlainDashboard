import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketAclV2AccessControlPolicyOwner {
  // ID of the owner.
  id?: string;

  // Display name of the owner.
  displayName?: string;
}

export function s3_BucketAclV2AccessControlPolicyOwner_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Display name of the owner.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the owner.",
      [],
      true,
      false,
    ),
  ];
}
