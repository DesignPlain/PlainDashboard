import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface HostedZoneDnsSecArgs {
  /*
Identifier of the Route 53 Hosted Zone.

The following arguments are optional:
*/
  hostedZoneId?: string;

  // Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.
  signingStatus?: string;
}
export class HostedZoneDnsSec extends DS_Resource {
  /*
Identifier of the Route 53 Hosted Zone.

The following arguments are optional:
*/
  public hostedZoneId?: string;

  // Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.
  public signingStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'hostedZoneId',
        'Identifier of the Route 53 Hosted Zone.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'signingStatus',
        'Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
