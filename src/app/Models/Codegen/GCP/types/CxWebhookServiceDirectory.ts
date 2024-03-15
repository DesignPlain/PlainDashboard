import { CxWebhookServiceDirectoryGenericWebService } from "./CxWebhookServiceDirectoryGenericWebService";

export interface CxWebhookServiceDirectory {
  /*
The name of Service Directory service.
Structure is documented below.
*/
  GenericWebService?: CxWebhookServiceDirectoryGenericWebService;

  // The name of Service Directory service.
  Service?: string;
}
