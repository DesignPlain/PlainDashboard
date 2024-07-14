import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudtrail_TrailEventSelectorDataResource,
  cloudtrail_TrailEventSelectorDataResource_GetTypes,
} from "./cloudtrail_TrailEventSelectorDataResource";

export interface cloudtrail_TrailEventSelector {
  // Whether to include management events for your trail. Defaults to `true`.
  includeManagementEvents?: boolean;

  // Type of events to log. Valid values are `ReadOnly`, `WriteOnly`, `All`. Default value is `All`.
  readWriteType?: string;

  // Configuration block for data events. See details below.
  dataResources?: Array<cloudtrail_TrailEventSelectorDataResource>;

  // A set of event sources to exclude. Valid values include: `kms.amazonaws.com` and `rdsdata.amazonaws.com`. `include_management_events` must be set to`true` to allow this.
  excludeManagementEventSources?: Array<string>;
}

export function cloudtrail_TrailEventSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includeManagementEvents",
      "Whether to include management events for your trail. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "readWriteType",
      "Type of events to log. Valid values are `ReadOnly`, `WriteOnly`, `All`. Default value is `All`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataResources",
      "Configuration block for data events. See details below.",
      cloudtrail_TrailEventSelectorDataResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludeManagementEventSources",
      "A set of event sources to exclude. Valid values include: `kms.amazonaws.com` and `rdsdata.amazonaws.com`. `include_management_events` must be set to`true` to allow this.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
