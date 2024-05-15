import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_GenericServiceTelemetry,
  Monitoring_GenericServiceTelemetry_GetTypes,
} from "../types/Monitoring_GenericServiceTelemetry";
import {
  Monitoring_GenericServiceBasicService,
  Monitoring_GenericServiceBasicService_GetTypes,
} from "../types/Monitoring_GenericServiceBasicService";

export interface GenericServiceArgs {
  /*
A well-known service type, defined by its service type and service labels.
Valid values of service types and services labels are described at
https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli
Structure is documented below.
*/
  BasicService?: Monitoring_GenericServiceBasicService;

  // Name used for UI elements listing this Service.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
An optional service ID to use. If not given, the server will generate a
service ID.


- - -
*/
  ServiceId?: string;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  UserLabels?: Map<string, string>;
}
export class GenericService extends Resource {
  /*
A well-known service type, defined by its service type and service labels.
Valid values of service types and services labels are described at
https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli
Structure is documented below.
*/
  public BasicService?: Monitoring_GenericServiceBasicService;

  // Name used for UI elements listing this Service.
  public DisplayName?: string;

  /*
The full resource name for this service. The syntax is:
projects/[PROJECT_ID]/services/[SERVICE_ID].
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An optional service ID to use. If not given, the server will generate a
service ID.


- - -
*/
  public ServiceId?: string;

  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  public Telemetries?: Array<Monitoring_GenericServiceTelemetry>;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  public UserLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Name used for UI elements listing this Service.",
        [],
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
      new DynamicUIProps(
        InputType.String,
        "ServiceId",
        "An optional service ID to use. If not given, the server will generate a\nservice ID.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "UserLabels",
        "Labels which have been used to annotate the service. Label keys must start\nwith a letter. Label keys and values may contain lowercase letters,\nnumbers, underscores, and dashes. Label keys and values have a maximum\nlength of 63 characters, and must be less than 128 bytes in size. Up to 64\nlabel entries may be stored. For labels which do not have a semantic value,\nthe empty string may be supplied for the label value.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BasicService",
        "A well-known service type, defined by its service type and service labels.\nValid values of service types and services labels are described at\nhttps://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli\nStructure is documented below.",
        Monitoring_GenericServiceBasicService_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
