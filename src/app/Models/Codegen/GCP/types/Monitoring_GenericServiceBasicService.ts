import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_GenericServiceBasicService {
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

export function Monitoring_GenericServiceBasicService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "ServiceLabels",
      "Labels that specify the resource that emits the monitoring data\nwhich is used for SLO reporting of this `Service`.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceType",
      "The type of service that this basic service defines, e.g.\nAPP_ENGINE service type",
      [],
      false,
      false,
    ),
  ];
}
