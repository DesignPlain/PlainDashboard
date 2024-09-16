import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  monitoring_CustomServiceTelemetry,
  monitoring_CustomServiceTelemetry_GetTypes,
} from '../types/monitoring_CustomServiceTelemetry';

export interface CustomServiceArgs {
  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  telemetry?: monitoring_CustomServiceTelemetry;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  userLabels?: Map<string, string>;

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
*/
  serviceId?: string;
}
export class CustomService extends DS_Resource {
  /*
An optional service ID to use. If not given, the server will generate a
service ID.
*/
  public serviceId?: string;

  /*
Configuration for how to query telemetry on a Service.
Structure is documented below.
*/
  public telemetry?: monitoring_CustomServiceTelemetry;

  /*
Labels which have been used to annotate the service. Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.
*/
  public userLabels?: Map<string, string>;

  // Name used for UI elements listing this Service.
  public displayName?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'An optional service ID to use. If not given, the server will generate a\nservice ID.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'telemetry',
        'Configuration for how to query telemetry on a Service.\nStructure is documented below.',
        () => monitoring_CustomServiceTelemetry_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'userLabels',
        'Labels which have been used to annotate the service. Label keys must start\nwith a letter. Label keys and values may contain lowercase letters,\nnumbers, underscores, and dashes. Label keys and values have a maximum\nlength of 63 characters, and must be less than 128 bytes in size. Up to 64\nlabel entries may be stored. For labels which do not have a semantic value,\nthe empty string may be supplied for the label value.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Name used for UI elements listing this Service.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
