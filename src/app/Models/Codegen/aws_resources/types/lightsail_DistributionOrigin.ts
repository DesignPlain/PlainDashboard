import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_DistributionOrigin {
  // The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
  protocolPolicy?: string;

  // The AWS Region name of the origin resource.
  regionName?: string;

  // The resource type of the origin resource (e.g., Instance).
  resourceType?: string;

  // The name of the origin resource. Your origin can be an instance with an attached static IP, a bucket, or a load balancer that has at least one instance attached to it.
  name?: string;
}

export function lightsail_DistributionOrigin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the origin resource. Your origin can be an instance with an attached static IP, a bucket, or a load balancer that has at least one instance attached to it.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocolPolicy",
      "The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "The AWS Region name of the origin resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The resource type of the origin resource (e.g., Instance).",
      [],
      false,
      false,
    ),
  ];
}
