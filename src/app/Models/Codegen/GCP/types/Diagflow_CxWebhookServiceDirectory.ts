import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxWebhookServiceDirectoryGenericWebService,
  Diagflow_CxWebhookServiceDirectoryGenericWebService_GetTypes,
} from "./Diagflow_CxWebhookServiceDirectoryGenericWebService";

export interface Diagflow_CxWebhookServiceDirectory {
  /*
The name of Service Directory service.
Structure is documented below.
*/
  GenericWebService?: Diagflow_CxWebhookServiceDirectoryGenericWebService;

  // The name of Service Directory service.
  Service?: string;
}

export function Diagflow_CxWebhookServiceDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GenericWebService",
      "The name of Service Directory service.\nStructure is documented below.",
      Diagflow_CxWebhookServiceDirectoryGenericWebService_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The name of Service Directory service.",
      [],
      true,
      false,
    ),
  ];
}
