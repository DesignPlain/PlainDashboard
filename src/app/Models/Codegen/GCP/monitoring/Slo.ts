import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloRequestBasedSli,
  Monitoring_SloRequestBasedSli_GetTypes,
} from "../types/Monitoring_SloRequestBasedSli";
import {
  Monitoring_SloWindowsBasedSli,
  Monitoring_SloWindowsBasedSli_GetTypes,
} from "../types/Monitoring_SloWindowsBasedSli";
import {
  Monitoring_SloBasicSli,
  Monitoring_SloBasicSli_GetTypes,
} from "../types/Monitoring_SloBasicSli";

export interface SloArgs {
  /*
The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
*/
  Goal?: number;

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
  RequestBasedSli?: Monitoring_SloRequestBasedSli;

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
  WindowsBasedSli?: Monitoring_SloWindowsBasedSli;

  /*
A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
*/
  RollingPeriodDays?: number;

  /*
ID of the service to which this SLO belongs.


- - -
*/
  Service?: string;

  // The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  SloId?: string;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  UserLabels?: Map<string, string>;

  /*
Basic Service-Level Indicator (SLI) on a well-known service type.
Performance will be computed on the basis of pre-defined metrics.
SLIs are used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  BasicSli?: Monitoring_SloBasicSli;

  /*
A calendar period, semantically "since the start of the current
<calendarPeriod>".
Possible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.
*/
  CalendarPeriod?: string;

  // Name used for UI elements listing this SLO.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Slo extends Resource {
  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  public UserLabels?: Map<string, string>;

  /*
Basic Service-Level Indicator (SLI) on a well-known service type.
Performance will be computed on the basis of pre-defined metrics.
SLIs are used to measure and calculate the quality of the Service's
performance with respect to a single aspect of service quality.
Exactly one of the following must be set:
`basic_sli`, `request_based_sli`, `windows_based_sli`
Structure is documented below.
*/
  public BasicSli?: Monitoring_SloBasicSli;

  // Name used for UI elements listing this SLO.
  public DisplayName?: string;

  /*
The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
*/
  public Goal?: number;

  /*
The full resource name for this service. The syntax is:
projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
ID of the service to which this SLO belongs.


- - -
*/
  public Service?: string;

  // The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  public SloId?: string;

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
  public WindowsBasedSli?: Monitoring_SloWindowsBasedSli;

  /*
A calendar period, semantically "since the start of the current
<calendarPeriod>".
Possible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.
*/
  public CalendarPeriod?: string;

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
  public RequestBasedSli?: Monitoring_SloRequestBasedSli;

  /*
A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
*/
  public RollingPeriodDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Name used for UI elements listing this SLO.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RequestBasedSli",
        "A request-based SLI defines a SLI for which atomic units of\nservice are counted directly.\nA SLI describes a good service.\nIt is used to measure and calculate the quality of the Service's\nperformance with respect to a single aspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        Monitoring_SloRequestBasedSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "RollingPeriodDays",
        'A rolling time period, semantically "in the past X days".\nMust be between 1 to 30 days, inclusive.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "ID of the service to which this SLO belongs.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SloId",
        "The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "UserLabels",
        "This field is intended to be used for organizing and identifying the AlertPolicy\nobjects.The field can contain up to 64 entries. Each key and value is limited\nto 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values\ncan contain only lowercase letters, numerals, underscores, and dashes. Keys\nmust begin with a letter.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BasicSli",
        "Basic Service-Level Indicator (SLI) on a well-known service type.\nPerformance will be computed on the basis of pre-defined metrics.\nSLIs are used to measure and calculate the quality of the Service's\nperformance with respect to a single aspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        Monitoring_SloBasicSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CalendarPeriod",
        'A calendar period, semantically "since the start of the current\n<calendarPeriod>".\nPossible values are: `DAY`, `WEEK`, `FORTNIGHT`, `MONTH`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Goal",
        "The fraction of service that must be good in order for this objective\nto be met. 0 < goal <= 0.999",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WindowsBasedSli",
        "A windows-based SLI defines the criteria for time windows.\ngood_service is defined based off the count of these time windows\nfor which the provided service was of good quality.\nA SLI describes a good service. It is used to measure and calculate\nthe quality of the Service's performance with respect to a single\naspect of service quality.\nExactly one of the following must be set:\n`basic_sli`, `request_based_sli`, `windows_based_sli`\nStructure is documented below.",
        Monitoring_SloWindowsBasedSli_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
