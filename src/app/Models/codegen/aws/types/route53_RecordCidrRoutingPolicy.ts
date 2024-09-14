import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_RecordCidrRoutingPolicy {
  // The CIDR collection ID. See the `aws.route53.CidrCollection` resource for more details.
  collectionId?: string;

  // The CIDR collection location name. See the `aws.route53.CidrLocation` resource for more details. A `location_name` with an asterisk `"-"` can be used to create a default CIDR record. `collection_id` is still required for default record.
  locationName?: string;
}

export function route53_RecordCidrRoutingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "locationName",
      'The CIDR collection location name. See the `aws.route53.CidrLocation` resource for more details. A `location_name` with an asterisk `"*"` can be used to create a default CIDR record. `collection_id` is still required for default record.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "collectionId",
      "The CIDR collection ID. See the `aws.route53.CidrCollection` resource for more details.",
      () => [],
      true,
      false,
    ),
  ];
}
