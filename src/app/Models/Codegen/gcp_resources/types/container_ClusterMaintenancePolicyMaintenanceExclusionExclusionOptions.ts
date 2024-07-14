import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
  /*
The scope of automatic upgrades to restrict in the exclusion window. One of: --NO_UPGRADES | NO_MINOR_UPGRADES | NO_MINOR_OR_NODE_UPGRADES--

Specify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time's date is
the initial date that the window starts, and the end time is used for calculating duration.Specify `recurrence` in
[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.
Note that GKE may accept other formats, but will return values in UTC, causing a permanent diff.

Examples:
*/
  scope?: string;
}

export function container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scope",
      'The scope of automatic upgrades to restrict in the exclusion window. One of: **NO_UPGRADES | NO_MINOR_UPGRADES | NO_MINOR_OR_NODE_UPGRADES**\n\nSpecify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time\'s date is\nthe initial date that the window starts, and the end time is used for calculating duration.Specify `recurrence` in\n[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.\nNote that GKE may accept other formats, but will return values in UTC, causing a permanent diff.\n\nExamples:',
      [],
      true,
      false,
    ),
  ];
}
