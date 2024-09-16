import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  monitoring_GenericServiceTelemetry,
  monitoring_GenericServiceTelemetry_GetTypes,
} from '../types/monitoring_GenericServiceTelemetry';
import {
  monitoring_GenericServiceBasicService,
  monitoring_GenericServiceBasicService_GetTypes,
} from '../types/monitoring_GenericServiceBasicService';

export interface GenericServiceArgs {
  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  userLabels?: Map<string, string>;

  /*
A well-known service type, defined by its service type and service labels.
Valid values of service types and services labels are described at
https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli
Structure is documented below.
*/
  basicService?: monitoring_GenericServiceBasicService;

  // Name used for UI elements listing this Service.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An optional service ID to use. If not given, the server will generate a
service ID.


- - -
*/
  serviceId?: string;
}
export class GenericService extends DS_Resource {
  /*
The full resource name for this service. The syntax is:
projects/[PROJECT_ID]/services/[SERVICE_ID].
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
An optional service ID to use. If not given, the server will generate a
service ID.


- - -
*/
  public serviceId?: string;

  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  public telemetries?: Array<monitoring_GenericServiceTelemetry>;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  public userLabels?: Map<string, string>;

  /*
A well-known service type, defined by its service type and service labels.
Valid values of service types and services labels are described at
https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli
Structure is documented below.
*/
  public basicService?: monitoring_GenericServiceBasicService;

  // Name used for UI elements listing this Service.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'userLabels',
        'Labels which have been used to annotate the service. Label keys must start\nwith a letter. Label keys and values may contain lowercase letters,\nnumbers, underscores, and dashes. Label keys and values have a maximum\nlength of 63 characters, and must be less than 128 bytes in size. Up to 64\nlabel entries may be stored. For labels which do not have a semantic value,\nthe empty string may be supplied for the label value.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'basicService',
        'A well-known service type, defined by its service type and service labels.\nValid values of service types and services labels are described at\nhttps://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli\nStructure is documented below.',
        () => monitoring_GenericServiceBasicService_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Name used for UI elements listing this Service.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceId',
        'An optional service ID to use. If not given, the server will generate a\nservice ID.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
