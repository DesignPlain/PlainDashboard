import { InsightsReportConfigFrequencyOptionsStartDate } from "./InsightsReportConfigFrequencyOptionsStartDate";
import { InsightsReportConfigFrequencyOptionsEndDate } from "./InsightsReportConfigFrequencyOptionsEndDate";

export interface InsightsReportConfigFrequencyOptions {
  /*
The date to start generating inventory reports. For example, {"day": 15, "month": 8, "year": 2022}.
Structure is documented below.
*/
  StartDate?: InsightsReportConfigFrequencyOptionsStartDate;

  /*
The date to stop generating inventory reports. For example, {"day": 15, "month": 9, "year": 2022}.
Structure is documented below.
*/
  EndDate?: InsightsReportConfigFrequencyOptionsEndDate;

  /*
The frequency in which inventory reports are generated. Values are DAILY or WEEKLY.
Possible values are: `DAILY`, `WEEKLY`.
*/
  Frequency?: string;
}
