import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrunv2_getServiceTraffic {
  // Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  percent?: number;

  // Revision to which to send this portion of traffic, if traffic allocation is by revision.
  revision?: string;

  // Indicates a string to be part of the URI to exclusively reference this target.
  tag?: string;

  // The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]
  type?: string;
}

export function cloudrunv2_getServiceTraffic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Indicates a string to be part of the URI to exclusively reference this target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "Revision to which to send this portion of traffic, if traffic allocation is by revision.",
      [],
      true,
      false,
    ),
  ];
}
