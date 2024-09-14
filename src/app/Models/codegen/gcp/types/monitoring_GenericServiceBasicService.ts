import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface monitoring_GenericServiceBasicService {
  /*
Labels that specify the resource that emits the monitoring data
which is used for SLO reporting of this `Service`.
*/
  serviceLabels?: Map<string, string>;

  /*
The type of service that this basic service defines, e.g.
APP_ENGINE service type
*/
  serviceType?: string;
}

export function monitoring_GenericServiceBasicService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "serviceLabels",
      "Labels that specify the resource that emits the monitoring data\nwhich is used for SLO reporting of this `Service`.",
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceType",
      "The type of service that this basic service defines, e.g.\nAPP_ENGINE service type",
      () => [],
      false,
      false,
    ),
  ];
}
