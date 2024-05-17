import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTraffic {
  // Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  Percent?: number;

  // Revision to which to send this portion of traffic, if traffic allocation is by revision.
  Revision?: string;

  // Indicates a string to be part of the URI to exclusively reference this target.
  Tag?: string;

  /*
The allocation type for this traffic target.
Possible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.
*/
  Type?: string;
}

export function Cloudrunv2_ServiceTraffic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Revision",
      "Revision to which to send this portion of traffic, if traffic allocation is by revision.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "Indicates a string to be part of the URI to exclusively reference this target.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The allocation type for this traffic target.\nPossible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percent",
      "Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.",
      [],
      false,
      false,
    ),
  ];
}
