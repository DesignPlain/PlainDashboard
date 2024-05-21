import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_SloRequestBasedSli,
  monitoring_SloRequestBasedSli_GetTypes,
} from "../types/monitoring_SloRequestBasedSli";
import {
  monitoring_SloWindowsBasedSli,
  monitoring_SloWindowsBasedSli_GetTypes,
} from "../types/monitoring_SloWindowsBasedSli";
import {
  monitoring_SloBasicSli,
  monitoring_SloBasicSli_GetTypes,
} from "../types/monitoring_SloBasicSli";

export interface SloArgs {
  /*
A calendar period, semantically "since the start of the current
<calendarPeriod>".
Possible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.
*/
  calendarPeriod?: string;

  // Name used for UI elements listing this SLO.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A request-based SLI defines a SLI for which atomic units of
service are counted directly.
A SLI describes a good service.
It is used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  requestBasedSli?: monitoring_SloRequestBasedSli;

  // The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  sloId?: string;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  userLabels?: Map<string, string>;

  /*
A windows-based SLI defines the criteria for time windows.
good_service is defined based off the count of these time windows
for which the provided service was of good quality.
A SLI describes a good service. It is used to measure and calculate
the quality of the Service's performance with respect to a single
aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  windowsBasedSli?: monitoring_SloWindowsBasedSli;

  /*
Basic Service-Level Indicator (SLI) on a well-known service type.
Performance will be computed on the basis of pre-defined metrics.
SLIs are used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  basicSli?: monitoring_SloBasicSli;

  /*
The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
*/
  goal?: number;

  /*
A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
*/
  rollingPeriodDays?: number;

  /*
ID of the service to which this SLO belongs.


- - -
*/
  service?: string;
}
export class Slo extends Resource {
  /*
A request-based SLI defines a SLI for which atomic units of
service are counted directly.
A SLI describes a good service.
It is used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  public requestBasedSli?: monitoring_SloRequestBasedSli;

  /*
A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
*/
  public rollingPeriodDays?: number;

  // The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  public sloId?: string;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  public userLabels?: Map<string, string>;

  /*
Basic Service-Level Indicator (SLI) on a well-known service type.
Performance will be computed on the basis of pre-defined metrics.
SLIs are used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  public basicSli?: monitoring_SloBasicSli;

  /*
A calendar period, semantically "since the start of the current
<calendarPeriod>".
Possible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.
*/
  public calendarPeriod?: string;

  /*
The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
*/
  public goal?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A windows-based SLI defines the criteria for time windows.
good_service is defined based off the count of these time windows
for which the provided service was of good quality.
A SLI describes a good service. It is used to measure and calculate
the quality of the Service's performance with respect to a single
aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  public windowsBasedSli?: monitoring_SloWindowsBasedSli;

  // Name used for UI elements listing this SLO.
  public displayName?: string;

  /*
The full resource name for this service. The syntax is:
projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
*/
  public name?: string;

  /*
ID of the service to which this SLO belongs.


- - -
*/
  public service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "userLabels",
        "This field is intended to be used for organizing and identifying the AlertPolicy\nobjects.The field can contain up to 64 entries. Each key and value is limited\nto 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values\ncan contain only lowercase letters, numerals, underscores, and dashes. Keys\nmust begin with a letter.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "basicSli",
        "Basic Service-Level Indicator (SLI) on a well-known service type.\nPerformance will be computed on the basis of pre-defined metrics.\nSLIs are used to measure and calculate the quality of the Service's\nperformance with respect to a single aspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        monitoring_SloBasicSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "goal",
        "The fraction of service that must be good in order for this objective\nto be met. 0 < goal <= 0.999",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "calendarPeriod",
        'A calendar period, semantically "since the start of the current\n<calendarPeriod>".\nPossible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "requestBasedSli",
        "A request-based SLI defines a SLI for which atomic units of\nservice are counted directly.\nA SLI describes a good service.\nIt is used to measure and calculate the quality of the Service's\nperformance with respect to a single aspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        monitoring_SloRequestBasedSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sloId",
        "The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "windowsBasedSli",
        "A windows-based SLI defines the criteria for time windows.\ngood_service is defined based off the count of these time windows\nfor which the provided service was of good quality.\nA SLI describes a good service. It is used to measure and calculate\nthe quality of the Service's performance with respect to a single\naspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        monitoring_SloWindowsBasedSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "rollingPeriodDays",
        'A rolling time period, semantically "in the past X days".\nMust be between 1 to 30 days, inclusive.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "ID of the service to which this SLO belongs.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Name used for UI elements listing this SLO.",
        [],
        false,
        false,
      ),
    ];
  }
}
