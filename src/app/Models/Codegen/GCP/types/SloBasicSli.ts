import { SloBasicSliAvailability } from "./SloBasicSliAvailability";
import { SloBasicSliLatency } from "./SloBasicSliLatency";

export interface SloBasicSli {
  /*
An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
*/
  Methods?: Array<string>;

  /*
The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
*/
  Versions?: Array<string>;

  /*
Availability based SLI, dervied from count of requests made to this service that return successfully.
Structure is documented below.
*/
  Availability?: SloBasicSliAvailability;

  /*
Parameters for a latency threshold SLI.
Structure is documented below.
*/
  Latency?: SloBasicSliLatency;

  /*
An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
*/
  Locations?: Array<string>;
}
