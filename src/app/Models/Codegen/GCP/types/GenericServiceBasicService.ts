export interface GenericServiceBasicService {
  /*
Labels that specify the resource that emits the monitoring data
which is used for SLO reporting of this `Service`.
*/
  ServiceLabels?: Map<string, string>;

  /*
The type of service that this basic service defines, e.g.
APP_ENGINE service type
*/
  ServiceType?: string;
}
