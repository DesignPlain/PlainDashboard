import { InstanceDenyMaintenancePeriodEndDate } from "./InstanceDenyMaintenancePeriodEndDate";
import { InstanceDenyMaintenancePeriodStartDate } from "./InstanceDenyMaintenancePeriodStartDate";
import { InstanceDenyMaintenancePeriodTime } from "./InstanceDenyMaintenancePeriodTime";

export interface InstanceDenyMaintenancePeriod {
  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  EndDate?: InstanceDenyMaintenancePeriodEndDate;

  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  StartDate?: InstanceDenyMaintenancePeriodStartDate;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  Time?: InstanceDenyMaintenancePeriodTime;
}
