import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_DistributionOriginGroupFailoverCriteria,
  cloudfront_DistributionOriginGroupFailoverCriteria_GetTypes,
} from "./cloudfront_DistributionOriginGroupFailoverCriteria";
import {
  cloudfront_DistributionOriginGroupMember,
  cloudfront_DistributionOriginGroupMember_GetTypes,
} from "./cloudfront_DistributionOriginGroupMember";

export interface cloudfront_DistributionOriginGroup {
  // The failover criteria for when to failover to the secondary origin.
  failoverCriteria?: cloudfront_DistributionOriginGroupFailoverCriteria;

  // Ordered member configuration blocks assigned to the origin group, where the first member is the primary origin. You must specify two members.
  members?: Array<cloudfront_DistributionOriginGroupMember>;

  // Unique identifier of the member origin.
  originId?: string;
}

export function cloudfront_DistributionOriginGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "failoverCriteria",
      "The failover criteria for when to failover to the secondary origin.",
      cloudfront_DistributionOriginGroupFailoverCriteria_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "members",
      "Ordered member configuration blocks assigned to the origin group, where the first member is the primary origin. You must specify two members.",
      cloudfront_DistributionOriginGroupMember_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originId",
      "Unique identifier of the member origin.",
      [],
      true,
      false,
    ),
  ];
}
